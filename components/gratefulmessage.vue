<template>
  <UModal v-model="visible">
    <UCard>
      <template #header>
        <div class="headerwrapper" @click="closeModal">
          <p class="wrappertitle">fermer</p>
          <UIcon name="i-charm-cross" class="icon" dynamic />
        </div>
      </template>
      <p class="maintext">
        Votre message a bien été envoyé.
        Toute l'équipe de M Comme Médoc se mobilise pour vous répondre dans les plus brefs délais.
        Nous vous remercions encore de votre confiance.
      </p>
      <template #footer>
        <Placeholder class="h-8" />
      </template>
    </UCard>
  </UModal>
</template>

<script setup>
import { ref, watch } from 'vue'

const visible = ref(false)
const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])

watch(() => props.modelValue, (newVal) => {
  visible.value = newVal
})

const closeModal = () => {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.headerwrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wrappertitle {
  font-weight: bold;
}
.icon {
  cursor: pointer;
}
.maintext {
  margin-top: 1rem;
}
</style>
