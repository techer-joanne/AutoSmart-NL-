import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Lightbulb, Target, BarChart, LineChart, PieChart } from 'lucide-react';

// Rest of the file remains the same, just replace ChartBar with BarChart in JSX
export default function InsightsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-emerald-600 to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Insights Stratégiques
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Découvrez des insights puissants grâce à notre analyse avancée des données.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Analyse des Tendances</h3>
              <Brain className="h-6 w-6 text-indigo-400" />
            </div>
            <div className="space-y-4 font-mono">
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <p className="text-gray-300">&gt; Analyser les tendances du marché</p>
                <p className="text-indigo-400 mt-2">Analyse en cours...</p>
                <div className="mt-4 space-y-2">
                  <p className="text-green-400">✓ Insights détectés :</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                    <li>Émergence d'un nouveau segment de marché</li>
                    <li>Opportunité de croissance : +35%</li>
                    <li>Recommandations stratégiques générées</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Prévisions</h3>
              <Lightbulb className="h-6 w-6 text-indigo-400" />
            </div>
            <div className="relative h-64 bg-gray-900/50 rounded-lg p-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white mb-2">85%</p>
                  <p className="text-sm text-gray-400">Précision des prévisions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gradient-to-r from-gray-900 via-indigo-900/20 to-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm"
            >
              <BarChart className="h-12 w-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Analyse Prédictive</h3>
              <p className="text-gray-300">
                Anticipez les tendances futures avec nos modèles d'IA avancés.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm"
            >
              <LineChart className="h-12 w-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visualisation Avancée</h3>
              <p className="text-gray-300">
                Transformez vos données en visualisations interactives et intuitives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm"
            >
              <Target className="h-12 w-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Recommandations</h3>
              <p className="text-gray-300">
                Recevez des recommandations stratégiques basées sur l'analyse des données.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Applications Pratiques
          </h2>
          <p className="text-xl text-gray-300">
            Découvrez comment nos insights transforment les entreprises
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-600/20 to-indigo-600/20 p-8 rounded-2xl backdrop-blur-sm"
          >
            <PieChart className="h-12 w-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Analyse de Marché</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Target className="h-5 w-5 text-indigo-400 mr-2" />
                Identification des opportunités
              </li>
              <li className="flex items-center">
                <Brain className="h-5 w-5 text-indigo-400 mr-2" />
                Analyse concurrentielle
              </li>
              <li className="flex items-center">
                <Brain className="h-5 w-5 text-indigo-400 mr-2" />
                Prévisions de croissance
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-600/20 to-emerald-600/20 p-8 rounded-2xl backdrop-blur-sm"
          >
            <LineChart className="h-12 w-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Performance Opérationnelle</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Target className="h-5 w-5 text-indigo-400 mr-2" />
                Optimisation des processus
              </li>
              <li className="flex items-center">
                <Brain className="h-5 w-5 text-indigo-400 mr-2" />
                Réduction des coûts
              </li>
              <li className="flex items-center">
                <Lightbulb className="h-5 w-5 text-indigo-400 mr-2" />
                Amélioration de l'efficacité
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}