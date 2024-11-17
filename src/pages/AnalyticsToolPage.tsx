import React from 'react';
import { FileSpreadsheet, BarChart, PieChart, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';

export default function AnalyticsToolPage() {
  return (
    <DashboardLayout>
      <div className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analyse de Données</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Automatisez vos rapports et analyses avec notre IA</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect"
          >
            <FileSpreadsheet className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Import de Données</h3>
            <p className="text-gray-600 dark:text-gray-300">Importez vos données depuis Excel, CSV ou bases de données</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect"
          >
            <BarChart className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Visualisation</h3>
            <p className="text-gray-600 dark:text-gray-300">Créez des graphiques et tableaux de bord interactifs</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect"
          >
            <TrendingUp className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Prédictions</h3>
            <p className="text-gray-600 dark:text-gray-300">Anticipez les tendances avec notre IA prédictive</p>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}