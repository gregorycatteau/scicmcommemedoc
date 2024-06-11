import { z } from 'zod';

const userTypeEnum = z.enum(['individual', 'familly', 'entrepreneur', 'association', 'entreprise', 'institution']);
const individualChoiceEnum = z.enum(['individualExternalClient', 'individualShareholder', 'individualConsumActor', 'financialInvestment']);
const famillyChoiceEnum = z.enum(['famillyExternalClient', 'famillyShareholder', 'famillyConsumActor', 'financialInvestment']);
const entrepreneurChoiceEnum = z.enum(['servicesEntrepreneur', 'productionEntrepreneur', 'socialEntrepreneur', 'ecologicalEntrepreneur']);
const serviceEntrepreneurChoiceEnum = z.enum(['servicesProviderEntrepreneur', 'servicesActorEntrepreneur', 'financialInvestment']);
const productionEntrepreneurChoiceEnum = z.enum(['productionProviderEntrepreneur', 'productionActorEntrepreneur', 'productionPartenActorEntrepreneur', 'financialInvestment']);
const socialEntrepreneurChoiceEnum = z.enum(['socialProviderEntrepreneur', 'socialActorEntrepreneur', 'socialPartenActorEntrepreneur', 'financialInvestment']);
const ecologicalEntrepreneurChoiceEnum = z.enum(['ecologicalProviderEntrepreneur', 'ecologicalActorEntrepreneur', 'ecologicalPartenActorEntrepreneur', 'financialInvestment']);
const associationChoiceEnum = z.enum(['socialAssociation', 'ecologicalAssociation', 'otherAssociation']);
const socialAssociationChoiceEnum = z.enum(['socialProviderAssociation', 'socialActorAssociation', 'socialPartenActorAssociation', 'associationFinancialInvestment']);
const ecologicalAssociationChoiceEnum = z.enum(['ecologicalProviderAssociation', 'ecologicalActorAssociation', 'ecologicalPartenactorAssociation', 'associationFinancialInvestment']);
const otherAssociationChoiceEnum = z.enum(['otherProviderAssociation', 'otherActorAssociation', 'otherPartenactorAssociation', 'associationFinancialInvestment']);
const entrepriseChoiceEnum = z.enum(['normalServiceEntreprise', 'normalProductionEntreprise', 'EsusSocialentreprise', 'EsusEcologicalentreprise']);
const normalServiceEntrepriseChoiceEnum = z.enum(['serviceProviderEntreprise', 'servicesActorEntreprise', 'ServicesPartenActorEntreprise', 'entrepriseFinancialInvestment']);
const productionEntrepriseChoiceEnum = z.enum(['productionProviderEntreprise', 'productionActorEntreprise', 'productionPartenActorEntreprise', 'entrepriseFinancialInvestment']);
const EsusSocialEntrepriseChoiceEnum = z.enum(['socialProviderEntreprise', 'socialActorEntreprise', 'socialPartenActorEntreprise', 'entrepriseFinancialInvestment']);
const EsusEcologicalEntrepriseChoiceEnum = z.enum(['ecologicalProviderEntreprise', 'ecologicalActorEntreprise', 'ecologicalPartenActorEntreprise', 'entrepriseFinancialInvestment']);
const institutionChoiceEnum = z.enum(['institutionPublicRepresentation', 'institutioncollaborativeProject', 'institutionActiveParticipationInGovernance', 'institutionFinancialInvestment']);

const processFormSchema = z.object({
  userType: userTypeEnum.refine(data => data !== undefined, {
    message: "Le choix d'un profil est requis", // Message d'erreur personnalisé
  }),
  individualChoice: individualChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'individual'

    message: "Le choix d'un type d'interaction est requis",
  
  }),
  famillyChoice: famillyChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'familly'

    message: "Le choix d'un type d'interaction est requis",
  
  }),
  entrepreneurChoice: entrepreneurChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'individual'

    message: "Le choix du profil est requis",
  
  }),
  serviceEntrepreneurChoice: serviceEntrepreneurChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'familly'

    message: "Le choix d'un type d'interaction est requis",
  
  }),
  productionEntrepreneurChoice: productionEntrepreneurChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'familly'

    message: "Le choix d'un type d'interaction est requis",
  
  }),
  socialEntrepreneurChoice: socialEntrepreneurChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'familly'

    message: "Le choix d'un type d'interaction est requis",
  
  }),
  ecologicalEntrepreneurChoice: ecologicalEntrepreneurChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'familly'

    message: "Le choix d'un type d'interaction est requis",
  
  }),
  associationChoice: associationChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'individual'

    message: "Le choix du profil est requis",
  
  }),
  socialAssociationChoice: socialAssociationChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'familly'

    message: "Le choix d'un type d'interaction est requis",
  
  }),
  ecologicalAssociationChoice: ecologicalAssociationChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'familly'

    message: "Le choix d'un type d'interaction est requis",
  
  }),
  otherAssociationChoice: otherAssociationChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'familly'

    message: "Le choix d'un type d'interaction est requis",
  
  }),

  entrepriseChoice: entrepriseChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'individual'

    message: "Le choix du profil est requis",
  
  }),
  serviceEntrepriseChoice: normalServiceEntrepriseChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'familly'

    message: "Le choix d'un type d'interaction est requis",
  
  }),
  productionEntrepriseChoice: productionEntrepriseChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'familly'

    message: "Le choix d'un type d'interaction est requis",
  
  }),
  socialEntrepriseChoice: EsusSocialEntrepriseChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'familly'

    message: "Le choix d'un type d'interaction est requis",
  
  }),
  ecologicalEntrepriseChoice: EsusEcologicalEntrepriseChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'familly'

    message: "Le choix d'un type d'interaction est requis",
  
  }),
  institutionChoice: institutionChoiceEnum.refine(data => data!== undefined, {
    // Exige une sélection si userType est 'familly'

    message: "Le choix d'un type d'interaction est requis",
  
  }),
});
export default processFormSchema;




