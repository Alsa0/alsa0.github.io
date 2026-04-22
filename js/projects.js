// ============================================
// PROJETS — Basés sur le CV d'Aurélien
// Modifiez ce fichier pour ajouter vos projets !
// ============================================
const projects = [
  {
    id: 1,
    title: "🏢 Infrastructure NextHope",
    description: "Administration et supervision d'infrastructures réseau, systèmes et sécurité.",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Mission principale en tant qu'Ingénieur IT chez NextHope depuis août 2024. Responsable de la conception, administration et supervision des infrastructures réseau, systèmes et sécurité.</p>
      
      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Configuration et maintenance de routeurs et switches Cisco</li>
        <li>Administration des pare-feux FortiGate et politiques de sécurité</li>
        <li>Déploiement et gestion de VMs sur VMware vSphere/ESXi</li>
        <li>Mise en place de la téléphonie IP et VoIP</li>
        <li>Rédaction de documentation technique détaillée</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Infrastructure stable et sécurisée avec une disponibilité optimale des services pour les clients.</p>
    `,
    image: null,
    technologies: ["Cisco", "FortiGate", "VMware", "Linux", "VoIP"],
    category: "reseaux",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "☁️ Cloud OpenStack — ESPA",
    description: "Conception et mise en place d'une infrastructure cloud complète.",
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
    technologies: ["OpenStack", "Linux", "Virtualisation", "Neutron"],
    category: "cloud",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "🧱 Sécurité & Pare-feux",
    description: "Configuration de politiques de sécurité avancées.",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Mise en place et configuration de solutions de sécurité réseau pour plusieurs clients chez NextHope.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Configuration de règles et politiques sur FortiGate</li>
        <li>Déploiement et tuning de Cisco ASA et Firepower</li>
        <li>Mise en place de pfSense comme pare-feu open source</li>
        <li>Configuration IDS/IPS Snort pour détection d'intrusions</li>
        <li>Déploiement de portail captif pour accès Wi-Fi sécurisé</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Réduction significative des incidents de sécurité et conformité aux bonnes pratiques.</p>
    `,
    image: null,
    technologies: ["FortiGate", "Cisco ASA", "pfSense", "Snort IDS"],
    category: "securite",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "📞 Téléphonie VoIP — Ministère",
    description: "Mise en place d'un système VoIP interne complet.",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Stage réalisé à la DSI du Ministère de l'Économie et des Finances (Novembre 2019 – Février 2020). Déploiement d'un système de téléphonie IP interne.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Configuration des trunks SIP et dial-peers</li>
        <li>Mise en place des codecs optimisés (G.711, G.729)</li>
        <li>Routage d'appels inter-services</li>
        <li>Configuration de la messagerie vocale</li>
        <li>Tests et validation du système</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Système VoIP interne fonctionnel réduisant les coûts de communication entre services.</p>
    `,
    image: null,
    technologies: ["Cisco CME", "Asterisk", "SIP", "Yeastar"],
    category: "voip",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "📡 Réseau WiMAX — CIR DIANA",
    description: "Configuration et optimisation de réseaux WiMAX.",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Stage à la CIR du Service Régional de Budget DIANA (Septembre – Décembre 2022). Déploiement et optimisation d'un réseau WiMAX pour la région.</p>

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
    technologies: ["WiMAX", "Ubiquiti", "Radio", "LAN/WAN"],
    category: "reseaux",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "📱 App Web État Civil",
    description: "Développement d'une application web de remontée des statistiques.",
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
  {
    id: 7,
    title: "📹 Vidéosurveillance IP",
    description: "Installation et configuration de systèmes de vidéosurveillance IP.",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Mission réalisée chez NextHope pour plusieurs clients nécessitant une solution de surveillance IP complète.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Installation et configuration des caméras Hikvision</li>
        <li>Mise en place du NVR et stockage des enregistrements</li>
        <li>Configuration de l'accès distant web et mobile</li>
        <li>Mise en place des alertes et notifications</li>
        <li>Formation des utilisateurs</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Système de surveillance opérationnel avec accès distant sécurisé 24h/24.</p>
    `,
    image: null,
    technologies: ["Hikvision", "NVR", "IP Camera", "Réseau"],
    category: "securite",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 8,
    title: "🖥️ Virtualisation Multi-Plateformes",
    description: "Déploiement de VM sur VMware vSphere/ESXi et Proxmox VE.",
    details: `
      <h4>🎯 Contexte</h4>
      <p>Déploiement et gestion de plateformes de virtualisation pour plusieurs clients chez NextHope.</p>

      <h4>🔧 Réalisations</h4>
      <ul>
        <li>Installation et configuration de VMware vSphere/ESXi</li>
        <li>Déploiement de Proxmox VE comme alternative open source</li>
        <li>Gestion centralisée via vCenter Server</li>
        <li>Migration de serveurs physiques vers VMs</li>
        <li>Mise en place de snapshots et sauvegardes</li>
      </ul>

      <h4>📈 Résultats</h4>
      <p>Réduction des coûts infrastructure de 40% grâce à la consolidation des serveurs.</p>
    `,
    image: null,
    technologies: ["VMware", "Proxmox", "ESXi", "vCenter"],
    category: "cloud",
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
