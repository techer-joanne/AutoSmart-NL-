import React from 'react';
import { motion } from 'framer-motion';
import { 
  Workflow, Play, Pause, Clock, Settings, Plus,
  ArrowRight, Check, AlertCircle, RefreshCw
} from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

const workflows = [
  {
    id: 1,
    name: "Traitement Email Automatique",
    description: "Classification et réponse aux emails entrants",
    status: "active",
    lastRun: "Il y a 5 minutes",
    type: "email",
    performance: "98%"
  },
  {
    id: 2,
    name: "Analyse des Données Hebdomadaire",
    description: "Génération de rapports de performance",
    status: "scheduled",
    lastRun: "Il y a 2 jours",
    type: "analytics",
    performance: "100%"
  },
  {
    id: 3,
    name: "Surveillance Vision IA",
    description: "Analyse des flux vidéo en temps réel",
    status: "paused",
    lastRun: "Il y a 1 semaine",
    type: "vision",
    performance: "95%"
  }
];

export default function WorkflowPage() {
  return (
    <DashboardLayout>
      <div className="py-8 bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Flux de travail</h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Gérez et surveillez vos automatisations
              </p>
            </div>
            <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Plus className="h-5 w-5 mr-2" />
              Nouveau Flux
            </button>
          </div>
        </motion.div>

        <div className="space-y-6">
          {workflows.map((workflow, index) => (
            <motion.div
              key={workflow.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {workflow.name}
                    </h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      workflow.status === 'active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : workflow.status === 'paused'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {workflow.status === 'active' ? 'Actif' : workflow.status === 'paused' ? 'En pause' : 'Programmé'}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {workflow.description}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {workflow.status === 'active' ? (
                    <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                      <Pause className="h-5 w-5" />
                    </button>
                  ) : (
                    <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                      <Play className="h-5 w-5" />
                    </button>
                  )}
                  <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <Settings className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Dernière exécution : {workflow.lastRun}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Performance : {workflow.performance}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    0 erreurs détectées
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <RefreshCw className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Mise à jour automatique
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-end">
                <button className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
                  Voir les détails
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}