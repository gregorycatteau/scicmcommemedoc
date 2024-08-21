// Store avec Pinia pour gérer les profils utilisateurs
// stores/user.ts
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userType: '',
    individualChoice: '',
    entrepreneurChoice: '',
    familyChoice: '',
    associationChoice: '',
    enterpriseChoice: '',
    institutionChoice: '',
    servicesEntrepreneurChoice: '',
    productionEntrepreneurChoice: '',
    socialEntrepreneurChoice: '',
    ecologicalEntrepreneurChoice: '',
    socialAssociationChoice: '',
    ecologicalAssociationChoice: '',
    otherAssociationChoice: '',
    serviceEntrepriseChoice: '',
    productionEntrepriseChoice: '',
    EsusSocialEntrepriseChoice: '',
    EsusEcologicalEntrepriseChoice: '',
    institutionCollaborativeProject: '',
    institutionActiveParticipationInGovernance: '',
    institutionFinancialInvestment: '',
    servicesProviderEntrepreneur: '',
    servicesActorEntrepreneur: '',
    ServicesPartenActorEntrepreneur: '',
    

  }),
  actions: {
    setUserType(type: string) {
      this.userType = type;
    },
    setIndividualChoice(choice: string) {
      this.individualChoice = choice;
    },
    setFamilyChoice(choice: string) {
      this.familyChoice = choice;
    },
    setEntrepreneurChoice(choice: string) {
      this.entrepreneurChoice = choice;
    },
    setAssociationChoice(choice: string) {
      this.associationChoice = choice;
    },
    setEnterpriseChoice(choice: string) {
      this.enterpriseChoice = choice;
    },
    setInstitutionChoice(choice: string) {
      this.institutionChoice = choice;
    },
    setServicesEntrepreneurChoice(choice: string) {
      this.servicesEntrepreneurChoice = choice;
    },
    setProductionEntrepreneurChoice(choice: string) {
      this.productionEntrepreneurChoice = choice;
    },
    setSocialEntrepreneurChoice(choice: string) {
      this.socialEntrepreneurChoice = choice;
    },
    setEcologicalEntrepreneurChoice(choice: string) {
      this.ecologicalEntrepreneurChoice = choice;
    },
    setSocialAssociationChoice(choice: string) {
      this.socialAssociationChoice = choice;
    },
    setEcologicalAssociationChoice(choice: string) {
      this.ecologicalAssociationChoice = choice;
    },
    setOtherAssociationChoice(choice: string) {
      this.otherAssociationChoice = choice;
    },
    setServiceEntrepriseChoice(choice: string) {
      this.serviceEntrepriseChoice = choice;
    },
    setProductionEntrepriseChoice(choice: string) {
      this.productionEntrepriseChoice = choice;
    },
    setEsusSocialEntrepriseChoice(choice: string) {
      this.EsusSocialEntrepriseChoice = choice;
    },
    setEsusEcologicalEntrepriseChoice(choice: string) {
      this.EsusEcologicalEntrepriseChoice = choice;
    },
    setInstitutionCollaborativeProject(choice: string) {
      this.institutionCollaborativeProject = choice;
    },
    setInstitutionActiveParticipationInGovernance(choice: string) {
      this.institutionActiveParticipationInGovernance = choice;
    },
    setInstitutionFinancialInvestment(choice: string) {
      this.institutionFinancialInvestment = choice;
    },
    setServicesProviderEntrepreneur(choice: string) {
      this.servicesProviderEntrepreneur = choice;
    },
    setServicesActorEntrepreneur(choice: string) {
      this.servicesActorEntrepreneur = choice;
    },
    setServicesPartenActorEntrepreneur(choice: string) {
      this.ServicesPartenActorEntrepreneur = choice;
    },

  },
});

