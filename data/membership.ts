import { idText } from "typescript";

interface MembershipOption {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  collegeName: string;
  isactionnary: boolean;
  isactivemember: boolean;
  minactions: number;
}

const memberships: Record<string, MembershipOption[]> = {
  individual: [
    {
      id: "individualExternalClient",
      title: "Client Externe",
      description: "Devenez client externe de la SCIC M Comme Médoc.",
      benefits: [
        "Participation à un projet communautaire et durable.",
        "Accès à des produits et services uniques.",
        "Réduction d'impact environnemental.",
        "Solidarité et réseau de soutien."
      ],
      collegeName: "Clients Externes",
      isactionnary: false,
      isactivemember: false,
      minactions: 0
    },
    {
      id: "individualShareholder",
      title: "Sociétaire Bénéficiaire Direct",
      description: "Devenir sociétaire de la SCIC M Comme Médoc.",
      benefits: [
        "Droit de vote et influence directe.",
        "Participation active dans la gouvernance.",
        "Avantages économiques et financiers.",
        "Renforcement du réseau local.",
        "Contribution à l'utilité sociale et au bien commun."
      ],
      collegeName: "Bénéficiaires directs",
      isactionnary: true,
      isactivemember: false,
      minactions: 2
    },
    {
      id: "individualConsumActor",
      title: "Consom'Acteur",
      description: "Devenez Consom'Acteur de la SCIC M Comme Médoc.",
      benefits: [
        "Droit de vote et influence directe.",
        "Participation active dans la gouvernance.",
        "Avantages économiques et financiers.",
        "Renforcement du réseau local.",
        "Contribution à l'utilité sociale et au bien commun.",
        "Accès à des produits et services uniques.",
        "Réduction d'impact environnemental.",
        "Solidarité et réseau de soutien.",
        "Participation à un projet communautaire et durable."
      ],
      collegeName: "Consom'Acteurs",
      isactionnary: true,
      isactivemember: true,
      minactions: 1
    },
    {
      id: "financialInvestment",
      title: "Investisseur Financier",
      description: "Contribuez financièrement à la SCIC.",
      benefits: [
        "Bénéficiez d'avantages fiscaux pour des investissements à impact social et environnemental.",
        "Trasformez votre épargne en investissement utile.",
        "Participez à la création d'emplois locaux." ],
      collegeName : "Investisseurs Financiers",
      isactionnary: true,
      isactivemember: false,
      minactions: 20
    }
     
    
  ],
  family: [
    {
      id: "familyExternalClient",
      title: "Famille Cliente",
      description: "Toute la famille bénéficie de nos offres.",
      benefits: [
        "Participation à un projet communautaire et durable.",
        "Accès à des produits et services uniques.",
        "Réduction d'impact environnemental.",
        "Solidarité et réseau de soutien."
      ],
      collegeName: "Familles clientes",
      isactionnary: false,
      isactivemember: false,
      minactions: 0
    },
    {
      id: "familyShareholder",
      title: "Famille Actionnaire",
      description: "Toute la famille participe à la gouvernance.",
      benefits: [
        "Droit de vote et influence directe.",
        "Participation active dans la gouvernance.",
        "Avantages économiques et financiers.",
        "Renforcement du réseau local.",
        "Contribution à l'utilité sociale et au bien commun."
      ],
      collegeName: "Familles actionnaires",
      isactionnary: true,
      isactivemember: false,
      minactions: 4
    },
    {
      id: "familyConsumActor",
      title: "Famille Consom'Acteur",
      description: "Toute la famille consomme responsable.",
      benefits: [
        "Droit de vote et influence directe.",
        "Participation active dans la gouvernance.",
        "Avantages économiques et financiers.",
        "Renforcement du réseau local.",
        "Contribution à l'utilité sociale et au bien commun.",
        "Accès à des produits et services uniques.",
        "Réduction d'impact environnemental.",
        "Solidarité et réseau de soutien.",
        "Participation à un projet communautaire et durable."
      ],
      collegeName: "Familles Consom'Acteurs",
      isactionnary: true,
      isactivemember: true,
      minactions: 1
    },
    {
      id: "financialInvestment",
      title: "Investisseur Financier",
      description: "Contribuez financièrement à la SCIC.",
      benefits: [
        "Bénéficiez d'avantages fiscaux pour des investissements à impact social et environnemental.",
        "Trasformez votre épargne en investissement utile.",
        "Participez à la création d'emplois locaux." ],
      collegeName : "Investisseurs Financiers",
      isactionnary: true,
      isactivemember: false,
      minactions: 20
    }
  ],
  institution: [
    {
      id: "institutionPublicRepresentation",
      title: "Représentant Public",
      description: "Représentez votre institution au sein de la SCIC.",
      benefits: [
        "Une participation directe aux décisions stratégiques de la SCIC.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Représentants Publics",
      isactionnary: false,
      isactivemember: true,
      minactions: 10
    },
    {
      id: "institutionCollaborativeProject",
      title: "Projet Collaboratif",
      description: "Collaborez avec la SCIC sur des projets communs.",
      benefits: [
        "Accès à des ressources partagées.",
        "Co-création de solutions innovantes."
      ],
      collegeName: "Projets Collaboratifs",
      isactionnary: false,
      isactivemember: true,
      minactions: 10
    },
    {
      id: "institutionActiveParticipationInGovernance",
      title: "Participation Active à la Gouvernance",
      description: "Participez activement à la gouvernance de la SCIC.",
      benefits: [
        "Droit de vote aux assemblées générales.",
        "Participation aux comités de direction."
      ],
      collegeName: "Participants Actifs à la Gouvernance",
      isactionnary: false,
      isactivemember: true,
      minactions: 10
    },
    {
      id: "institutionFinancialSupport",
      title: "Investisseur Financier",
      description: "Investissez dans des projets à impact social et environnemental.",
      benefits: [
        "Retours sur investissement.",
        "Impact social et environnemental."
      ],
      collegeName: "Investisseurs Financiers",
      isactionnary: true,
      isactivemember: false,
      minactions: 20
    }
  ],
  entrepreneur: [
    {
      id: "servicesEntrepreneur",
      title: "Prestataire de Services",
      description: "Proposez vos services à la SCIC M Comme Médoc.",
      benefits: [
        "Opportunités de collaboration.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Fournisseurs de Services",
      isactionnary: false,
      isactivemember: false,
      minactions: 0
    },
    {
      id: "productionEntrepreneur",
      title: "Producteur",
      description: "Proposez vos produits à la SCIC M Comme Médoc.",
      benefits: [
        "Accès à un marché local.",
        "Support pour le développement de produits."
      ],
      collegeName: "Producteurs locaux",
      isactionnary: true,
      isactivemember: false,
      minactions: 10
    },
    {
      id: "socialEntrepreneur",
      title: "Entrepreneur Social",
      description: "Proposez des services ou des produits d'utilité sociale.",
      benefits: [
        "Opportunités de collaboration.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Partenaires sociaux",
      isactionnary: true,
      isactivemember: true,
      minactions: 5
    },
    {
      id: "ecologicalEntrepreneur",
      title: "Entrepreneur Écologique",
      description: "Proposez des services ou des produits écologiques.",
      benefits: [
        "Opportunités de collaboration.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Partenaires écologiques",
      isactionnary: true,
      isactivemember: true,
      minactions: 10
    },
    {
      id: "servicesProviderEntrepreneur",
      title: "Fournisseur de Services",
      description: "Proposez vos services à la SCIC M Comme Médoc.",
      benefits: [
        "Opportunités de collaboration.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Fournisseurs de Services",
      isactionnary: false,
      isactivemember: false,
      minactions: 0
    },
    {
      id: "servicesActorEntrepreneur",
      title: "Acteur de Services",
      description: "Proposez vos services aux clients de la SCIC.",
      benefits: [
        "Accès à un nouveau marché.",
        "Promotion de produits locaux."
      ],
      collegeName: "Partenaires de services",
      isactionnary: true,
      isactivemember: false,
      minactions: 5
    },
    {
      id: "servicesPartenActorEntrepreneur",
      title: "Partenaire Impliqué",
      description: "Collaborez avec la SCIC sur des projets communs.",
      benefits: [
        "Accès à des ressources partagées.",
        "Co-création de solutions innovantes."
      ],
      collegeName: "Partenaires Impliqués",
      isactionnary: true,
      isactivemember: true,
      minactions: 2
    },
    {
      id: "productionProviderEntrepreneur",
      title: "Fournisseur de Produits",
      description: "Vendez vos produits à la SCIC.",
      benefits: [
        "Accès à un marché local.",
        "Support pour le développement de produits."
      ],
      collegeName: "Producteurs locaux",
      isactionnary: true,
      isactivemember: false,
      minactions: 5
    },
    {
      id: "productionActorEntrepreneur",
      title: "Acteur de Production",
      description: "Proposez vos produits aux clients de la SCIC.",
      benefits: [
        "Accès à un nouveau marché.",
        "Promotion de produits locaux."
      ],
      collegeName: "Producteurs locaux",
      isactionnary: true,
      isactivemember: false,
      minactions: 10
    },
    {
      id: "productionPartenActorEntrepreneur",
      title: "Partenaire de Production",
      description: "Collaborez sur des projets communs.",
      benefits: [
        "Accès à des ressources partagées.",
        "Co-création de solutions innovantes."
      ],
      collegeName: "Producteurs locaux",
      isactionnary: true,
      isactivemember: true,
      minactions: 5
    },
    {
      id: "financialInvestment",
      title: "Investisseur Financier",
      description: "Contribuez financièrement à la SCIC.",
      benefits: [
        "Retours sur investissement.",
        "Impact social et environnemental."
      ],
      collegeName: "Investisseurs Financiers",
      isactionnary: true,
      isactivemember: false,
      minactions: 20
    }
  ],
  association: [
    {
      id: "socialProviderAssociation",
      title: "Fournisseur Social",
      description: "Développez des actions sociales avec la SCIC.",
      benefits: [
        "Soutien pour le développement d'actions.",
        "Visibilité au sein du réseau social."
      ],
      collegeName: "Partenaires sociaux",
      isactionnary: true,
      isactivemember: true,
      minactions: 5
    },
    {
      id: "socialActorAssociation",
      title: "Acteur Social",
      description: "Développez des actions pour les bénéficiaires de la SCIC.",
      benefits: [
        "Accès à un réseau de bénéficiaires.",
        "Promotion d'actions sociales."
      ],
      collegeName: "Partenaires sociaux",
      isactionnary: true,
      isactivemember: true,
      minactions: 5
    },
    {
      id: "socialPartenActorAssociation",
      title: "Partenaire Social",
      description: "Collaborez sur des projets sociaux communs.",
      benefits: [
        "Accès à des ressources partagées.",
        "Co-création de solutions sociales."
      ],
      collegeName: "Partenaires sociaux",
      isactionnary: true,
      isactivemember: true,
      minactions: 5
    },
    {
      id: "ecologicalProviderAssociation",
      title: "Fournisseur Écologique",
      description: "Développez des actions écologiques avec la SCIC.",
      benefits: [
        "Soutien pour le développement d'actions.",
        "Visibilité au sein du réseau écologique."
      ],
      collegeName: "Partenaires écologiques",
      isactionnary: true,
      isactivemember: true,
      minactions: 5
    },
    {
      id: "ecologicalActorAssociation",
      title: "Acteur Écologique",
      description: "Développez des actions écologiques pour les bénéficiaires de la SCIC.",
      benefits: [
        "Accès à un réseau de bénéficiaires.",
        "Promotion d'actions écologiques."
      ],
      collegeName: "Partenaires écologiques",
      isactionnary: true,
      isactivemember: true,
      minactions: 5
    },
    {
      id: "ecologicalPartenActorAssociation",
      title: "Partenaire Écologique",
      description: "Collaborez sur des projets écologiques communs.",
      benefits: [
        "Accès à des ressources partagées.",
        "Co-création de solutions écologiques."
      ],
      collegeName: "Partenaires écologiques",
      isactionnary: true,
      isactivemember: true,
      minactions: 5
    },
    {
      id: "otherProviderAssociation",
      title: "Fournisseur Autres",
      description: "Développez des actions avec la SCIC.",
      benefits: [
        "Soutien pour le développement d'actions.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Partenaires sociaux",
      isactionnary: true,
      isactivemember: true,
      minactions: 5
    },
    {
      id: "otherActorAssociation",
      title: "Acteur Autres",
      description: "Développez des actions pour les bénéficiaires de la SCIC.",
      benefits: [
        "Accès à un réseau de bénéficiaires.",
        "Promotion d'actions."
      ],
      collegeName: "Partenaires sociaux",
      isactionnary: true,
      isactivemember: true,
      minactions: 5
    },
    {
      id: "otherPartenActorAssociation",
      title: "Partenaire Autres",
      description: "Collaborez sur des projets communs.",
      benefits: [
        "Accès à des ressources partagées.",
        "Co-création de solutions."
      ],
      collegeName: "Partenaires sociaux",
      isactionnary: true,
      isactivemember: true,
      minactions: 5
    },
    {
      id: "associationFinancialInvestment",
      title: "Investisseur Financier",
      description: "Contribuez financièrement à la SCIC.",
      benefits: [
        "Retours sur investissement.",
        "Impact social et environnemental."
      ],
      collegeName: "Investisseurs Financiers",
      isactionnary: true,
      isactivemember: false,
      minactions: 25
    }
  ],
  enterprise: [
    {
      id: "normalServiceEntreprise",
      title: "Entreprise de Services",
      description: "Proposez vos services à la SCIC.",
      benefits: [
        "Opportunités de collaboration.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Fournisseurs de Services",
      isactionnary: false,
      isactivemember: false,
      minactions: 0
    },
    {
      id: "normalProductionEntreprise",
      title: "Entreprise de Production",
      description: "Vendez vos produits à la SCIC.",
      benefits: [
        "Accès à un marché local.",
        "Support pour le développement de produits."
      ],
      collegeName: "Producteurs locaux",
      isactionnary: true,
      isactivemember: false,
      minactions: 10
    },
    {
      id: "EsusSocialentreprise",
      title: "Entreprise Sociale ESUS",
      description: "Développez des projets sociaux avec la SCIC.",
      benefits: [
        "Opportunités de collaboration.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Partenaires sociaux",
      isactionnary: true,
      isactivemember: true,
      minactions: 5
    },
    {
      id: "EsusEcologicalentreprise",
      title: "Entreprise Écologique ESUS",
      description: "Développez des projets écologiques avec la SCIC.",
      benefits: [
        "Opportunités de collaboration.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Partenaires écologiques",
      isactionnary: true,
      isactivemember: true,
      minactions: 10
    }
  ]
};

export default memberships;


