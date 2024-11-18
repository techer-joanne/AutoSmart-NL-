import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileSpreadsheet, BarChart, TrendingUp, Database, BarChart2, Brain } from 'lucide-react';

interface Feature {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: FileSpreadsheet,
    title: "Import de Données",
    description: "Importez vos données depuis Excel, CSV ou bases de données",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 2,
    icon: BarChart,
    title: "Visualisation",
    description: "Créez des graphiques et tableaux de bord interactifs",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Prédictions",
    description: "Anticipez les tendances avec notre IA prédictive",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    icon: Database,
    title: "Stockage Sécurisé",
    description: "Vos données sont chiffrées et sécurisées",
    color: "from-pink-500 to-red-500"
  },
  {
    id: 5,
    icon: BarChart2,
    title: "Rapports Automatiques",
    description: "Générez des rapports détaillés automatiquement",
    color: "from-red-500 to-orange-500"
  },
  {
    id: 6,
    icon: Brain,
    title: "IA Avancée",
    description: "Analyses intelligentes et apprentissage continu",
    color: "from-orange-500 to-yellow-500"
  }
];

export default function FeatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const visibleFeatures = [...features.slice(currentIndex), ...features.slice(0, currentIndex)]
    .slice(0, itemsToShow);

  return (
    <div className="w-full overflow-hidden py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="flex justify-center">
            <AnimatePresence mode="popLayout">
              {visibleFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ 
                    opacity: 0,
                    x: direction >= 0 ? 100 : -100,
                    scale: 0.8
                  }}
                  animate={{ 
                    opacity: 1,
                    x: 0,
                    scale: 1
                  }}
                  exit={{ 
                    opacity: 0,
                    x: direction >= 0 ? -100 : 100,
                    scale: 0.8
                  }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="w-full max-w-[280px] sm:max-w-[320px] mx-2 sm:mx-3 lg:mx-4"
                >
                  <div className="relative h-full bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-10`} />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-400" />
                        <span className="text-xs font-medium text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded-full">
                          {`0${index + 1}`}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300">
                        {feature.description}
                      </p>
                      <div className="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-white/5 to-transparent rounded-tl-full transform translate-x-4 sm:translate-x-6 translate-y-4 sm:translate-y-6" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-indigo-500 w-4' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}