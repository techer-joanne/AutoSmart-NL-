import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  LogOut,
  ChevronRight,
  Bot,
  FileSpreadsheet,
  Camera,
  Mail,
  Plus,
  Workflow,
  Shield,
  Settings,
  Bell,
  User
} from 'lucide-react';
import SearchBar from './SearchBar';
import SidebarPreview from './SidebarPreview';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  {
    title: 'Analyse de Données',
    icon: FileSpreadsheet,
    description: 'Automatisation des rapports et analyses',
    path: '/dashboard/analytics',
    id: 'analytics'
  },
  {
    title: 'Vision par Ordinateur',
    icon: Camera,
    description: 'Analyse d\'images et reconnaissance',
    path: '/dashboard/vision',
    id: 'vision'
  },
  {
    title: 'Automatisation Email',
    icon: Mail,
    description: 'Traitement et réponses automatiques',
    path: '/dashboard/email',
    id: 'email'
  },
  {
    title: 'Ajouter mes outils',
    icon: Plus,
    description: 'Ajouter ou choisir dans la bibliothèque',
    path: '/dashboard/tools',
    id: 'tools'
  },
  {
    title: 'Flux de travail',
    icon: Workflow,
    description: 'Gestion des processus automatisés',
    path: '/dashboard/workflows',
    id: 'workflows'
  },
  {
    title: 'Sécurité',
    icon: Shield,
    description: 'Paramètres de sécurité et conformité',
    path: '/dashboard/security',
    id: 'security'
  }
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePreview, setActivePreview] = useState<string | null>(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  const navigateToDashboard = () => {
    navigate('/dashboard');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemHover = (
    event: React.MouseEvent<HTMLButtonElement>,
    itemId: string
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPreviewPosition({
      x: rect.right,
      y: rect.top
    });
    setActivePreview(itemId);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation - Only visible when sidebar is closed */}
      <AnimatePresence>
        {!isSidebarOpen && (
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center flex-1">
                  <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                  <button
                    onClick={navigateToDashboard}
                    className="flex items-center ml-4 hover:opacity-80 transition-opacity"
                  >
                    <Bot className="h-8 w-8 text-indigo-500" />
                    <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                      AutoSmart NL
                    </span>
                  </button>
                  <div className="ml-8 flex-1 max-w-2xl">
                    <SearchBar />
                  </div>
                </div>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
              className="fixed inset-0 left-64 z-40 bg-black bg-opacity-50 transition-opacity"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-45 w-64 bg-white dark:bg-gray-800 shadow-xl overflow-hidden flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={navigateToDashboard}
                  className="flex items-center hover:opacity-80 transition-opacity"
                >
                  <Bot className="h-8 w-8 text-indigo-500" />
                  <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                    AutoSmart NL
                  </span>
                </button>
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* User Profile Section */}
              <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <User className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {currentUser?.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Navigation with Custom Scrollbar */}
              <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto custom-scrollbar">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.title}
                      whileHover={{ scale: 1.02, x: 5 }}
                      onClick={() => {
                        navigate(item.path);
                        if (window.innerWidth < 1024) {
                          setIsSidebarOpen(false);
                        }
                      }}
                      onMouseEnter={(e) => handleMenuItemHover(e, item.id)}
                      onMouseLeave={() => setActivePreview(null)}
                      className="w-full px-4 py-3 flex items-center space-x-4 text-left rounded-lg group transition-all duration-200 metallic-effect"
                    >
                      <div className="flex-shrink-0">
                        <Icon className="h-6 w-6 text-indigo-500 group-hover:text-indigo-600 transition-colors duration-200" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-500 transition-colors duration-200" />
                    </motion.button>
                  );
                })}
              </nav>

              {/* Bottom Actions */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4">
                <button
                  onClick={() => navigate('/dashboard/settings')}
                  className="w-full flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-200 metallic-effect"
                >
                  <Settings className="h-5 w-5 mr-3" />
                  Paramètres
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-2 text-sm font-medium text-red-600 rounded-lg transition-all duration-200 metallic-effect"
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  Déconnexion
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Preview Overlay */}
      <SidebarPreview
        activePreview={activePreview}
        position={previewPosition}
      />

      {/* Main Content */}
      <main className={`pt-16 min-h-screen transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}