import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileSpreadsheet, Camera, Mail, Plus, Workflow, Shield,
  BarChart, PieChart, TrendingUp, ImagePlus, Video, Scan,
  Filter, MessageSquare, Inbox, Globe, Database, Code,
  Lock, Key, FileCheck, Bell, GitBranch, Settings,
  UserCheck, AlertTriangle, History, Users, Brain,
  Zap, Bot, Puzzle, Library, Boxes, Wand2
} from 'lucide-react';

interface PreviewData {
  [key: string]: {
    title: string;
    description: string;
    icon: React.ElementType;
    sections: Array<{
      title: string;
      icon: React.ElementType;
      features: Array<{
        icon: React.ElementType;
        title: string;
        description: string;
        status?: string;
      }>;
    }>;
    bgColor: string;
  };
}

const previewData: PreviewData = {
  analytics: {
    title: "Analyse de Données",
    description: "Automatisation des rapports et analyses",
    icon: FileSpreadsheet,
    sections: [
      {
        title: "Import de Données",
        icon: Database,
        features: [
          {
            icon: FileSpreadsheet,
            title: "Import Excel/CSV",
            description: "Importez vos fichiers de données",
            status: "Supporté"
          },
          {
            icon: Database,
            title: "Connexion BDD",
            description: "Intégrez vos bases de données",
            status: "MySQL, PostgreSQL"
          }
        ]
      },
      {
        title: "Visualisation",
        icon: BarChart,
        features: [
          {
            icon: BarChart,
            title: "Graphiques Interactifs",
            description: "Créez des tableaux de bord",
            status: "15+ types"
          },
          {
            icon: PieChart,
            title: "Rapports Automatiques",
            description: "Génération programmée",
            status: "PDF, Excel"
          }
        ]
      },
      {
        title: "Prédictions",
        icon: Brain,
        features: [
          {
            icon: TrendingUp,
            title: "Analyse Prédictive",
            description: "Prévisions basées sur l'IA",
            status: "95% précision"
          },
          {
            icon: Zap,
            title: "Temps Réel",
            description: "Analyses en direct",
            status: "Actif"
          }
        ]
      }
    ],
    bgColor: "from-blue-600/20 to-indigo-600/20"
  },
  vision: {
    title: "Vision par Ordinateur",
    description: "Analyse d'images et reconnaissance",
    icon: Camera,
    sections: [
      {
        title: "Analyse d'Images",
        icon: ImagePlus,
        features: [
          {
            icon: Camera,
            title: "Détection d'Objets",
            description: "Identification automatique",
            status: "99% précision"
          },
          {
            icon: Bot,
            title: "Classification",
            description: "Catégorisation d'images",
            status: "150+ catégories"
          }
        ]
      },
      {
        title: "Analyse Vidéo",
        icon: Video,
        features: [
          {
            icon: Video,
            title: "Flux en Direct",
            description: "Traitement temps réel",
            status: "60 FPS"
          },
          {
            icon: History,
            title: "Historique",
            description: "Archivage intelligent",
            status: "30 jours"
          }
        ]
      },
      {
        title: "OCR",
        icon: Scan,
        features: [
          {
            icon: FileCheck,
            title: "Extraction de Texte",
            description: "Reconnaissance de caractères",
            status: "45 langues"
          },
          {
            icon: Globe,
            title: "Traduction",
            description: "Traduction automatique",
            status: "28 langues"
          }
        ]
      }
    ],
    bgColor: "from-purple-600/20 to-indigo-600/20"
  },
  email: {
    title: "Automatisation Email",
    description: "Traitement et réponses automatiques",
    icon: Mail,
    sections: [
      {
        title: "Classification",
        icon: Filter,
        features: [
          {
            icon: Brain,
            title: "Tri Intelligent",
            description: "Catégorisation automatique",
            status: "98% précision"
          },
          {
            icon: Zap,
            title: "Prioritisation",
            description: "Gestion des priorités",
            status: "Temps réel"
          }
        ]
      },
      {
        title: "Réponses Auto",
        icon: MessageSquare,
        features: [
          {
            icon: Bot,
            title: "IA Conversationnelle",
            description: "Réponses contextuelles",
            status: "15 modèles"
          },
          {
            icon: Globe,
            title: "Multi-langues",
            description: "Support international",
            status: "12 langues"
          }
        ]
      },
      {
        title: "Gestion Inbox",
        icon: Inbox,
        features: [
          {
            icon: FileCheck,
            title: "Organisation",
            description: "Classement automatique",
            status: "Actif"
          },
          {
            icon: History,
            title: "Suivi",
            description: "Historique des actions",
            status: "90 jours"
          }
        ]
      }
    ],
    bgColor: "from-emerald-600/20 to-indigo-600/20"
  },
  tools: {
    title: "Ajouter mes outils",
    description: "Personnalisez votre expérience",
    icon: Plus,
    sections: [
      {
        title: "Intégrations",
        icon: Puzzle,
        features: [
          {
            icon: Globe,
            title: "Site Web",
            description: "Connectez votre site",
            status: "Simple"
          },
          {
            icon: Database,
            title: "Base de données",
            description: "Intégrez vos données",
            status: "5+ types"
          }
        ]
      },
      {
        title: "Extensions",
        icon: Library,
        features: [
          {
            icon: Boxes,
            title: "Marketplace",
            description: "Extensions populaires",
            status: "50+ outils"
          },
          {
            icon: Wand2,
            title: "Personnalisation",
            description: "Créez vos outils",
            status: "Assistant IA"
          }
        ]
      }
    ],
    bgColor: "from-yellow-600/20 to-indigo-600/20"
  },
  workflows: {
    title: "Flux de travail",
    description: "Gestion des processus automatisés",
    icon: Workflow,
    sections: [
      {
        title: "Workflows Actifs",
        icon: Zap,
        features: [
          {
            icon: Bot,
            title: "Email Auto",
            description: "Traitement automatique",
            status: "En cours"
          },
          {
            icon: Brain,
            title: "Analyse Data",
            description: "Rapport hebdomadaire",
            status: "Programmé"
          }
        ]
      },
      {
        title: "Modèles",
        icon: Library,
        features: [
          {
            icon: Boxes,
            title: "Templates",
            description: "Modèles prédéfinis",
            status: "25+ modèles"
          },
          {
            icon: GitBranch,
            title: "Import/Export",
            description: "Partage de workflows",
            status: "Compatible"
          }
        ]
      }
    ],
    bgColor: "from-green-600/20 to-indigo-600/20"
  },
  security: {
    title: "Sécurité",
    description: "Paramètres de sécurité et conformité",
    icon: Shield,
    sections: [
      {
        title: "Authentification",
        icon: Lock,
        features: [
          {
            icon: UserCheck,
            title: "Double authentification",
            description: "Sécurisez votre compte avec la 2FA",
            status: "Non activé"
          },
          {
            icon: History,
            title: "Appareils connectés",
            description: "Gérez vos sessions actives",
            status: "3 appareils"
          }
        ]
      },
      {
        title: "Permissions",
        icon: Key,
        features: [
          {
            icon: Key,
            title: "Clés API",
            description: "Gérez vos clés d'API",
            status: "2 actives"
          },
          {
            icon: Globe,
            title: "Webhooks",
            description: "Configurez vos webhooks",
            status: "1 configuré"
          }
        ]
      },
      {
        title: "Journal d'activité",
        icon: FileCheck,
        features: [
          {
            icon: History,
            title: "Historique de connexion",
            description: "Consultez les dernières connexions",
            status: "7 jours"
          },
          {
            icon: AlertTriangle,
            title: "Alertes de sécurité",
            description: "Historique des incidents",
            status: "Aucune alerte"
          }
        ]
      },
      {
        title: "Notifications",
        icon: Bell,
        features: [
          {
            icon: Bell,
            title: "Alertes email",
            description: "Notifications de sécurité par email",
            status: "Activé"
          },
          {
            icon: Users,
            title: "Alertes équipe",
            description: "Notifications pour l'équipe",
            status: "Configuration"
          }
        ]
      }
    ],
    bgColor: "from-red-600/20 to-indigo-600/20"
  }
};

