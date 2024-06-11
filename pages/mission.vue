<template>
  <div class="main-container">
    <Beforeallmission />
  </div>
</template>

<script setup>
import Beforeallmission from '~/components/beforeallmission.vue';
</script>

<style scoped>
/* Unset styles */
*:not(head, script, svg, svg *),
*:not(head, script, svg, svg *)::before,
*:not(head, script, svg, svg *)::after {
  all: unset;
  box-sizing: border-box;
}

/* Body and HTML styles */
body,
html {
  overflow: hidden;
}

body {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  background: black;
  color: white;
}

/* Main container styles */
.main-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/firstperiod.png') no-repeat center center;
  background-size: cover;
  z-index: 1;
}

/* Beforeallmission component styles */
.main-container::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  content: "";
  animation: a 20s ease infinite;
  z-index: -1;
}

@keyframes a {
  0%, 100% {
    backdrop-filter: blur(0.5vmin) hue-rotate(0deg);
    -webkit-backdrop-filter: blur(0.5vmin) hue-rotate(0deg);
  }
  25%, 75% {
    backdrop-filter: blur(0.25vmin) hue-rotate(180deg);
    -webkit-backdrop-filter: blur(0.25vmin) hue-rotate(180deg);
  }
  50% {
    backdrop-filter: blur(0.5vmin) hue-rotate(360deg);
    -webkit-backdrop-filter: blur(0.5vmin) hue-rotate(360deg);
  }
}

/* After pseudo-element for main container */
.main-container::after {
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 60px;
  height: 60%;
  background-image: linear-gradient(
    320deg,
    #ff20fb,
    #f424ff,
    #d42dff,
    #b139ff,
    #9742ff,
    #8d46ff
  );
  content: "";
  z-index: -1;
  animation: d 5s linear infinite;
}

@keyframes d {
  from {
    filter: hue-rotate(0deg) brightness(1.5);
    transform: rotateZ(0deg);
    border-radius: 0;
  }
  50% {
    border-radius: 49%;
    filter: hue-rotate(180deg) brightness(1.5);
  }
  to {
    filter: hue-rotate(360deg) brightness(1.5);
    transform: rotateZ(360deg);
    border-radius: 0;
  }
}

@media (max-width: 780px) {
  .main-container {
    max-width: 90%;
  }
}
</style>
