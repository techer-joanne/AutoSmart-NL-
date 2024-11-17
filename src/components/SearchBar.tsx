import React, { useState } from 'react';
import { Search, Command } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative max-w-md w-full"
    >
      <div
        className={`relative flex items-center transition-all duration-300 ${
          isFocused ? 'transform scale-[1.02]' : ''
        }`}
      >
        <div className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 rounded-lg blur opacity-50 transition-opacity duration-300" />
          <div className="relative flex items-center">
            <Search className={`absolute left-3 h-5 w-5 transition-colors duration-200 ${
              isFocused ? 'text-indigo-500' : 'text-gray-400'
            }`} />
            <input
              type="text"
              placeholder="Rechercher..."
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm pl-10 pr-12 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white metallic-search"
            />
            <div className="absolute right-3 flex items-center space-x-2">
              <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600">
                <Command className="h-3 w-3 mr-1" />
                K
              </kbd>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}