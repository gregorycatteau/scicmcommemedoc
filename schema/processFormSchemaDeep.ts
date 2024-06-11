import { z } from 'zod';

// Enums pour chaque type de choix
const userTypeEnum = z.enum(['individual', 'family', 'entrepreneur', 'association', 'enterprise', 'institution']);
const individualChoiceEnum = z.enum(['individualExternalClient', 'individualShareholder', 'individualConsumActor', 'financialInvestment']);
const familyChoiceEnum = z.enum(['familyExternalClient', 'familyShareholder', 'familyConsumActor', 'financialInvestment']);
const institutionChoiceEnum = z.enum(['institutionPublicRepresentation', 'institutionCollaborativeProject', 'institutionActiveParticipationInGovernance', 'institutionFinancialSupport']);

// Sous-choix pour entrepreneurs, associations et entreprises
const servicesEntrepreneurChoiceEnum = z.enum(['servicesProviderEntrepreneur', 'servicesActorEntrepreneur', 'servicesPartenActorEntrepreneur', 'financialInvestment']);
const productionEntrepreneurChoiceEnum = z.enum(['productionProviderEntrepreneur', 'productionActorEntrepreneur', 'productionPartenActorEntrepreneur', 'financialInvestment']);
const socialEntrepreneurChoiceEnum = z.enum(['socialProviderEntrepreneur', 'socialActorEntrepreneur', 'socialPartenActorEntrepreneur', 'financialInvestment']);
const ecologicalEntrepreneurChoiceEnum = z.enum(['ecologicalProviderEntrepreneur', 'ecologicalActorEntrepreneur', 'ecologicalPartenActorEntrepreneur', 'financialInvestment']);

const entrepreneurChoiceEnum = z.enum(['servicesEntrepreneur', 'productionEntrepreneur', 'socialEntrepreneur', 'ecologicalEntrepreneur']);
const entrepreneurSchema = z.object({
  entrepreneurChoice: entrepreneurChoiceEnum,
  servicesEntrepreneurChoice: servicesEntrepreneurChoiceEnum.optional(),
  productionEntrepreneurChoice: productionEntrepreneurChoiceEnum.optional(),
  socialEntrepreneurChoice: socialEntrepreneurChoiceEnum.optional(),
  ecologicalEntrepreneurChoice: ecologicalEntrepreneurChoiceEnum.optional(),
});

const associationChoiceEnum = z.enum(['socialAssociation', 'ecologicalAssociation', 'otherAssociation']);
const associationDetailChoiceEnum = z.enum(['socialProviderAssociation', 'socialActorAssociation', 'socialPartenActorAssociation', 'associationFinancialInvestment']);
const associationSchema = z.object({
  associationChoice: associationChoiceEnum,
  socialAssociationChoice: associationDetailChoiceEnum.optional(),
  ecologicalAssociationChoice: associationDetailChoiceEnum.optional(),
  otherAssociationChoice: associationDetailChoiceEnum.optional(),
});

const enterpriseChoiceEnum = z.enum(['normalServiceEntreprise', 'normalProductionEntreprise', 'EsusSocialentreprise', 'EsusEcologicalentreprise']);
const enterpriseDetailChoiceEnum = z.enum(['serviceProviderEntreprise', 'servicesActorEntreprise', 'servicesPartenActorEntreprise', 'financialInvestment']);
const enterpriseSchema = z.object({
  enterpriseChoice: enterpriseChoiceEnum,
  serviceEntrepriseChoice: enterpriseDetailChoiceEnum.optional(),
  productionEntrepriseChoice: enterpriseDetailChoiceEnum.optional(),
  EsusSocialEntrepriseChoice: enterpriseDetailChoiceEnum.optional(),
  EsusEcologicalEntrepriseChoice: enterpriseDetailChoiceEnum.optional(),
});

// Schéma principal utilisant z.union pour permettre des validations conditionnelles
const processFormSchema = z.object({
  userType: userTypeEnum,
  choiceDetails: z.union([
    individualChoiceEnum,
    familyChoiceEnum,
    institutionChoiceEnum,
    entrepreneurSchema,
    associationSchema,
    enterpriseSchema
  ]).refine(data => {
    // Vérifier ici que les choix sont cohérents avec le type d'utilisateur
    // Cette partie doit être ajustée selon la logique métier spécifique
    return true;
  }, {
    message: "Choix incohérent avec le type d'utilisateur."
  })
});

export default processFormSchema;
