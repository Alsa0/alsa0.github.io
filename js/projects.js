// ============================================
// PROJETS — Basés sur le CV d'Aurélien
// Modifiez ce fichier pour ajouter vos projets !
// ============================================
const projects = [
  {
    id: 1,
    title: "Modernisation Infrastructure",
    description: "Modernisation et sécurisation de l'infrastru-cture réseau : pare-feu, stockage centralisé et optimisation des performances.",
    client: "Client : Viziocraft",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Projet de modernisation de l’infrastructure informatique visant à renforcer la sécurité du réseau, centraliser le stockage des données, améliorer les performances des équipements et fiabiliser l’ensemble du système d’information.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Audit de l'infrastructure existante et identification des besoins</li>
        <li>Déploiement et configuration d'un pare-feu FortiGate</li>
        <li>Configuration des politiques de sécurité</li>
        <li>Installation du serveur NAS Synology</li>
        <li>Configuration du partage de fichiers et des sauvegardes</li>
        <li>Installation et configuration des switchs</li>
        <li>Refonte et optimisation du câblage réseau</li>
        <li>Tests de performance et de connectivité</li>
      </ul>

    `,
    image: null,
    technologies: ["FortiGate", "Firewall", "Synology NAS", "NAS", "Aruba Instant On", "LAN"],
    category: "securite",
  },
  {
    id: 2,
    title: "Refonte Infrastructure LAN",
    description: "Refonte complète du réseau local avec amélioration de la couverture Wi-Fi et gestion centralisée via Omada Cloud.",
    client: "Client : Investisseurs & Partenaires",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Projet de refonte complète du réseau local afin d'améliorer la connectivité, la couverture Wi-Fi et la gestion centralisée des équipements.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Audit de l’infrastructure réseau existante</li>
        <li>Conception de la nouvelle architecture LAN</li>
        <li>Mise en place de la plateforme Omada Cloud Management</li>
        <li>Intégration des équipements dans la plateforme cloud</li>
        <li>Configuration des routeurs et switch</li>
        <li>Déploiement des points d'accès Wi-Fi</li>
        <li>Optimisation du câblage structuré</li>
        <li>Configuration d'un VPN d'accès distant au NAS</li>
        <li>Supervision des performances réseau</li>
        <li>Test et validation finale</li>
      </ul>

    `,
    image: null,
    technologies: ["TP-Link", "Omada Cloud", "Access Point", "LAN", "Wi-Fi", "DHCP", "VPN"],
    category: "reseaux",
  },
  {
    id: 3,
    title: "Migration du Système VoIP vers SIP Trunk Orange",
    description: "Migration de l'infrastructure de téléphonie IP vers un nouveau trunk SIP Orange avec reconfiguration complète du système.",
    client: "Client : LPSA",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Projet de migration de l’infrastructure de téléphonie IP vers un nouveau SIP Trunk Orange afin d’améliorer la fiabilité des communications et d’optimiser la gestion des appels nationaux et internationaux.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Analyse de la configuration existante sur Cisco Call Manager</li>
        <li>Vérification de la liaison SIP Airtel en production</li>
        <li>Mise à jour des licences Cisco Call Manager</li>
        <li>Suppression de l’ancienne configuration SIP Airtel</li>
        <li>Configuration du nouveau SIP Trunk Orange</li>
        <li>Modification des Call Patterns et Route Patterns</li>
        <li>Configuration des règles de routage</li>
        <li>Paramétrage des appels nationaux et internationaux</li>
        <li>Tests des appels entrants et sortants et validation finale</li>
      </ul>

    `,
    image: null,
    technologies: ["Cisco CUCM", "SIP Trunk", "Voice gateway", "Dial Plan", "Route Pattern", "Firewall"],
    category: "voip",
  },
  {
    id: 4,
    title: "DocGen Platform",
    description: "Plateforme d'ingénierie documentaire basée sur l'IA pour automatiser la génération de BOM, SOW, OT et rapports techniques.",
    details: `
    <h4>🎯 Contexte</h4>
    <p>Plateforme développée en interne chez NextHope pour automatiser et accélérer la création de documents commerciaux et techniques (BOM, SOW, OT, IR). L'application combine l'intégration Gmail, l'analyse IA multi-modèle et une bibliothèque locale d'équipements afin de transformer les demandes clients en propositions complètes en quelques minutes.</p>

    <h4>🔧 Réalisations</h4>
    <ul>
      <li>Analyse des besoins métier et conception de l'architecture applicative</li>
      <li>Développement du dashboard RFP avec synchronisation Gmail</li>
      <li>Mise en place du suivi de statut des demandes (En attente, Attribué, Traité)</li>
      <li>Développement du moteur d'analyse IA des besoins clients</li>
      <li>Extraction automatique des équipements et spécifications techniques</li>
      <li>Création d'une bibliothèque BOM locale basée sur SQLite</li>
      <li>Import et déduplication automatique des équipements depuis Excel</li>
      <li>Génération automatique de trois offres (Économique, Standard, Premium)</li>
      <li>Calcul automatique des coûts et conversion en Ariary (MGA)</li>
      <li>Génération des documents BOM au format Excel</li>
      <li>Génération des documents SOW, OT et IR au format Word</li>
      <li>Intégration de l'IA multi-modèle avec basculement automatique</li>
      <li>Connexion aux API Gemini 2.5 Flash et Groq Llama 3.3</li>
      <li>Auto-enrichissement de la base avec les nouveaux équipements détectés</li>
      <li>Tests fonctionnels et validation des résultats générés</li>
      <li>Optimisation des performances et de la fiabilité du système</li>
    </ul>
 `,
    image: null,
    technologies: ["Python", "FastAPI", "React", "Gemini AI", "Groq", "SQLite", "Gmail API", "Docker", "Python-Docx", "Javascript", "HTML/CSS"],
    category: "dev",
  },
  {
    id: 5,
    title: "SWAP Routeurs de Secours BMOI",
    description: "Remplacement des routeurs de secours défaillants par de nouveaux équipements 4G avec VPN et basculement automatique.",
    client: "Client : BMOI",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Remplacement des routeurs de secours défaillants par de nouveaux routeurs 4G afin de garantir la continuité des communications entre le siège et les succursales.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Installation du routeur Cisco 4G</li>
        <li>Configuration des interfaces WAN et LAN</li>
        <li>Intégration des cartes SIM 4G</li>
        <li>Mise en place de tunnels VPN vers les succursales</li>
        <li>Configuration du basculement automatique (Failover)</li>
        <li>Configuration du suivi de connectivité</li>
        <li>Vérification de la stabilité du secours</li>
      </ul>
      `,
    image: null,
    technologies: ["Routing", "Cellular Gateway", "Failover", "FH", "IPsec", "4G LTE", "MPLS", "P2P"],
    category: "reseaux",
  },
  {
    id: 6,
    title: "Mise en place de la Ligne Verte",
    description: "Déploiement d'une plateforme call center pour la gestion de la ligne verte nationale avec PBX Yeastar.",
    client: "Client : Ministère de l'Éducation Nationale",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Déploiement d’une plateforme de centre d’appels dédiée à la gestion de la Ligne Verte du Ministère de l’Éducation Nationale afin de centraliser les communications et améliorer la prise en charge des appels.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Installation du serveur PBX Yeastar</li>
        <li>Configuration initiale du système</li>
        <li>Création des extensions téléphoniques</li>
        <li>Déploiement des téléphones IP Yealink</li>
        <li>Provisioning automatique des postes</li>
        <li>Mise en place du plan de numérotation</li>
        <li>Intégration du SIP Trunk YAS</li>
        <li>Paramétrage des routes d’appels</li>
        <li>Paramétrage des files d’attente</li>
        <li>Tests des appels internes et externes</li>
        <li>Formation des utilisateurs finaux</li>
      </ul>
    `,
    image: null,
    technologies: ["Yeastar PBX", "Yealink IP Phone", "SIP Trunk", "Call Center", "Routing", "Auto Provisioning"],
    category: "voip",
  },
  {
    id: 7,
    title: "Rétablissement Appels Internationaux PNUD",
    description: "Restauration des appels internationaux via l'opérateur YAS après interruption de la liaison VSAT.",
    client: "Client : PNUD",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Restauration de la possibilité d’effectuer des appels internationaux via l’opérateur YAS à la suite de l’interruption de la liaison VSAT principale.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Analyse du plan de numérotation existant</li>
        <li>Vérification de la configuration sur Cisco Call Manager</li>
        <li>Identification des routes d’appels impactées</li>
        <li>Analyse des Route Patterns</li>
        <li>Analyse des CSS et Partitions</li>
        <li>Reconfiguration des Route Patterns</li>
        <li>Modification des Call Patterns</li>
        <li>Redirection des appels vers YAS</li>
        <li>Mise à jour des droits d’appels</li>
        <li>Tests des appels internationaux et validation finale</li>
      </ul>

    `,
    image: null,
    technologies: ["Cisco CUCM", "SIP Trunk", "Dial Plan", "Route Plan", "Call international"],
    category: "voip",
  },
  {
    id: 8,
    title: "Déploiement des nouveaux routeurs",
    description: "Installation et configuration de routeurs DMVPN pour renforcer la connectivité inter-sites en régions.",
    client: "Client : LPSA",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Installation de nouveaux routeurs pour renforcer la connectivité des sites de Fianarantsoa et Toliara et assurer une communication sécurisée avec le siège via DMVPN.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Installation des routeurs Cisco 4G sur site</li>
        <li>Paramétrage de la connectivité 4G</li>
        <li>Configuration de DMVPN pour l'interconnexion des sites</li>
        <li>Mise en place du routage dynamique</li>
        <li>Intégration au réseau existant</li>
        <li>Validation de la communication inter-sites</li>
      </ul>
    `,
    image: null,
    technologies: ["Routing", "DMVPN", "Cellular Gateway", "IPsec", "4G LTE", "P2P"],
    category: "reseaux",
  },
  {
    id: 9,
    title: "Cloud privé OpenStack - ESPA",
    description: "Conception et mise en place d'une infra-structure cloud privée complète basée sur OpenStack.",
    client: null,
    details: `
      <h4>🎯 Contexte</h4>
      <p>Projet de fin d’études portant sur la mise en place d’un cloud privé basé sur OpenStack, destiné à
       centraliser l’hébergement des serveurs virtuels de l’Université d’Antsiranana. La plateforme permet aux
      différentes entités, notamment l’ESPA, la DGSP et la Faculté de Médecine, de déployer des serveurs,
      d’accéder aux ressources à distance et de faciliter le partage de fichiers entre les départements.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Analyse des besoins et conception de l'architecture du cloud privé</li>
        <li>Préparation de l'environnement réseau et des interfaces</li>
        <li>Installation et configuration des composants OpenStack : Nova, Neutron, Glance, Horizon, Keystone</li>
        <li>Installation et configuration de Keystone pour la gestion des identités</li>
        <li>Installation et configuration de Glance pour la gestion des images</li>
        <li>Installation et configuration de Nova pour le calcul et les instances</li>
        <li>Installation et configuration de Neutron pour le réseau virtuel</li>
        <li>Installation et configuration de Cinder pour le stockage bloc</li>
        <li>Installation et configuration de Horizon pour l'administration web</li>
        <li>Création des projets, utilisateurs et rôles</li>
        <li>Configuration des réseaux virtuels, sous-réseaux et routeurs</li>
        <li>Import des images système (Ubuntu, Debian)</li>
        <li>Création des flavors et des quotas</li>
        <li>Déploiement automatisé de machines virtuelles</li>
        <li>Tests de migration des serveurs vers la plateforme cloud</li>
        <li>Validation de l’accès distant aux ressources hébergées</li>
      </ul>

    `,
    image: null,
    technologies: ["OpenStack", "vCloud Director", "VMware", "vSphere", "Virtualisation", "Linux", "KVM", "QEMU", "MySQL", "RabbitMQ"],
    category: "cloud",
  },
  {
    id: 10,
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

    `,
    image: null,
    technologies: ["PHP", "HTML", "CSS", "MySQL"],
    category: "dev",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 14,
    title: "ETO-Parking Diego Suarez",
    description: "Application Android de localisation et réservation de parkings en temps réel dans la ville de Diego Suarez, avec intégration cartographique et détection des places libres.",
    client: null,
    details: `
    <h4>🎯 Contexte</h4>
    <p>Développement d'une application Android permettant aux conducteurs de localiser et réserver des places de parking disponibles en temps réel dans la ville de Diego Suarez. L'application intègre une carte interactive et un système de détection automatique des parkings libres.</p>

    <h4>🔧 Réalisations</h4>
    <ul>
      <li>Développement de l'application mobile sous Android Studio</li>
      <li>Intégration de Google Maps SDK pour la cartographie interactive</li>
      <li>Affichage en temps réel des parkings disponibles sur la carte</li>
      <li>Système de réservation de place avec confirmation</li>
      <li>Détection automatique des places libres et occupées</li>
      <li>Géolocalisation de l'utilisateur et navigation vers le parking</li>
      <li>Interface utilisateur intuitive et responsive</li>
      <li>Backend API pour la gestion des données de parking</li>
    </ul>
    `,
    image: null,
    technologies: ["Android Studio", "Java", "Google Maps SDK", "Firebase", "REST API", "GPS", "SQLite"],
    category: "dev",
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