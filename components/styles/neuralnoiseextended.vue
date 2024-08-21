<template>
  <div class="neural-noise"></div>
</template>

<script>
export default {
  mounted() {
    const canvas = document.createElement('canvas');
    canvas.id = "neuro";
    const gl = canvas.getContext('webgl');
    this.$el.appendChild(canvas);

    const vertShaderSource = `
      precision mediump float;
      varying vec2 vUv;
      attribute vec2 a_position;
      void main() {
          vUv = .5 * (a_position + 1.);
          gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragShaderSource = `
      precision mediump float;
      varying vec2 vUv;
      uniform float u_time;
      uniform float u_ratio;
      uniform vec2 u_pointer_position;
      uniform float u_scroll_progress;
      vec2 rotate(vec2 uv, float th) {
          return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
      }
      float neuro_shape(vec2 uv, float t, float p) {
          vec2 sine_acc = vec2(0.);
          vec2 res = vec2(0.);
          float scale = 8.;
          for (int j = 0; j < 15; j++) {
              uv = rotate(uv, 1.);
              sine_acc = rotate(sine_acc, 1.);
              vec2 layer = uv * scale + float(j) + sine_acc - t;
              sine_acc += sin(layer);
              res += (.5 + .5 * cos(layer)) / scale;
              scale *= (1.2 - .07 * p);
          }
          return res.x + res.y;
      }
      void main() {
          vec2 uv = .5 * vUv;
          uv.x *= u_ratio;
          vec2 pointer = vUv - u_pointer_position;
          pointer.x *= u_ratio;
          float p = clamp(length(pointer), 0., 1.);
          p = .5 * pow(1. - p, 2.);
          float t = .01 * u_time;  // Augmenter ce multiplicateur pour accélérer l'animation
          vec3 color = vec3(0.);
          float noise = neuro_shape(uv, t, p);
          noise = 1.2 * pow(noise, 3.);
          noise += pow(noise, 10.);
          noise = max(.0, noise - .5);
          noise *= (1. - length(vUv - .5));
          color = normalize(vec3(.2, .5 + .4 * cos(3. * u_scroll_progress), .5 + .5 * sin(3. * u_scroll_progress)));
          color = color * noise;
          gl_FragColor = vec4(color, noise);
      }
    `;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragShaderSource);

    const program = createProgram(gl, vertexShader, fragmentShader);
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeUniformLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionUniformLocation = gl.getUniformLocation(program, 'u_ratio');
    const pointerPositionUniformLocation = gl.getUniformLocation(program, 'u_pointer_position');
    const scrollProgressUniformLocation = gl.getUniformLocation(program, 'u_scroll_progress');

    gl.useProgram(program);

    function render(time) {
      time *= 0.02;  // Augmenter cette valeur pour accélérer l'animation
      gl.uniform1f(timeUniformLocation, time);
      gl.uniform1f(resolutionUniformLocation, gl.canvas.width / gl.canvas.height);
      gl.uniform2f(pointerPositionUniformLocation, 0.5, 0.5);
      gl.uniform1f(scrollProgressUniformLocation, window.scrollY / window.innerHeight);
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    }
    render();

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    function createProgram(gl, vertexShader, fragmentShader) {
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));
        return null;
      }
      return program;
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.uniform1f(resolutionUniformLocation, canvas.width / canvas.height);
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
  }
}
</script>

<style scoped>
.neural-noise {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
}
</style>

