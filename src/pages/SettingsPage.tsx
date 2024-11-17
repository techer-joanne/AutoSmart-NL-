import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Bell, 
  Globe, 
  Moon, 
  Palette,
  Mail,
  Key,
  Shield,
  Trash2,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const { currentUser } = useAuth();

  return (
    <DashboardLayout>
      <div className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Paramètres</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Gérez vos préférences et paramètres de compte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Profil */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <User className="h-6 w-6 text-indigo-500" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Profil</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={currentUser?.email || ''}
                  readOnly
                  className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom d'affichage
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
                Sauvegarder les modifications
              </button>
            </div>
          </motion.section>

          {/* Notifications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Bell className="h-6 w-6 text-indigo-500" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Notifications</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Notifications email</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Recevoir des mises à jour par email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Notifications push</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Recevoir des notifications dans le navigateur</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>
          </motion.section>

          {/* Apparence */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Palette className="h-6 w-6 text-indigo-500" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Apparence</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Mode sombre</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Basculer entre le mode clair et sombre</p>
                </div>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Langue</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Choisir la langue de l'interface</p>
                </div>
                <select className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>
          </motion.section>

          {/* Sécurité */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-500" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Sécurité</h2>
            </div>

            <div className="space-y-6">
              <div>
                <button className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Key className="h-5 w-5 text-indigo-500" />
                    <span className="text-gray-900 dark:text-white">Changer le mot de passe</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>

                <button className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors mt-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-indigo-500" />
                    <span className="text-gray-900 dark:text-white">Authentification à deux facteurs</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>
          </motion.section>

          {/* Danger Zone */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
              <h2 className="text-xl font-semibold text-red-600 dark:text-red-400">Zone de danger</h2>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-between px-4 py-2 bg-red-100 dark:bg-red-900/40 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/60 transition-colors">
                <div className="flex items-center space-x-3">
                  <Trash2 className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <span className="text-red-600 dark:text-red-400">Supprimer le compte</span>
                </div>
                <ChevronRight className="h-5 w-5 text-red-400" />
              </button>
            </div>
          </motion.section>
        </div>
      </div>
    </DashboardLayout>
  );
}