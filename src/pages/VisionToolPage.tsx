import React from 'react';
import { Camera, Scan, ImagePlus, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';

export default function VisionToolPage() {
  return (
    <DashboardLayout>
      <div className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Vision par Ordinateur</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Analyse d'images et reconnaissance automatique</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect"
          >
            <ImagePlus className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Analyse d'Images</h3>
            <p className="text-gray-600 dark:text-gray-300">Détection d'objets et classification d'images</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect"
          >
            <Video className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Analyse Vidéo</h3>
            <p className="text-gray-600 dark:text-gray-300">Traitement en temps réel des flux vidéo</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg metallic-effect"
          >
            <Scan className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">OCR</h3>
            <p className="text-gray-600 dark:text-gray-300">Reconnaissance de texte dans les images</p>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}