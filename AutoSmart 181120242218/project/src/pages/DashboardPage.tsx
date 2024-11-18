import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';
import { 
  BarChart, 
  Users, 
  Settings, 
  Bell, 
  FileText, 
  Calendar,
  Zap,
  Activity,
  Clock,
  TrendingUp,
  Mail,
  RefreshCw,
  ChevronRight
} from 'lucide-react';

export default function DashboardPage() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  const stats = [
    { name: 'Tâches Automatisées', value: '156', change: '+12%', icon: Zap },
    { name: 'Temps Économisé', value: '45h', change: '+23%', icon: Clock },
    { name: 'Précision', value: '99.8%', change: '+1.2%', icon: Activity },
    { name: 'ROI', value: '312%', change: '+28%', icon: TrendingUp },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'Analyse de données',
      description: 'Rapport mensuel généré automatiquement',
      date: 'Il y a 2h',
      icon: FileText,
    },
    {
      id: 2,
      type: 'Automatisation',
      description: 'Traitement de 250 emails complété',
      date: 'Il y a 4h',
      icon: Mail,
    },
    {
      id: 3,
      type: 'Optimisation',
      description: 'Workflow marketing mis à jour',
      date: 'Il y a 6h',
      icon: RefreshCw,
    },
  ];

  return (
    <DashboardLayout>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.name}
                    </p>
                    <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                  </div>
                  <Icon className="h-8 w-8 text-indigo-500" />
                </div>
                <div className="mt-4">
                  <span className="text-green-500 text-sm font-medium">
                    {stat.change}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">
                    vs mois dernier
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Activity Feed */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Activités Récentes
              </h2>
              <div className="space-y-6">
                {recentActivities.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                          <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {activity.type}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {activity.description}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                          {activity.date}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Actions Rapides
            </h2>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-indigo-500 mr-3" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Nouveau Rapport
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-indigo-500 mr-3" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Gérer l'Équipe
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className="flex items-center">
                  <Settings className="h-5 w-5 text-indigo-500 mr-3" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Paramètres
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}