<template>
  <div class="wrapper">
    <DiscoveryHeading/>
    <DiscoverySectionsPrinciplessectionEssay/>
    <DiscoverySectionsDualistsection/>
    <DiscoverySectionsIntermediate/>
    <DiscoverySectionsColleges/>
  </div>
</template>

<script setup lang="ts">
import DiscoveryHeading from "~/components/discovery/heading.vue";
import DiscoverySectionsPrinciplessectionEssay from "~/components/discovery/sections/principlesectionessay.vue";
import DiscoverySectionsDualistsection from "~/components/discovery/sections/dualistsection.vue";
import DiscoverySectionsIntermediate from "~/components/discovery/sections/intermediate.vue";
import DiscoverySectionsColleges from "~/components/discovery/sections/colleges.vue";


</script>

<style scoped>

.wrapper {
  @apply mt-3;
}
</style>
