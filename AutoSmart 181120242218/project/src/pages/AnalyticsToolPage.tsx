import React, { useState, useEffect } from 'react';
import { FileSpreadsheet, Send, Bot, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLayout from '../components/DashboardLayout';
import FeatureCarousel from '../components/FeatureCarousel';

export default function AnalyticsToolPage() {
  const [messages, setMessages] = useState<Array<{type: 'user' | 'assistant', content: string}>>([
    {
      type: 'assistant',
      content: 'Bonjour ! Je suis votre assistant IA pour l\'analyse de données. Comment puis-je vous aider aujourd\'hui ?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (messages.length > 1) {
      setTimeout(() => {
        setShowHeader(false);
      }, 500);
    }
  }, [messages.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setIsLoading(true);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: 'Je traite votre demande concernant l\'analyse de données. Je peux vous aider à importer, visualiser et analyser vos données. Que souhaitez-vous faire plus précisément ?'
      }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <DashboardLayout>
      <div className="py-4 sm:py-6 lg:py-8 relative min-h-[calc(100vh-4rem)]">
        <AnimatePresence mode="wait">
          {showHeader && (
            <motion.div
              initial={{ opacity: 1, height: 'auto' }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-4 sm:mb-6 lg:mb-8 px-4 sm:px-6 lg:px-8"
              >
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Analyse de Données</h1>
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">Automatisez vos rapports et analyses avec notre IA</p>
              </motion.div>

              <FeatureCarousel />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ height: '600px' }}
          animate={{ 
            height: showHeader ? '600px' : 'calc(100vh - 4rem)',
            marginTop: showHeader ? '2rem' : '0'
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="h-full backdrop-blur-xl bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-2xl overflow-hidden border border-white/10">
            <div className="h-full flex flex-col">
              {/* Messages Container */}
              <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6 custom-scrollbar">
                <AnimatePresence mode="popLayout">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-start space-x-2 sm:space-x-4 ${
                        message.type === 'user' ? 'justify-end' : ''
                      }`}
                    >
                      {message.type === 'assistant' && (
                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-0.5">
                          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                            <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-400" />
                          </div>
                        </div>
                      )}
                      <div
                        className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-3 sm:p-4 shadow-lg ${
                          message.type === 'user'
                            ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white ml-2 sm:ml-4'
                            : 'bg-gray-900/50 backdrop-blur-md text-white'
                        }`}
                      >
                        <p className="text-sm sm:text-base leading-relaxed">{message.content}</p>
                      </div>
                      {message.type === 'user' && (
                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 p-0.5">
                          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                            <FileSpreadsheet className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 p-0.5">
                      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                        <Loader className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-400 animate-spin" />
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Form */}
              <div className="p-4 sm:p-6 backdrop-blur-xl bg-gray-900/50">
                <form onSubmit={handleSubmit} className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Posez votre question..."
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 text-sm sm:text-base"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    <Send className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}