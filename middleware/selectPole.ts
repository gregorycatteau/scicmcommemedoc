// middleware/selectPoles.ts
import { usePoleStore } from '~/stores/querypoles';

export default defineNuxtRouteMiddleware((to, from) => {
  const store = usePoleStore();
  const validPoles = ['famille', '(ré)appropriation du savoir', 'économie locale et circulaire', 'santé bien être', 'habitat solidaire'];

  const queryPole = to.query.pole;

  console.log('Middleware: queryPole =', queryPole); // Ajout de logs pour vérifier les valeurs

  if (Array.isArray(queryPole)) {
    store.clearPole();
    console.log('Middleware: Cleared pole because queryPole is an array');
    return navigateTo('/');
  }

  if (typeof queryPole === 'string' && validPoles.includes(queryPole)) {
    store.setSelectedPole(queryPole);
    console.log('Middleware: Set selectedPole to', queryPole);
  } else {
    store.clearPole();
    console.log('Middleware: Cleared pole because queryPole is invalid');
    if (queryPole) {
      return navigateTo('/');
    }
  }

  console.log('Middleware: selectedPole after processing =', store.selectedPole); // Log de l'état du store après traitement
});


