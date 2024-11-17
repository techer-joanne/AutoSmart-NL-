import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Package, Truck, CreditCard, BarChart3, Users, Settings, Zap } from 'lucide-react';

export default function CommercePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Commerce Intelligent
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Automatisez et optimisez vos opérations commerciales avec notre plateforme d'IA avancée.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm"
          >
            <ShoppingCart className="h-12 w-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Gestion des Commandes</h3>
            <p className="text-gray-300">
              Automatisez le traitement des commandes et optimisez le flux de travail de votre commerce.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm"
          >
            <Package className="h-12 w-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Gestion des Stocks</h3>
            <p className="text-gray-300">
              Prévoyez les besoins en stock et optimisez votre inventaire avec l'IA prédictive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm"
          >
            <Truck className="h-12 w-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Logistique Intelligente</h3>
            <p className="text-gray-300">
              Optimisez vos livraisons et réduisez les coûts avec notre système logistique intelligent.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="bg-gradient-to-r from-gray-900 via-indigo-900/20 to-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm"
          >
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Settings className="h-8 w-8 text-indigo-400" />
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </div>
                <span className="text-sm text-gray-300">Assistant Commerce Actif</span>
              </div>

              <div className="space-y-4 font-mono">
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <p className="text-gray-300">&gt; Optimiser la gestion des stocks</p>
                  <p className="text-indigo-400 mt-2">Analyse en cours...</p>
                  <div className="mt-4 space-y-2 text-green-400">
                    <p>✓ Recommandations générées :</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                      <li>Réapprovisionnement nécessaire : 3 produits</li>
                      <li>Prévision de demande : +25% semaine prochaine</li>
                      <li>Stock optimal suggéré : 150 unités</li>
                      <li>Économies potentielles : 12%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Avantages de Notre Solution Commerce
          </h2>
          <p className="text-xl text-gray-300">
            Optimisez chaque aspect de votre activité commerciale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 p-8 rounded-2xl backdrop-blur-sm"
          >
            <CreditCard className="h-12 w-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Paiements Optimisés</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Zap className="h-5 w-5 text-indigo-400 mr-2" />
                Traitement automatique des paiements
              </li>
              <li className="flex items-center">
                <Users className="h-5 w-5 text-indigo-400 mr-2" />
                Gestion des remboursements
              </li>
              <li className="flex items-center">
                <Settings className="h-5 w-5 text-indigo-400 mr-2" />
                Détection des fraudes
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-8 rounded-2xl backdrop-blur-sm"
          >
            <BarChart3 className="h-12 w-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Analytics Commerce</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Zap className="h-5 w-5 text-indigo-400 mr-2" />
                Rapports en temps réel
              </li>
              <li className="flex items-center">
                <Users className="h-5 w-5 text-indigo-400 mr-2" />
                Analyse des tendances
              </li>
              <li className="flex items-center">
                <Settings className="h-5 w-5 text-indigo-400 mr-2" />
                Prévisions des ventes
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}