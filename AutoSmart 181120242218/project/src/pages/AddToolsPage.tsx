import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Globe, Database, Boxes, Wand2, Library, Puzzle } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

export default function AddToolsPage() {
  return (
    <DashboardLayout>
      <div className="py-8 bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Ajouter mes outils</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Personnalisez votre expérience en ajoutant vos propres outils ou en choisissant parmi notre bibliothèque
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <Globe className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Site Web</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Connectez votre site web pour automatiser les interactions utilisateurs
            </p>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Connecter
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <Database className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Base de données</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Intégrez vos données pour une analyse automatisée
            </p>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Configurer
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Bibliothèque d'extensions</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Découvrez nos extensions populaires
              </p>
            </div>
            <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Plus className="h-5 w-5 mr-2" />
              Nouvelle Extension
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <Boxes className="h-8 w-8 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Marketplace
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explorez plus de 50 outils prêts à l'emploi
              </p>
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                Explorer
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <Wand2 className="h-8 w-8 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Personnalisation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Créez vos propres outils avec notre assistant IA
              </p>
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                Créer
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <Library className="h-8 w-8 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Templates
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Utilisez nos modèles pré-configurés
              </p>
              <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                Parcourir
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}