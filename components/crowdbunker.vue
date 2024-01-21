<template>
  <div>
    <videoplayer 
      video-url="/projets.mp4" 
      width="1800" 
      height="1450" 
    />
  </div>
</template>

<script>
import videoplayer from '~/components/videoplayer.vue';

export default {
  components: {
    videoplayer
  }
};
</script>
