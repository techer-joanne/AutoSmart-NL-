import React from 'react';
import { Mail, MessageSquare, Filter, Inbox } from 'lucide-react';
import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';

export default function EmailToolPage() {
  return (
    <DashboardLayout>
      <div className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Automatisation Email</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Traitement et réponses automatiques aux emails</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect"
          >
            <Filter className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Classification</h3>
            <p className="text-gray-600 dark:text-gray-300">Tri automatique des emails par catégorie</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect"
          >
            <MessageSquare className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Réponses Auto</h3>
            <p className="text-gray-600 dark:text-gray-300">Génération de réponses intelligentes</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect"
          >
            <Inbox className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Gestion Inbox</h3>
            <p className="text-gray-600 dark:text-gray-300">Organisation automatique de votre boîte mail</p>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}