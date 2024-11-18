import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, User, Globe, Bell, Lock, Moon, Sun, 
  Mail, Phone, Building, ChevronRight, Shield,
  Palette, Volume2, Eye, Monitor
} from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const { currentUser } = useAuth();
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    updates: false,
    marketing: false
  });

  const [appearance, setAppearance] = useState({
    animations: true,
    sounds: true,
    highContrast: false
  });

  return (
    <DashboardLayout>
      <div className="py-8 bg-gray-50 dark:bg-gray-900">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profil */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-center space-x-3 mb-6">
              <User className="h-6 w-6 text-indigo-500" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Profil</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={currentUser?.email || ''}
                  readOnly
                  className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Entreprise
                </label>
                <input
                  type="text"
                  placeholder="Nom de l'entreprise"
                  className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Bell className="h-6 w-6 text-indigo-500" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Notifications</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Notifications email</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Recevoir les mises à jour par email</p>
                </div>
                <button
                  onClick={() => setNotifications(prev => ({ ...prev, email: !prev.email }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notifications.email ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications.email ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Notifications push</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Recevoir les alertes en temps réel</p>
                </div>
                <button
                  onClick={() => setNotifications(prev => ({ ...prev, push: !prev.push }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notifications.push ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications.push ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Apparence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Palette className="h-6 w-6 text-indigo-500" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Apparence</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Thème sombre</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Activer le mode sombre</p>
                </div>
                <button
                  onClick={toggleTheme}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Animations</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Activer les animations de l'interface</p>
                </div>
                <button
                  onClick={() => setAppearance(prev => ({ ...prev, animations: !prev.animations }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    appearance.animations ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      appearance.animations ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Sons</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Activer les effets sonores</p>
                </div>
                <button
                  onClick={() => setAppearance(prev => ({ ...prev, sounds: !prev.sounds }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    appearance.sounds ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      appearance.sounds ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Sécurité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-500" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Sécurité</h2>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <Lock className="h-5 w-5 text-indigo-500" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Mot de passe</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Modifier votre mot de passe</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>

              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-indigo-500" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Double authentification</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Sécuriser votre compte</p>
                  </div>
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