interface SidebarPreviewProps {
  activePreview: string | null;
  position: { x: number; y: number };
}

export default function SidebarPreview({ activePreview, position }: SidebarPreviewProps) {
  if (!activePreview || !previewData[activePreview]) return null;

  const preview = previewData[activePreview];
  const Icon = preview.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: position.x + 20 }}
        animate={{ opacity: 1, scale: 1, x: position.x + 20 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="fixed z-50 w-96 max-h-[80vh] overflow-y-auto custom-scrollbar p-4 rounded-lg shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        style={{ top: Math.max(20, position.y - 100) }}
      >
        <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${preview.bgColor} opacity-10`} />
        
        <div className="relative">
          <div className="flex items-center space-x-3 mb-4">
            <Icon className="h-6 w-6 text-indigo-500" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {preview.title}
            </h3>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            {preview.description}
          </p>

          <div className="space-y-6">
            {preview.sections.map((section, sectionIndex) => {
              const SectionIcon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sectionIndex * 0.1 }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <SectionIcon className="h-5 w-5 text-indigo-500" />
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {section.title}
                    </h4>
                  </div>
                  
                  <div className="grid gap-3">
                    {section.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                        >
                          <div className="flex-shrink-0 p-2 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-lg">
                            <FeatureIcon className="h-5 w-5 text-indigo-500" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h5 className="text-sm font-medium text-gray-900 dark:text-white">
                                {feature.title}
                              </h5>
                              {feature.status && (
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {feature.status}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}