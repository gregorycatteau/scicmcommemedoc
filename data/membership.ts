import { idText } from "typescript";

interface MembershipOption {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  collegeName: string;
  collegedescription: string;
  isactionnary: boolean;
  isactivemember: boolean;
  minactions: number;
}

const memberships: Record<string, MembershipOption[]> = {
  individual: [
    {
      id: "individualExternalClient",
      title: "Devenez Client Externe de M Comme Médoc",
      description: "Participez à notre initiative communautaire en tant que client externe, bénéficiant de notre gamme de produits et services uniques.",
      benefits: [
        "Participation à un projet communautaire et durable.",
        "Accès à des produits et services uniques.",
        "Réduction de votre impact environnemental.",
        "Solidarité et soutien au sein de la communauté."
      ],
      collegeName: "Clients Externes",
      collegedescription: "En tant que client externe de M Comme Médoc, vous bénéficiez d'un accès exclusif à notre gamme unique de produits et services. Cette adhésion ne nécessite aucune participation active à la gouvernance de la SCIC, ce qui vous permet de soutenir notre initiative communautaire de manière simple et pratique. En rejoignant M Comme Médoc, vous contribuez à la réduction de l'impact environnemental grâce à des pratiques de consommation responsables. De plus, vous soutenez activement l'économie locale en favorisant des produits et services développés et distribués par des partenaires de proximité. Cette adhésion est idéale pour ceux qui souhaitent faire partie d'un projet communautaire ambitieux tout en bénéficiant de nombreux avantages concrets, tels que des réductions sur nos produits et services, une contribution à un avenir plus durable, et la satisfaction de participer à une initiative qui valorise la solidarité et le développement local.",
      isactionnary: false,
      isactivemember: false,
      minactions: 0
    },
    {
      id: "individualShareholder",
      title: "Devenez Sociétaire Bénéficiaire Direct",
      description: "Rejoignez-nous en tant que sociétaire avec un impact direct sur la gouvernance de M Comme Médoc.",
      benefits: [
        "Droit de vote et influence directe.",
        "Participation active dans la gouvernance.",
        "Avantages économiques et financiers.",
        "Renforcement du réseau local.",
        "Contribution à l'utilité sociale et au bien commun."
      ],
      collegeName: "Bénéficiaires directs",
      collegedescription: "En tant que sociétaire bénéficiaire direct de M Comme Médoc, vous jouez un rôle essentiel dans la gouvernance de notre SCIC. Vous disposez de droits de vote qui vous permettent d'influencer directement les décisions stratégiques et opérationnelles. Cette adhésion vous offre des avantages économiques et financiers, ainsi qu'une participation active dans la vie de la communauté. En rejoignant ce collège, vous renforcez votre engagement envers le réseau local et contribuez au bien commun, tout en bénéficiant d'une reconnaissance au sein de notre initiative. Vous participez également à des événements exclusifs et à des réunions de gouvernance, où vos idées et vos contributions sont valorisées.",
      isactionnary: true,
      isactivemember: false,
      minactions: 2
    },
    {
      id: "individualConsumActor",
      title: "Devenez Consom'Acteur Engagé",
      description: "Engagez-vous activement en consommant de manière responsable et en participant à la vie de la SCIC.",
      benefits: [
        "Droit de vote et influence directe.",
        "Participation active dans la gouvernance.",
        "Avantages économiques et financiers.",
        "Renforcement du réseau local.",
        "Contribution à l'utilité sociale et au bien commun.",
        "Accès à des produits et services uniques.",
        "Réduction de l'impact environnemental.",
        "Solidarité et réseau de soutien.",
        "Participation à un projet communautaire et durable."
      ],
      collegeName: "Consom'Acteurs",
      collegedescription: "En tant que consomm’acteur engagé, vous participez activement à la vie et à la gouvernance de M Comme Médoc. Cette adhésion vous permet d'avoir un droit de vote et de contribuer aux décisions importantes de la SCIC. Vous consommez de manière responsable, accédez à des produits et services uniques, et bénéficiez d'avantages économiques. De plus, vous aidez à réduire l'impact environnemental et renforcez la solidarité au sein de la communauté. Votre participation active signifie également que vous êtes impliqué dans des initiatives durables et des projets communautaires qui visent à améliorer la qualité de vie locale et à promouvoir des pratiques écologiques et sociales responsables.",
      isactionnary: true,
      isactivemember: true,
      minactions: 1
    },
    {
      id: "financialInvestment",
      title: "Investissez dans M Comme Médoc",
      description: "Contribuez financièrement à notre SCIC et bénéficiez d'avantages tout en soutenant des initiatives locales.",
      benefits: [
        "Avantages fiscaux pour des investissements à impact social et environnemental.",
        "Transformation de votre épargne en investissement utile.",
        "Participation à la création d'emplois locaux."
      ],
      collegeName: "Investisseurs Financiers",
      collegedescription: "En investissant financièrement dans M Comme Médoc, vous soutenez directement nos initiatives locales et communautaires. Votre investissement vous donne accès à des avantages fiscaux et transforme votre épargne en un investissement utile et impactant. En tant que partenaire financier, vous contribuez à la création d'emplois locaux, au développement de projets durables, et au renforcement de l'économie locale. Cette adhésion vous permet de participer à des projets à fort impact social et environnemental, tout en bénéficiant de retours sur investissement. Vous faites partie d'une communauté d'investisseurs engagés qui valorisent l'innovation, la durabilité et le bien-être collectif.",
      isactionnary: true,
      isactivemember: false,
      minactions: 20
    }
  ],
  family: [
    {
      id: "familyExternalClient",
      title: "Adhérez en Famille",
      description: "Profitez des offres de M Comme Médoc pour toute votre famille.",
      benefits: [
        "Participation à un projet communautaire et durable.",
        "Accès à des produits et services uniques.",
        "Réduction de l'impact environnemental.",
        "Solidarité et soutien au sein de la communauté."
      ],
      collegeName: "Clients externes",
      collegedescription: "En adhérant en famille à M Comme Médoc, vous profitez ensemble de notre gamme unique de produits et services, sans avoir besoin de participer activement à la gouvernance de la SCIC. Cette option est idéale pour les familles qui souhaitent soutenir une initiative communautaire tout en bénéficiant des avantages de la consommation responsable. Vous contribuez à réduire l'impact environnemental et soutenez l'économie locale en favorisant des produits et services fournis par des partenaires de proximité. En rejoignant notre initiative, votre famille bénéficie de réductions sur les produits et services, participe à des projets communautaires et durables, et s'implique dans une démarche solidaire qui valorise le développement local.",
      isactionnary: false,
      isactivemember: false,
      minactions: 0
    },
    {
      id: "familyShareholder",
      title: "Bénéficiaires directs",
      description: "Impliquez votre famille dans la gouvernance de notre SCIC.",
      benefits: [
        "Droit de vote et influence directe.",
        "Participation active dans la gouvernance.",
        "Avantages économiques et financiers.",
        "Renforcement du réseau local.",
        "Contribution à l'utilité sociale et au bien commun."
      ],
      collegeName: "Familles actionnaires",
      collegedescription: "En tant que famille actionnaire de M Comme Médoc, vous avez la possibilité d'impliquer chaque membre de votre famille dans la gouvernance de notre SCIC. Vous disposez de droits de vote et pouvez participer activement aux décisions stratégiques, influençant ainsi directement l'orientation et le développement de notre initiative. Cette adhésion renforce les liens familiaux tout en offrant des avantages économiques et financiers. Vous participez à des réunions de gouvernance et à des événements exclusifs, où chaque voix compte et où vos contributions sont valorisées. En rejoignant ce collège, votre famille contribue au bien commun et à l'utilité sociale de notre SCIC.",
      isactionnary: true,
      isactivemember: false,
      minactions: 2
    },
    {
      id: "familyConsumActor",
      title: "Devenez une famille de Consom'Acteurs",
      description: "Consommez de manière responsable en famille et participez activement à la vie de la SCIC.",
      benefits: [
        "Droit de vote et influence directe.",
        "Participation active dans la gouvernance.",
        "Avantages économiques et financiers.",
        "Renforcement du réseau local.",
        "Contribution à l'utilité sociale et au bien commun.",
        "Accès à des produits et services uniques.",
        "Réduction de l'impact environnemental.",
        "Solidarité et réseau de soutien.",
        "Participation à un projet communautaire et durable."
      ],
      collegeName: "Familles Consom'Acteurs",
      collegedescription: "Devenez une famille consom’acteur en consommant de manière responsable et en participant activement à la vie de la SCIC. Cette adhésion vous permet de bénéficier de droits de vote, d'un accès à des produits et services uniques, et de participer à des initiatives communautaires et durables. Votre famille contribue à la réduction de l'impact environnemental, soutient l'économie locale, et renforce la solidarité au sein de la communauté. En tant que famille consom’acteur, vous participez à des projets qui visent à améliorer la qualité de vie locale, à promouvoir des pratiques écologiques et sociales responsables, et à renforcer le réseau communautaire.",
      isactionnary: true,
      isactivemember: true,
      minactions: 1
    },
    {
      id: "financialInvestment",
      title: "Investissez en Famille",
      description: "Faites un investissement familial pour soutenir des initiatives locales.",
      benefits: [
        "Avantages fiscaux pour des investissements à impact social et environnemental.",
        "Transformation de votre épargne en investissement utile.",
        "Participation à la création d'emplois locaux."
      ],
      collegeName: "Investisseurs Financiers",
      collegedescription: "Faites un investissement familial dans M Comme Médoc pour soutenir des initiatives locales et communautaires. En tant qu'investisseur, votre famille bénéficie d'avantages fiscaux et transforme son épargne en un investissement utile et impactant. Cette adhésion vous permet de contribuer à la création d'emplois locaux, au développement de projets durables, et au renforcement de l'économie locale. Vous participez à des projets à fort impact social et environnemental, tout en bénéficiant de retours sur investissement. Votre famille fait partie d'une communauté d'investisseurs engagés qui valorisent l'innovation, la durabilité et le bien-être collectif.",
      isactionnary: true,
      isactivemember: false,
      minactions: 20
    }
  ],
  institution: [
    {
      id: "institutionPublicRepresentation",
      title: "Représentez Votre Institution",
      description: "Devenez le porte-parole de votre institution au sein de M Comme Médoc.",
      benefits: [
        "Mettre en place des programmes de développement local et partenarial.",
        "Visibilité et reconnaissance au sein du réseau."
      ],
      collegeName: "Représentants Publics",
      collegedescription: "Devenez le porte-parole de votre institution au sein de M Comme Médoc. En tant que représentant d'une institution public, vous contribuez à façonner l'orientation de notre initiative, en collaborant avec d'autres membres pour promouvoir le développement communautaire et durable. Votre institution bénéficie également d'un accès à des ressources partagées et d'opportunités de collaboration sur des projets innovants, renforçant ainsi son engagement envers la communauté locale.",
      isactionnary: false,
      isactivemember: false,
      minactions: 0
    },
    {
      id: "institutionCollaborativeProject",
      title: "Participez à des Projets Collaboratifs",
      description: "Collaborez avec M Comme Médoc sur des projets innovants et partagés.",
      benefits: [
        "Accès à des ressources partagées.",
        "Co-création de solutions innovantes."
      ],
      collegeName: "Projets Collaboratifs",
      collegedescription: "Participez à des projets collaboratifs innovants avec M Comme Médoc. En tant que partenaire, votre institution a accès à des ressources partagées et peut co-créer des solutions avec la SCIC et son réseau de partenaires. Cette situation est idéale pour les institutions souhaitant s'engager dans des initiatives de co-développement et de collaboration. Vous contribuez à des projets qui visent à améliorer la qualité de vie locale et à promouvoir des pratiques écologiques et sociales responsables, tout en renforçant la visibilité et l'impact de votre institution au sein du territoire.",
      isactionnary: false,
      isactivemember: true,
      minactions: 0
    },
    {
      id: "institutionActiveParticipationInGovernance",
      title: "Participez Activement à la Gouvernance",
      description: "Engagez-vous dans les décisions stratégiques et opérationnelles de M Comme Médoc.",
      benefits: [
        "Droit de vote aux assemblées générales.",
        "Participation aux comités de direction."
      ],
      collegeName: "Participants Actifs à la Gouvernance",
      collegedescription: "Engagez-vous activement dans les décisions stratégiques et opérationnelles de M Comme Médoc. En tant que participant actif à la gouvernance, votre institution dispose de droits de vote aux assemblées générales et peut participer aux comités de direction. Cette adhésion vous permet d'influencer directement l'orientation et le développement de la SCIC. Vous bénéficiez également d'un accès à des ressources partagées et d'opportunités de collaboration, renforçant ainsi l'engagement et l'impact de votre institution au sein de la communauté locale.",
      isactionnary: true,
      isactivemember: true,
      minactions: 10
    },
    {
      id: "institutionFinancialSupport",
      title: "Investissez dans des Projets Institutionnels",
      description: "Soutenez financièrement des projets à fort impact social et environnemental.",
      benefits: [
        "Retours sur investissement.",
        "Impact social et environnemental."
      ],
      collegeName: "Investisseurs Financiers",
      collegedescription: "Soutenez financièrement des projets à fort impact social et environnemental en investissant dans M Comme Médoc. En tant qu'investisseur institutionnel, vous bénéficiez de retours sur investissement et contribuez à des initiatives qui favorisent le développement durable et l'utilité sociale. Cette adhésion vous permet de participer à des projets qui visent à améliorer la qualité de vie locale, à promouvoir des pratiques écologiques et sociales responsables, et à renforcer l'économie locale. Votre institution joue un rôle clé dans le soutien des initiatives communautaires et dans la promotion de l'innovation et de la durabilité.",
      isactionnary: true,
      isactivemember: false,
      minactions: 20
    }
  ],
  entrepreneur: [
    {
      id: "servicesEntrepreneur",
      title: "Proposez Vos Services",
      description: "Offrez vos services à M Comme Médoc et bénéficiez de collaborations fructueuses.",
      benefits: [
        "Opportunités de collaboration.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Fournisseurs de Services",
      collegedescription: "Offrez vos services à M Comme Médoc et bénéficiez de collaborations fructueuses. En tant que fournisseur de services, vous avez accès à des opportunités de collaboration et à une visibilité accrue au sein du réseau de la SCIC. Cette adhésion vous permet de développer votre activité en nouant des partenariats durables et en participant à des projets innovants. Vous contribuez également à l'économie locale en offrant des services de qualité qui répondent aux besoins de la communauté. En rejoignant M Comme Médoc, vous bénéficiez du soutien et de la reconnaissance d'un réseau engagé dans le développement durable et solidaire.",
      isactionnary: false,
      isactivemember: false,
      minactions: 0
    },
    {
      id: "productionEntrepreneur",
      title: "Devenez Producteur Local",
      description: "Fournissez vos produits locaux à M Comme Médoc.",
      benefits: [
        "Accès à un marché local.",
        "Support pour le développement de produits."
      ],
      collegeName: "Producteurs locaux",
      collegedescription: "Fournissez vos produits locaux à M Comme Médoc et accédez à un marché local. En tant que producteur, vous bénéficiez du soutien de la SCIC pour le développement de vos produits, favorisant ainsi une économie locale et durable. Cette adhésion vous permet de promouvoir vos produits auprès d'une clientèle engagée et de participer à des initiatives qui valorisent la production locale et la consommation responsable. Vous contribuez également à réduire l'impact environnemental en favorisant des pratiques agricoles et de production durables. En rejoignant M Comme Médoc, vous faites partie d'un réseau de producteurs locaux engagés dans le développement de solutions innovantes et durables.",
      isactionnary: true,
      isactivemember: false,
      minactions: 1
    },
    {
      id: "socialEntrepreneur",
      title: "Engagez-vous comme Entrepreneur Social",
      description: "Développez des services ou produits d'utilité sociale avec M Comme Médoc.",
      benefits: [
        "Opportunités de collaboration.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Partenaires sociaux",
      collegedescription: "Développez des services ou produits d'utilité sociale avec M Comme Médoc. En tant que partenaire social, vous avez des opportunités de collaboration et une visibilité accrue au sein du réseau, ce qui vous permet de renforcer votre impact social tout en bénéficiant du soutien de la SCIC. Cette adhésion vous permet de participer à des projets qui visent à améliorer la qualité de vie locale et à promouvoir des pratiques sociales responsables. Vous contribuez également à la création d'emplois locaux et au développement d'une économie solidaire. En rejoignant M Comme Médoc, vous faites partie d'un réseau d'entrepreneurs sociaux engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: true,
      isactivemember: false,
      minactions: 1
    },
    {
      id: "ecologicalEntrepreneur",
      title: "Engagez-vous comme Entrepreneur Écologique",
      description: "Développez des produits ou services écologiques avec M Comme Médoc.",
      benefits: [
        "Opportunités de collaboration.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Partenaires écologiques",
      collegedescription: "Développez des produits ou services écologiques avec M Comme Médoc. En tant que partenaire écologique, vous bénéficiez d'opportunités de collaboration et d'une visibilité accrue au sein du réseau, ce qui vous aide à promouvoir et à développer vos initiatives écologiques de manière durable. Cette adhésion vous permet de participer à des projets qui visent à réduire l'impact environnemental et à favoriser des pratiques durables. Vous contribuez également à la sensibilisation et à l'éducation de la communauté sur les questions environnementales. En rejoignant M Comme Médoc, vous faites partie d'un réseau d'entrepreneurs engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: true,
      isactivemember: false,
      minactions: 1
    },
    {
      id: "servicesProviderEntrepreneur",
      title: "Proposez Vos Services",
      description: "Offrez vos services à M Comme Médoc.",
      benefits: [
        "Opportunités de collaboration.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Fournisseurs de Services",
      collegedescription: "Offrez vos services à M Comme Médoc et bénéficiez de collaborations fructueuses. En tant que fournisseur de services, vous avez accès à des opportunités de collaboration et à une visibilité accrue au sein du réseau de la SCIC. Cette adhésion vous permet de développer votre activité en nouant des partenariats durables et en participant à des projets innovants. Vous contribuez également à l'économie locale en offrant des services de qualité qui répondent aux besoins de la communauté. En rejoignant M Comme Médoc, vous bénéficiez du soutien et de la reconnaissance d'un réseau engagé dans le développement durable et solidaire.",
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
      collegedescription: "Proposez vos services aux clients de la SCIC et accédez à un nouveau marché. En tant que partenaire de services, vous pouvez promouvoir vos produits locaux et renforcer votre présence au sein de l'économie locale. Cette adhésion vous permet de bénéficier d'opportunités de collaboration et de visibilité au sein du réseau de M Comme Médoc. Vous participez également à des projets communautaires et durables, contribuant ainsi au développement de solutions innovantes et responsables. En rejoignant M Comme Médoc, vous faites partie d'un réseau de partenaires engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: true,
      isactivemember: false,
      minactions: 1
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
      collegedescription: "Collaborez avec la SCIC sur des projets communs en tant que partenaire impliqué. Cette adhésion vous permet d'accéder à des ressources partagées et de co-créer des solutions innovantes. Vous bénéficiez d'opportunités de collaboration et de visibilité au sein du réseau de M Comme Médoc. En tant que partenaire impliqué, vous participez activement à des initiatives qui visent à améliorer la qualité de vie locale et à promouvoir des pratiques durables. Vous contribuez également à la création d'emplois locaux et au développement d'une économie solidaire. En rejoignant M Comme Médoc, vous faites partie d'un réseau de partenaires engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: true,
      isactivemember: true,
      minactions: 1
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
      collegedescription: "Vendez vos produits à la SCIC et accédez à un marché local. En tant que producteur, vous bénéficiez du soutien de M Comme Médoc pour le développement de vos produits, favorisant ainsi une économie locale et durable. Cette adhésion vous permet de promouvoir vos produits auprès d'une clientèle engagée et de participer à des initiatives qui valorisent la production locale et la consommation responsable. Vous contribuez également à réduire l'impact environnemental en favorisant des pratiques agricoles et de production durables. En rejoignant M Comme Médoc, vous faites partie d'un réseau de producteurs locaux engagés dans le développement de solutions innovantes et durables.",
      isactionnary: true,
      isactivemember: false,
      minactions: 1
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
      collegedescription: "Proposez vos produits aux clients de la SCIC et accédez à un nouveau marché. En tant qu'acteur de production, vous pouvez promouvoir vos produits locaux et renforcer votre présence au sein de l'économie locale. Cette adhésion vous permet de bénéficier d'opportunités de collaboration et de visibilité au sein du réseau de M Comme Médoc. Vous participez également à des projets communautaires et durables, contribuant ainsi au développement de solutions innovantes et responsables. En rejoignant M Comme Médoc, vous faites partie d'un réseau de producteurs locaux engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: false,
      isactivemember: false,
      minactions: 0
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
      collegedescription: "Collaborez sur des projets communs en tant que partenaire de production. Cette adhésion vous permet d'accéder à des ressources partagées et de co-créer des solutions innovantes. Vous bénéficiez d'opportunités de collaboration et de visibilité au sein du réseau de M Comme Médoc. En tant que partenaire de production, vous participez activement à des initiatives qui visent à améliorer la qualité de vie locale et à promouvoir des pratiques durables. Vous contribuez également à la création d'emplois locaux et au développement d'une économie solidaire. En rejoignant M Comme Médoc, vous faites partie d'un réseau de producteurs locaux engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: true,
      isactivemember: true,
      minactions: 1
    },
    {
      id: "financialInvestment",
      title: "Investissez dans M Comme Médoc",
      description: "Contribuez financièrement à notre SCIC.",
      benefits: [
        "Retours sur investissement.",
        "Impact social et environnemental."
      ],
      collegeName: "Investisseurs Financiers",
      collegedescription: "Contribuez financièrement à notre SCIC et soutenez des initiatives locales et communautaires. En tant qu'investisseur, vous bénéficiez de retours sur investissement et avez un impact social et environnemental positif. Cette adhésion vous permet de participer à des projets à fort impact, favorisant le développement durable et l'utilité sociale. Vous contribuez également à la création d'emplois locaux et au renforcement de l'économie locale. En rejoignant M Comme Médoc, vous faites partie d'une communauté d'investisseurs engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: true,
      isactivemember: false,
      minactions: 20
    }
  ],
  association: [
    {
      id: "socialProviderAssociation",
      title: "Développez des Actions Sociales",
      description: "Collaborez avec M Comme Médoc pour des actions à impact social.",
      benefits: [
        "Soutien pour le développement d'actions.",
        "Visibilité au sein du réseau social."
      ],
      collegeName: "Partenaires sociaux",
      collegedescription: "Collaborez avec M Comme Médoc pour des actions à impact social. En tant que partenaire social, vous bénéficiez du soutien de la SCIC pour le développement de vos actions et d'une visibilité accrue au sein du réseau social. Cette adhésion vous permet de participer à des projets qui visent à améliorer la qualité de vie locale et à promouvoir des pratiques sociales responsables. Vous contribuez également à la création d'emplois locaux et au renforcement de l'économie solidaire. En rejoignant M Comme Médoc, vous faites partie d'un réseau de partenaires sociaux engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: false,
      isactivemember: false,
      minactions: 0
    },
    {
      id: "socialActorAssociation",
      title: "Engagez-vous comme Acteur Social",
      description: "Proposez des actions sociales pour les bénéficiaires de M Comme Médoc.",
      benefits: [
        "Accès à un réseau de bénéficiaires.",
        "Promotion d'actions sociales."
      ],
      collegeName: "Partenaires sociaux",
      collegedescription: "Proposez des actions sociales pour les bénéficiaires de M Comme Médoc. En tant qu'acteur social, vous avez accès à un réseau de bénéficiaires et pouvez promouvoir vos initiatives sociales, renforçant ainsi votre impact communautaire. Cette adhésion vous permet de participer à des projets qui visent à améliorer la qualité de vie locale et à promouvoir des pratiques sociales responsables. Vous bénéficiez également du soutien de la SCIC pour le développement de vos actions et d'une visibilité accrue au sein du réseau social. En rejoignant M Comme Médoc, vous faites partie d'un réseau d'acteurs sociaux engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: false,
      isactivemember: false,
      minactions: 0
    },
    {
      id: "socialPartenActorAssociation",
      title: "Participez en tant que Partenaire Social",
      description: "Collaborez sur des projets sociaux communs avec M Comme Médoc.",
      benefits: [
        "Accès à des ressources partagées.",
        "Co-création de solutions sociales."
      ],
      collegeName: "Partenaires sociaux",
      collegedescription: "Collaborez sur des projets sociaux communs avec M Comme Médoc. En tant que partenaire social, vous bénéficiez d'opportunités de co-création et d'accès à des ressources partagées, ce qui vous permet de développer des solutions sociales innovantes et durables. Cette adhésion vous permet de participer à des projets qui visent à améliorer la qualité de vie locale et à promouvoir des pratiques sociales responsables. Vous contribuez également à la création d'emplois locaux et au renforcement de l'économie solidaire. En rejoignant M Comme Médoc, vous faites partie d'un réseau de partenaires sociaux engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: true,
      isactivemember: true,
      minactions: 1
    },
    {
      id: "ecologicalProviderAssociation",
      title: "Développez des Actions Écologiques",
      description: "Collaborez avec M Comme Médoc pour des initiatives écologiques.",
      benefits: [
        "Soutien pour le développement d'actions.",
        "Visibilité au sein du réseau écologique."
      ],
      collegeName: "Partenaires écologiques",
      collegedescription: "Collaborez avec M Comme Médoc pour des initiatives écologiques. En tant que partenaire écologique, vous bénéficiez du soutien de la SCIC pour le développement de vos actions écologiques et d'une visibilité accrue au sein du réseau. Cette adhésion vous permet de participer à des projets qui visent à réduire l'impact environnemental et à promouvoir des pratiques durables. Vous contribuez également à la sensibilisation et à l'éducation de la communauté sur les questions environnementales. En rejoignant M Comme Médoc, vous faites partie d'un réseau de partenaires écologiques engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: true,
      isactivemember: true,
      minactions: 1
    },
    {
      id: "ecologicalActorAssociation",
      title: "Engagez-vous comme Acteur Écologique",
      description: "Proposez des actions écologiques pour les bénéficiaires de M Comme Médoc.",
      benefits: [
        "Accès à un réseau de bénéficiaires.",
        "Promotion d'actions écologiques."
      ],
      collegeName: "Partenaires écologiques",
      collegedescription: "Proposez des actions écologiques pour les bénéficiaires de M Comme Médoc. En tant qu'acteur écologique, vous avez accès à un réseau de bénéficiaires et pouvez promouvoir vos initiatives écologiques, renforçant ainsi votre impact environnemental. Cette adhésion vous permet de participer à des projets qui visent à réduire l'impact environnemental et à promouvoir des pratiques durables. Vous bénéficiez également du soutien de la SCIC pour le développement de vos actions écologiques et d'une visibilité accrue au sein du réseau. En rejoignant M Comme Médoc, vous faites partie d'un réseau d'acteurs écologiques engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: true,
      isactivemember: true,
      minactions: 1
    },
    {
      id: "ecologicalPartenActorAssociation",
      title: "Participez en tant que Partenaire Écologique",
      description: "Collaborez sur des projets écologiques communs avec M Comme Médoc.",
      benefits: [
        "Accès à des ressources partagées.",
        "Co-création de solutions écologiques."
      ],
      collegeName: "Partenaires écologiques",
      collegedescription: "Collaborez sur des projets écologiques communs avec M Comme Médoc. En tant que partenaire écologique, vous bénéficiez d'opportunités de co-création et d'accès à des ressources partagées, ce qui vous permet de développer des solutions écologiques innovantes et durables. Cette adhésion vous permet de participer à des projets qui visent à réduire l'impact environnemental et à promouvoir des pratiques durables. Vous contribuez également à la sensibilisation et à l'éducation de la communauté sur les questions environnementales. En rejoignant M Comme Médoc, vous faites partie d'un réseau de partenaires écologiques engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: true,
      isactivemember: true,
      minactions: 1
    },
    {
      id: "otherProviderAssociation",
      title: "Développez des Actions avec la SCIC",
      description: "Collaborez avec M Comme Médoc pour des initiatives diverses.",
      benefits: [
        "Soutien pour le développement d'actions.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Partenaires sociaux",
      collegedescription: "Collaborez avec M Comme Médoc pour des initiatives diverses. En tant que partenaire, vous bénéficiez du soutien de la SCIC pour le développement de vos actions et d'une visibilité accrue au sein du réseau. Cette adhésion vous permet de participer à des projets qui visent à améliorer la qualité de vie locale et à promouvoir des pratiques sociales, économiques ou environnementales responsables. Vous contribuez également à la création d'emplois locaux et au renforcement de l'économie solidaire. En rejoignant M Comme Médoc, vous faites partie d'un réseau de partenaires engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: false,
      isactivemember: false,
      minactions: 0
    },
    {
      id: "otherActorAssociation",
      title: "Engagez-vous comme Acteur Divers",
      description: "Proposez des actions pour les bénéficiaires de M Comme Médoc.",
      benefits: [
        "Accès à un réseau de bénéficiaires.",
        "Promotion d'actions."
      ],
      collegeName: "Partenaires sociaux",
      collegedescription: "Proposez des actions pour les bénéficiaires de M Comme Médoc. En tant qu'acteur divers, vous avez accès à un réseau de bénéficiaires et pouvez promouvoir vos initiatives, renforçant ainsi votre impact communautaire. Cette adhésion vous permet de participer à des projets qui visent à améliorer la qualité de vie locale et à promouvoir des pratiques responsables. Vous bénéficiez également du soutien de la SCIC pour le développement de vos actions et d'une visibilité accrue au sein du réseau. En rejoignant M Comme Médoc, vous faites partie d'un réseau d'acteurs engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: false,
      isactivemember: false,
      minactions: 1
    },
    {
      id: "otherPartenActorAssociation",
      title: "Participez en tant que Partenaire Divers",
      description: "Collaborez sur des projets communs avec M Comme Médoc.",
      benefits: [
        "Accès à des ressources partagées.",
        "Co-création de solutions."
      ],
      collegeName: "Partenaires sociaux",
      collegedescription: "Collaborez sur des projets communs avec M Comme Médoc. En tant que partenaire, vous bénéficiez d'opportunités de co-création et d'accès à des ressources partagées, ce qui vous permet de développer des solutions innovantes et durables. Cette adhésion vous permet de participer à des projets qui visent à améliorer la qualité de vie locale et à promouvoir des pratiques responsables. Vous contribuez également à la création d'emplois locaux et au renforcement de l'économie solidaire. En rejoignant M Comme Médoc, vous faites partie d'un réseau de partenaires engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: true,
      isactivemember: true,
      minactions: 1
    },
    {
      id: "associationFinancialInvestment",
      title: "Investissez dans M Comme Médoc",
      description: "Contribuez financièrement à notre SCIC.",
      benefits: [
        "Retours sur investissement.",
        "Impact social et environnemental."
      ],
      collegeName: "Investisseurs Financiers",
      collegedescription: "Contribuez financièrement à notre SCIC et soutenez des initiatives locales et communautaires. En tant qu'investisseur, vous bénéficiez de retours sur investissement et avez un impact social et environnemental positif. Cette adhésion vous permet de participer à des projets à fort impact, favorisant le développement durable et l'utilité sociale. Vous contribuez également à la création d'emplois locaux et au renforcement de l'économie locale. En rejoignant M Comme Médoc, vous faites partie d'une communauté d'investisseurs engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: true,
      isactivemember: false,
      minactions: 20
    }
  ],
  enterprise: [
    {
      id: "normalServiceEntreprise",
      title: "Proposez Vos Services",
      description: "Offrez vos services à M Comme Médoc et développez des collaborations fructueuses.",
      benefits: [
        "Opportunités de collaboration.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Fournisseurs de Services",
      collegedescription: "Offrez vos services à M Comme Médoc et bénéficiez de collaborations fructueuses. En tant que fournisseur de services, vous avez accès à des opportunités de collaboration et à une visibilité accrue au sein du réseau de la SCIC. Cette adhésion vous permet de développer votre activité en nouant des partenariats durables et en participant à des projets innovants. Vous contribuez également à l'économie locale en offrant des services de qualité qui répondent aux besoins de la communauté. En rejoignant M Comme Médoc, vous bénéficiez du soutien et de la reconnaissance d'un réseau engagé dans le développement durable et solidaire.",
      isactionnary: false,
      isactivemember: false,
      minactions: 0
    },
    {
      id: "normalProductionEntreprise",
      title: "Vendez Vos Produits Locaux",
      description: "Fournissez vos produits à M Comme Médoc et accédez à un marché local.",
      benefits: [
        "Accès à un marché local.",
        "Support pour le développement de produits."
      ],
      collegeName: "Producteurs locaux",
      collegedescription: "Fournissez vos produits à M Comme Médoc et accédez à un marché local. En tant que producteur, vous bénéficiez du soutien de M Comme Médoc pour le développement de vos produits, favorisant ainsi une économie locale et durable. Cette adhésion vous permet de promouvoir vos produits auprès d'une clientèle engagée et de participer à des initiatives qui valorisent la production locale et la consommation responsable. Vous contribuez également à réduire l'impact environnemental en favorisant des pratiques agricoles et de production durables. En rejoignant M Comme Médoc, vous faites partie d'un réseau de producteurs locaux engagés dans le développement de solutions innovantes et durables.",
      isactionnary: false,
      isactivemember: false,
      minactions: 0
    },
    {
      id: "EsusSocialentreprise",
      title: "Engagez-vous comme Entreprise Sociale",
      description: "Collaborez sur des projets sociaux avec M Comme Médoc.",
      benefits: [
        "Opportunités de collaboration.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Partenaires sociaux",
      collegedescription: "Collaborez sur des projets sociaux avec M Comme Médoc. En tant que partenaire social, vous bénéficiez du soutien de la SCIC pour le développement de vos actions et d'une visibilité accrue au sein du réseau. Cette adhésion vous permet de participer à des projets qui visent à améliorer la qualité de vie locale et à promouvoir des pratiques sociales responsables. Vous contribuez également à la création d'emplois locaux et au renforcement de l'économie solidaire. En rejoignant M Comme Médoc, vous faites partie d'un réseau de partenaires sociaux engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: true,
      isactivemember: true,
      minactions: 1
    },
    {
      id: "EsusEcologicalentreprise",
      title: "Engagez-vous comme Entreprise Écologique",
      description: "Développez des initiatives écologiques avec M Comme Médoc.",
      benefits: [
        "Opportunités de collaboration.",
        "Visibilité au sein du réseau."
      ],
      collegeName: "Partenaires écologiques",
      collegedescription: "Développez des initiatives écologiques avec M Comme Médoc. En tant que partenaire écologique, vous bénéficiez du soutien de la SCIC pour le développement de vos actions écologiques et d'une visibilité accrue au sein du réseau. Cette adhésion vous permet de participer à des projets qui visent à réduire l'impact environnemental et à promouvoir des pratiques durables. Vous contribuez également à la sensibilisation et à l'éducation de la communauté sur les questions environnementales. En rejoignant M Comme Médoc, vous faites partie d'un réseau de partenaires écologiques engagés dans la promotion de l'innovation et de la durabilité.",
      isactionnary: true,
      isactivemember: true,
      minactions: 1
    }
  ]
};

export default memberships;


