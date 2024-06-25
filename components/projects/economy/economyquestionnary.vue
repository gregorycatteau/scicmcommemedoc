<template>
  <div class="wrapperquestionnary">
    <p class="questionnarytitle">
      Vous pouvez accéder aux questionnaires en cliquant sur les liens
      ci-dessous :
    </p>
    <div class="questionnarybuttonwrapper">
      <a
        href="https://gregory-7573.formaloo.co/u4l4pp"
        class="questionnarybutton"
        >Questionnaire consommateurs</a
      >
      <a
        href="https://gregory-7573.formaloo.co/g7o4q5"
        class="questionnarybutton"
        >Questionnaire producteurs</a
      >
    </div>
  </div>
</template>

<style scoped>
.wrapperquestionnary {
  @apply flex flex-col gap-10 sm:gap-14 md:gap-20 ring-2 ring-scicgreen p-20 sm:p-32 md:p-44 rounded-lg;
  background-image: url("/questionary.png");
  background-size: cover;
  background-position: initial;
}
.questionnarytitle {
  @apply text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center p-2 sm:p-4 bg-scicgreen bg-opacity-55 rounded-lg;
  font-family: "Lora", serif;
}
.questionnarybuttonwrapper {
  @apply flex justify-center items-center gap-10 sm:gap-14 md:gap-20 p-2 sm:p-4;
}
.questionnarybutton {
  @apply bg-scicorange text-white font-bold py-1 sm:py-2 md:py-3 px-3 sm:px-4 md:px-6 rounded hover:bg-scicgreen transition-colors;
  font-family: Montserrat;
}
</style>
