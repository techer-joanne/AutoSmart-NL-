import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, LineChart, PieChart, TrendingUp, Database, ArrowUpRight } from 'lucide-react';
import { AnimatedBarChart, AnimatedLineChart, AnimatedCircleChart, AnimatedWaveChart } from '../components/charts/AnimatedChart';
import { ChartCard } from '../components/charts/ChartCard';

export default function AnalyticsPage() {
  // Sample data for charts
  const salesData = [65, 45, 75, 50, 85, 70, 90];
  const conversionData = [30, 40, 35, 50, 49, 60, 70, 91, 125];
  const userActivityData = [80, 120, 105, 110, 95, 135, 125, 140];
  const waveData = [40, 60, 45, 70, 55, 75, 65, 80];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-purple-600 to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Analytics Intelligent
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Transformez vos données en insights actionnables avec notre plateforme d'analyse alimentée par l'IA.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChartCard
            title="Performance des Ventes"
            subtitle="Évolution hebdomadaire"
            icon={<BarChart className="h-6 w-6" />}
          >
            <AnimatedBarChart
              data={salesData}
              height={250}
              color="indigo"
            />
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Ventes</p>
                <p className="text-white text-lg font-semibold">€45,231</p>
                <span className="text-green-400 text-sm">+12.5%</span>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Clients</p>
                <p className="text-white text-lg font-semibold">1,234</p>
                <span className="text-green-400 text-sm">+8.3%</span>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Conversion</p>
                <p className="text-white text-lg font-semibold">3.2%</p>
                <span className="text-green-400 text-sm">+2.1%</span>
              </div>
            </div>
          </ChartCard>

          <ChartCard
            title="Taux de Conversion"
            subtitle="30 derniers jours"
            icon={<LineChart className="h-6 w-6" />}
          >
            <AnimatedLineChart
              data={conversionData}
              height={250}
              color="emerald"
            />
            <div className="mt-4 p-4 bg-gray-900/50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Moyenne</p>
                  <p className="text-white text-lg font-semibold">4.8%</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Maximum</p>
                  <p className="text-white text-lg font-semibold">7.2%</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Tendance</p>
                  <div className="flex items-center text-green-400">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+15%</span>
                  </div>
                </div>
              </div>
            </div>
          </ChartCard>

          <ChartCard
            title="Activité Utilisateurs"
            subtitle="Temps réel"
            icon={<Database className="h-6 w-6" />}
          >
            <AnimatedWaveChart
              data={waveData}
              height={250}
              color="blue"
            />
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Utilisateurs Actifs</p>
                <p className="text-white text-lg font-semibold">2,847</p>
                <span className="text-green-400 text-sm">+5.2% vs hier</span>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Temps Moyen</p>
                <p className="text-white text-lg font-semibold">12m 34s</p>
                <span className="text-green-400 text-sm">+1.8% vs moyenne</span>
              </div>
            </div>
          </ChartCard>

          <ChartCard
            title="Objectifs Atteints"
            subtitle="Ce mois"
            icon={<PieChart className="h-6 w-6" />}
          >
            <div className="flex justify-center">
              <AnimatedCircleChart
                percentage={85}
                size={250}
                color="purple"
              />
            </div>
            <div className="mt-4 p-4 bg-gray-900/50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Complétés</p>
                  <p className="text-white text-lg font-semibold">17/20</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">En cours</p>
                  <p className="text-white text-lg font-semibold">3</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Progrès</p>
                  <p className="text-green-400 text-lg font-semibold">85%</p>
                </div>
              </div>
            </div>
          </ChartCard>
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
            <BarChart className="h-12 w-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Visualisation Avancée</h3>
            <p className="text-gray-300">
              Créez des tableaux de bord interactifs et des visualisations personnalisées pour mieux comprendre vos données.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm"
          >
            <LineChart className="h-12 w-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Prévisions IA</h3>
            <p className="text-gray-300">
              Anticipez les tendances futures grâce à nos modèles de prévision basés sur l'apprentissage automatique.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm"
          >
            <Database className="h-12 w-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Intégration de Données</h3>
            <p className="text-gray-300">
              Connectez toutes vos sources de données pour une vue unifiée de votre activité.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}