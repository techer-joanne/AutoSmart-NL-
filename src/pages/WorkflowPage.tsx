import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Play, Pause, Settings, Plus, ArrowRight, GitBranch, Repeat } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

export default function WorkflowPage() {
  return (
    <DashboardLayout>
      <div className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Flux de travail</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Gérez et automatisez vos processus métier avec des workflows intelligents
          </p>
        </motion.div>

        {/* Actions rapides */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200">
            <Plus className="h-5 w-5 mr-2" />
            Nouveau Workflow
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors duration-200">
            <GitBranch className="h-5 w-5 mr-2" />
            Importer
          </button>
        </div>

        {/* Workflows actifs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect"
          >
            <div className="flex items-center justify-between mb-4">
              <Workflow className="h-8 w-8 text-indigo-500" />
              <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30 rounded-full">
                Actif
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Traitement Email</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Automatisation des réponses client</p>
            <div className="flex items-center justify-between">
              <button className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200">
                <Pause className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect"
          >
            <div className="flex items-center justify-between mb-4">
              <Workflow className="h-8 w-8 text-indigo-500" />
              <span className="px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30 rounded-full">
                En pause
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Analyse Data</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Rapport hebdomadaire automatique</p>
            <div className="flex items-center justify-between">
              <button className="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors duration-200">
                <Play className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Modèles de workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Modèles disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg metallic-effect">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">Traitement de leads</h3>
                <ArrowRight className="h-5 w-5 text-indigo-500" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Qualification et suivi automatique des prospects</p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg metallic-effect">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">Synchronisation CRM</h3>
                <Repeat className="h-5 w-5 text-indigo-500" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Synchronisation bidirectionnelle avec votre CRM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}