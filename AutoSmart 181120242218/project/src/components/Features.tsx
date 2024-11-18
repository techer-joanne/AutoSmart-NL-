import React from 'react';
import { Brain, Workflow, Shield, Zap, BarChart, MessageSquare, Camera, FileSpreadsheet, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: "Traitement du Langage Naturel",
    description: "Communiquez avec les agents IA en langage courant, sans expertise technique requise.",
    icon: Brain,
  },
  {
    name: "Vision par Ordinateur",
    description: "Analysez automatiquement les images et vidéos pour la surveillance, le contrôle qualité et plus encore.",
    icon: Camera,
  },
  {
    name: "Automatisation des Emails",
    description: "Traitez, classez et répondez automatiquement aux emails avec une précision exceptionnelle.",
    icon: Mail,
  },
  {
    name: "Traitement de Données",
    description: "Importez et analysez automatiquement vos fichiers Excel, CSV et bases de données.",
    icon: FileSpreadsheet,
  },
  {
    name: "Flux de Travail Automatisés",
    description: "Créez des séquences d'automatisation complexes en combinant plusieurs agents IA.",
    icon: Workflow,
  },
  {
    name: "Sécurité Entreprise",
    description: "Chiffrement de niveau bancaire et conformité aux normes de confidentialité mondiales.",
    icon: Shield,
  },
  {
    name: "Traitement en Temps Réel",
    description: "Obtenez des résultats instantanés grâce à notre moteur de traitement IA haute performance.",
    icon: Zap,
  },
  {
    name: "Analyses Avancées",
    description: "Obtenez des insights avec des rapports détaillés et des métriques de performance.",
    icon: BarChart,
  },
  {
    name: "Réponses Intelligentes",
    description: "Réponses alimentées par l'IA qui s'adaptent au contexte de votre entreprise.",
    icon: MessageSquare,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Features() {
  return (
    <div id="features" className="relative bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Fonctionnalités Puissantes</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tout ce dont vous avez besoin pour automatiser votre flux de travail
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            AutoSmart NL combine une IA de pointe avec un design intuitif pour rendre l'automatisation accessible à tous.
          </p>
        </motion.div>
        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div 
                key={feature.name} 
                className="relative overflow-hidden rounded-2xl bg-gray-800/50 p-8 backdrop-blur-sm ring-1 ring-white/10 transition-all hover:ring-indigo-500/50 hover:bg-gray-800/60"
                variants={item}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}