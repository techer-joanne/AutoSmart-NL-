import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bot, ChevronRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import SearchBar from './SearchBar';
import SidebarPreview from './SidebarPreview';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  {
    id: 'analytics',
    title: 'Analyse de Données',
    description: 'Automatisation des rapports',
    path: '/dashboard/analytics',
    icon: Bot
  },
  {
    id: 'vision',
    title: 'Vision par Ordinateur',
    description: 'Analyse d\'images',
    path: '/dashboard/vision',
    icon: Bot
  },
  {
    id: 'email',
    title: 'Automatisation Email',
    description: 'Traitement des emails',
    path: '/dashboard/email',
    icon: Bot
  },
  {
    id: 'tools',
    title: 'Ajouter mes outils',
    description: 'Gérer les intégrations',
    path: '/dashboard/tools',
    icon: Bot
  },
  {
    id: 'workflows',
    title: 'Flux de travail',
    description: 'Gérer les automatisations',
    path: '/dashboard/workflows',
    icon: Bot
  },
  {
    id: 'security',
    title: 'Sécurité',
    description: 'Paramètres de sécurité',
    path: '/dashboard/security',
    icon: Bot
  },
  {
    id: 'settings',
    title: 'Paramètres',
    description: 'Configuration du compte',
    path: '/dashboard/settings',
    icon: Bot
  }
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePreview, setActivePreview] = useState<string | null>(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const [isPinned, setIsPinned] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemHover = (
    event: React.MouseEvent<HTMLButtonElement>,
    itemId: string
  ) => {
    if (!isPinned || activePreview !== itemId) {
      const rect = event.currentTarget.getBoundingClientRect();
      setPreviewPosition({
        x: rect.right,
        y: rect.top
      });
      setActivePreview(itemId);
    }
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    itemId: string
  ) => {
    event.preventDefault();
    setIsPinned(!isPinned);
    if (!isPinned) {
      const rect = event.currentTarget.getBoundingClientRect();
      setPreviewPosition({
        x: rect.right,
        y: rect.top
      });
      setActivePreview(itemId);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (previewRef.current && !previewRef.current.contains(event.target as Node)) {
      if (!isPinned) {
        setActivePreview(null);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPinned]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation */}
      <AnimatePresence>
        {!isSidebarOpen && (
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                  <div className="ml-4">
                    <Bot className="h-8 w-8 text-indigo-500" />
                  </div>
                </div>
                <div className="flex-1 px-4 flex justify-center">
                  <SearchBar />
                </div>
                <div className="flex items-center">
                  {/* Add user menu here */}
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
              className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <Bot className="h-8 w-8 text-indigo-500" />
                  <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                    AutoSmart NL
                  </span>
                </div>
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto custom-scrollbar">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.title}
                      whileHover={{ scale: 1.02, x: 5 }}
                      onClick={(e) => {
                        handleMenuItemClick(e, item.id);
                        if (!isPinned || activePreview !== item.id) {
                          navigate(item.path);
                          if (window.innerWidth < 1024) {
                            setIsSidebarOpen(false);
                          }
                        }
                      }}
                      onMouseEnter={(e) => handleMenuItemHover(e, item.id)}
                      className={`w-full px-4 py-3 flex items-center space-x-4 text-left rounded-lg group transition-all duration-200 metallic-effect ${
                        activePreview === item.id && isPinned ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''
                      }`}
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

              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200"
                >
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
      <div className={`min-h-screen ${isSidebarOpen ? 'lg:pl-64' : ''}`}>
        <div className="pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-transparent">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}