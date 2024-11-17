import React from 'react';
import { Bot, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import DemoModal from './DemoModal';
import AuthModal from './AuthModal';

export default function Hero() {
  const [showDemoModal, setShowDemoModal] = React.useState(false);
  const [showRegisterModal, setShowRegisterModal] = React.useState(false);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-hero-pattern bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/95" />
        <div className="relative pt-24 pb-32 sm:pt-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <motion.div 
                className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="flex items-center justify-center lg:justify-start"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="relative inline-flex overflow-hidden rounded px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-indigo-500/20">
                    <span className="absolute inset-0 bg-indigo-500/10" />
                    <span className="relative">En version Bêta</span>
                  </span>
                </motion.div>
                <motion.h1 
                  className="mt-6 bg-gradient-to-r from-white via-white to-indigo-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Automatisez vos tâches en langage naturel
                </motion.h1>
                <motion.p 
                  className="mt-6 text-lg leading-8 text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Transformez des tâches complexes en simples conversations. AutoSmart NL utilise des agents IA avancés pour automatiser vos flux de travail via des commandes en langage naturel.
                </motion.p>
                <motion.div 
                  className="mt-8 flex gap-x-4 sm:justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={() => setShowRegisterModal(true)}
                    className="group relative inline-flex items-center overflow-hidden rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-500"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500 transition-transform group-hover:translate-x-full" />
                    <span className="relative flex items-center">
                      Commencer
                      <Zap className="ml-2 h-4 w-4" />
                    </span>
                  </button>
                  <button
                    onClick={() => setShowDemoModal(true)}
                    className="group relative inline-flex items-center overflow-hidden rounded-md bg-gray-800 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-700"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 transition-transform group-hover:translate-x-full" />
                    <span className="relative flex items-center">
                      Démo en direct
                      <Sparkles className="ml-2 h-4 w-4" />
                    </span>
                  </button>
                </motion.div>
              </motion.div>
              <motion.div 
                className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur transition group-hover:opacity-100" />
                  <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 p-8 shadow-2xl backdrop-blur-xl ring-1 ring-white/10">
                    <div className="flex items-center space-x-4 mb-6">
                      <Bot className="h-8 w-8 text-indigo-500" />
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                      </div>
                      <span className="text-sm text-gray-400">Agent IA Prêt</span>
                    </div>
                    <div className="font-mono text-sm">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="space-y-4"
                      >
                        <p className="text-gray-300">&gt; Demander à AutoSmart d'analyser mes données de vente</p>
                        <p className="text-indigo-400">Traitement des données en cours...</p>
                        <p className="text-green-400">✓ 3 insights clés trouvés :</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-400">
                          <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                          >
                            Revenus augmentés de 27% au T4
                          </motion.li>
                          <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.1 }}
                          >
                            Meilleur produit : Smart Analytics Pro
                          </motion.li>
                          <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 }}
                          >
                            Taux de rétention client : 94%
                          </motion.li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <DemoModal
        isOpen={showDemoModal}
        onClose={() => setShowDemoModal(false)}
      />
      
      <AuthModal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        type="register"
      />
    </>
  );
}