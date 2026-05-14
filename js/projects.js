// ============================================
// PROJETS — Basés sur le CV d'Aurélien
// Modifiez ce fichier pour ajouter vos projets !
// ============================================
const projects = [
  {
    id: 1,
    title: "🔒 Modernisation Infrastructure Viziocraft",
    description: "Modernisation et sécurisation de l'infrastructure réseau : pare-feu, stockage centralisé et optimisation des performances.",
    client: "Client : Viziocraft",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Projet de modernisation de l'infrastructure informatique visant à renforcer la sécurité, améliorer le stockage centralisé et optimiser les performances du réseau interne.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Audit de l'infrastructure existante et identification des besoins</li>
        <li>Déploiement et configuration d'un pare-feu FortiGate</li>
        <li>Mise en place d'un serveur NAS Synology pour le partage de fichiers</li>
        <li>Configuration des commutateurs Aruba</li>
        <li>Refonte et optimisation du câblage réseau</li>
        <li>Élaboration du BOM, SOW et documentation technique</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Infrastructure sécurisée et modernisée avec un stockage centralisé performant et une documentation complète.</p>
    `,
    image: null,
    technologies: ["FortiGate", "Synology NAS", "Aruba", "VLAN", "VPN", "TCP/IP"],
    category: "securite",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "🌐 Refonte Infrastructure LAN I&P",
    description: "Refonte complète du réseau local avec amélioration de la couverture Wi-Fi et gestion centralisée via Omada Cloud.",
    client: "Client : Investisseurs & Partenaires",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Projet de refonte complète du réseau local afin d'améliorer la connectivité, la couverture Wi-Fi et la gestion centralisée des équipements.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Configuration des routeurs et switchs TP-Link</li>
        <li>Déploiement des points d'accès Wi-Fi TP-Link</li>
        <li>Mise en place de la plateforme Omada Cloud Management</li>
        <li>Supervision des équipements et des performances réseau</li>
        <li>Amélioration du câblage structuré</li>
        <li>Configuration d'un VPN d'accès distant au NAS</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Réseau entièrement refondu avec une couverture Wi-Fi optimale et une gestion centralisée via le cloud.</p>
    `,
    image: null,
    technologies: ["TP-Link", "Omada Cloud", "Wi-Fi", "VLAN", "VPN", "DHCP", "DNS"],
    category: "reseaux",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "🎥 Solution Visioconférence QMM",
    description: "Déploiement d'une solution de visioconférence professionnelle Cisco pour les salles de réunion.",
    client: "Client : QMM",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Déploiement d'une solution de visioconférence professionnelle pour les salles de réunion de QMM.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Installation et configuration du Cisco Room Kit EQ</li>
        <li>Création et configuration des comptes Cisco Webex</li>
        <li>Tests audio et vidéo complets</li>
        <li>Formation des utilisateurs finaux</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Solution de visioconférence professionnelle opérationnelle, permettant des réunions collaboratives de haute qualité.</p>
    `,
    image: null,
    technologies: ["Cisco Room Kit EQ", "Cisco Webex", "HDMI", "Audio/Video"],
    category: "voip",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "📞 Migration SIP Trunk Orange LPSA",
    description: "Migration de l'infrastructure de téléphonie IP vers un nouveau trunk SIP Orange avec reconfiguration complète du Call Manager.",
    client: "Client : LPSA",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Migration de l'infrastructure de téléphonie IP existante vers un nouveau trunk SIP Orange pour moderniser les communications.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Analyse de la configuration existante sur Cisco Call Manager</li>
        <li>Mise à jour des licences CUCM</li>
        <li>Configuration du SIP Trunk Orange</li>
        <li>Paramétrage des Call Patterns et Route Patterns</li>
        <li>Tests des appels nationaux et internationaux</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Migration réussie avec une téléphonie IP modernisée et des appels nationaux et internationaux pleinement fonctionnels.</p>
    `,
    image: null,
    technologies: ["Cisco CUCM", "SIP Trunk", "Orange", "VoIP", "Route Pattern"],
    category: "voip",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "🎥 Modernisation Visioconférence Jovena",
    description: "Renouvellement de la solution de visioconférence avec intégration Microsoft Teams via Yealink MeetingBar.",
    client: "Client : Jovena",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Renouvellement de la solution de visioconférence pour améliorer les réunions collaboratives et l'intégration avec l'écosystème Microsoft.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Installation du Yealink MeetingBar</li>
        <li>Intégration complète avec Microsoft Teams</li>
        <li>Configuration des comptes et licences</li>
        <li>Tests fonctionnels audio et vidéo</li>
        <li>Formation des utilisateurs</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Solution moderne et intégrée à Microsoft Teams, améliorant significativement la qualité des réunions collaboratives.</p>
    `,
    image: null,
    technologies: ["Yealink MeetingBar", "Microsoft Teams", "Video Conferencing"],
    category: "voip",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "📞 Rétablissement Appels Internationaux PNUD",
    description: "Restauration des appels internationaux via l'opérateur YAS après interruption de la liaison VSAT.",
    client: "Client : PNUD",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Restauration urgente de la possibilité d'effectuer des appels internationaux via l'opérateur YAS après l'interruption de la liaison VSAT.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Analyse et diagnostic de la configuration Cisco Call Manager</li>
        <li>Reconfiguration des Route Patterns</li>
        <li>Mise à jour des droits d'appels internationaux</li>
        <li>Coordination avec l'opérateur YAS</li>
        <li>Tests de validation complets</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Appels internationaux rétablis rapidement, assurant la continuité des communications pour le PNUD.</p>
    `,
    image: null,
    technologies: ["Cisco CUCM", "YAS", "VoIP", "Route Pattern", "VSAT"],
    category: "voip",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 7,
    title: "📱 Ligne Verte Ministère Éducation Nationale",
    description: "Déploiement d'une plateforme call center pour la gestion de la ligne verte nationale avec PBX Yeastar.",
    client: "Client : Ministère de l'Éducation Nationale",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Déploiement d'une plateforme de centre d'appels destinée à la gestion de la ligne verte nationale du Ministère de l'Éducation Nationale.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Installation et configuration du PBX Yeastar</li>
        <li>Déploiement des téléphones IP Yealink</li>
        <li>Configuration des extensions internes</li>
        <li>Intégration du SIP Trunk YAS</li>
        <li>Paramétrage des routes d'appels</li>
        <li>Assistance et coordination avec les équipes YAS</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Plateforme call center opérationnelle permettant une gestion efficace de la ligne verte nationale.</p>
    `,
    image: null,
    technologies: ["Yeastar PBX", "Yealink", "SIP Trunk", "YAS", "VoIP", "Call Center"],
    category: "voip",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 8,
    title: "🔄 SWAP Routeurs de Secours BMOI",
    description: "Remplacement des routeurs de secours défaillants par de nouveaux équipements 4G avec VPN et basculement automatique.",
    client: "Client : BMOI",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Remplacement urgent des routeurs de secours défaillants pour assurer la continuité de service des succursales BMOI.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Installation et configuration des routeurs Cisco 4G</li>
        <li>Mise en place de tunnels VPN vers les succursales</li>
        <li>Configuration du basculement automatique (Failover)</li>
        <li>Tests de continuité de service</li>
        <li>Documentation technique complète</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Continuité de service assurée avec un basculement automatique fiable vers la liaison 4G en cas de panne.</p>
    `,
    image: null,
    technologies: ["Cisco Router", "4G LTE", "VPN", "Failover", "IPsec"],
    category: "reseaux",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 9,
    title: "📡 Déploiement Routeurs Fianarantsoa & Toliara",
    description: "Installation et configuration de routeurs DMVPN pour renforcer la connectivité inter-sites en régions.",
    client: "Client : Confidentiel",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Déploiement de nouveaux routeurs dans les villes de Fianarantsoa et Toliara pour renforcer la connectivité inter-sites.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Installation des routeurs Cisco 4G sur site</li>
        <li>Configuration de DMVPN pour l'interconnexion des sites</li>
        <li>Intégration au réseau existant</li>
        <li>Tests de connectivité et de performance</li>
        <li>Documentation technique</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Connectivité inter-sites renforcée avec une liaison sécurisée via DMVPN entre les différents sites.</p>
    `,
    image: null,
    technologies: ["Cisco Router", "DMVPN", "4G LTE", "IPsec", "Routing"],
    category: "reseaux",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 10,
    title: "☁️ Cloud OpenStack — ESPA",
    description: "Conception et mise en place d'une infrastructure cloud privée complète basée sur OpenStack.",
    client: null,
    details: `
      <h4>🎯 Contexte</h4>
      <p>Projet de fin d'études réalisé à l'École Supérieure Polytechnique d'Antsiranana (Octobre 2023 – Mars 2024). Conception d'un cloud privé complet basé sur OpenStack.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Installation et configuration des composants OpenStack : Nova, Neutron, Glance, Horizon, Keystone</li>
        <li>Mise en place du réseau virtuel avec Neutron</li>
        <li>Configuration du stockage avec Cinder</li>
        <li>Déploiement automatisé des instances</li>
        <li>Interface d'administration via Horizon</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Infrastructure cloud privée fonctionnelle permettant le déploiement rapide de machines virtuelles.</p>
    `,
    image: null,
    technologies: ["OpenStack", "Nova", "Neutron", "Glance", "Linux", "Virtualisation"],
    category: "cloud",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 11,
    title: "📡 Réseau WiMAX — CIR DIANA",
    description: "Configuration et optimisation de réseaux WiMAX avec déploiement Ubiquiti et études de liaison radio.",
    client: null,
    details: `
      <h4>🎯 Contexte</h4>
      <p>Stage à la CIR du Service Régional de Budget DIANA (Septembre – Décembre 2022). Déploiement et optimisation d'un réseau WiMAX.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Configuration des équipements WiMAX</li>
        <li>Déploiement des antennes Ubiquiti</li>
        <li>Étude de liaison radio et calcul de zone de Fresnel</li>
        <li>Conception du réseau intranet régional</li>
        <li>Optimisation de la couverture radio</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Couverture réseau améliorée sur la région DIANA avec une connectivité stable.</p>
    `,
    image: null,
    technologies: ["WiMAX", "Ubiquiti", "Radio", "LAN/WAN", "Fresnel"],
    category: "reseaux",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 12,
    title: "🌐 App Web État Civil",
    description: "Développement d'une application web de remontée des statistiques d'état civil pour le Ministère de l'Intérieur.",
    client: null,
    details: `
      <h4>🎯 Contexte</h4>
      <p>Stage à la DSI du Ministère de l'Intérieur et de la Décentralisation (Août – Novembre 2018). Développement d'une application de gestion des statistiques d'état civil.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Développement du backend en PHP</li>
        <li>Conception de la base de données MySQL</li>
        <li>Interface utilisateur en HTML/CSS</li>
        <li>Système de remontée des statistiques par commune</li>
        <li>Formation des utilisateurs et documentation</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Application déployée et utilisée par plusieurs communes pour la gestion des données d'état civil.</p>
    `,
    image: null,
    technologies: ["PHP", "HTML", "CSS", "MySQL"],
    category: "dev",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const categories = [
  { key: "all", label: "🔥 Tous" },
  { key: "reseaux", label: "🌐 Réseaux" },
  { key: "cloud", label: "☁️ Cloud" },
  { key: "securite", label: "🔒 Sécurité" },
  { key: "voip", label: "📞 VoIP" },
  { key: "dev", label: "💻 Dev" },
];