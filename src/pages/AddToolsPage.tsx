import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Workflow, Database, Code, Puzzle, Library, Boxes, Wand2 } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

export default function AddToolsPage() {
  return (
    <DashboardLayout>
      <div className="py-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Section Intégration Site Web */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect"
          >
            <Globe className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Intégrer mon site web</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Connectez votre site web pour automatiser la collecte de données et l'analyse
            </p>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200">
              Commencer l'intégration
            </button>
          </motion.div>

          {/* Section Flux Personnalisé */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect"
          >
            <Workflow className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Créer un flux personnalisé</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Construisez des workflows automatisés adaptés à vos besoins spécifiques
            </p>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200">
              Créer un flux
            </button>
          </motion.div>

          {/* Section Connecter Base de Données */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect"
          >
            <Database className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Connecter une base de données</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Intégrez vos sources de données existantes pour une analyse centralisée
            </p>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200">
              Ajouter une source
            </button>
          </motion.div>

          {/* Section API Personnalisée */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect"
          >
            <Code className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Créer une API personnalisée</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Développez des points d'accès API spécifiques à vos besoins
            </p>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200">
              Configurer l'API
            </button>
          </motion.div>
        </div>

        {/* Section Bibliothèque d'Extensions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Bibliothèque d'extensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect">
              <Library className="h-8 w-8 text-indigo-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Extensions populaires</h3>
              <p className="text-gray-600 dark:text-gray-300">Découvrez les outils les plus utilisés par la communauté</p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect">
              <Boxes className="h-8 w-8 text-indigo-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Intégrations prêtes à l'emploi</h3>
              <p className="text-gray-600 dark:text-gray-300">Solutions préconfigurées pour des cas d'usage courants</p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect">
              <Wand2 className="h-8 w-8 text-indigo-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Assistant de création</h3>
              <p className="text-gray-600 dark:text-gray-300">Créez des outils personnalisés guidés par l'IA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}