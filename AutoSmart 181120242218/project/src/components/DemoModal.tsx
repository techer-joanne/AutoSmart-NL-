import React, { useState, useEffect } from 'react';
import { X, Bot, FileSpreadsheet, Camera, Mail } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const demoCategories = [
  {
    id: 'analytics',
    icon: FileSpreadsheet,
    name: 'Analyse de Données',
    description: 'Automatisation des rapports et analyses',
  },
  {
    id: 'vision',
    icon: Camera,
    name: 'Vision par Ordinateur',
    description: 'Analyse d\'images et reconnaissance',
  },
  {
    id: 'email',
    icon: Mail,
    name: 'Automatisation Email',
    description: 'Traitement et réponses automatiques',
  },
];

const demoExamples = {
  analytics: [
    {
      input: "Analyser les ventes du dernier trimestre",
      processing: "Analyse des données en cours...",
      response: [
        "✓ Rapport d'analyse généré :",
        "• Croissance des ventes : +23%",
        "• Meilleur produit : Suite Analytics Pro",
        "• Opportunité : +45% de demande sur le segment PME"
      ]
    },
    {
      input: "Générer un rapport hebdomadaire",
      processing: "Création du rapport...",
      response: [
        "✓ Rapport programmé :",
        "• Envoi automatique chaque lundi à 9h",
        "• Format : PDF et Excel",
        "• Destinataires : équipe commerciale"
      ]
    }
  ],
  vision: [
    {
      input: "Analyser les images de surveillance du parking",
      processing: "Analyse des flux vidéo en cours...",
      response: [
        "✓ Rapport de surveillance :",
        "• 12 places de parking disponibles",
        "• Détection d'un véhicule mal garé zone B",
        "• Taux d'occupation moyen : 78%",
        "",
        "Actions automatiques :",
        "• Notification envoyée à la sécurité",
        "• Mise à jour du panneau d'affichage"
      ]
    },
    {
      input: "Vérifier la qualité des produits sur la ligne de production",
      processing: "Inspection visuelle en cours...",
      response: [
        "✓ Contrôle qualité terminé :",
        "• 98.5% des produits conformes",
        "• 3 défauts mineurs détectés",
        "• Type de défaut : rayure superficielle",
        "",
        "Actions correctives :",
        "• Alerte envoyée au superviseur",
        "• Ajustement automatique des paramètres"
      ]
    }
  ],
  email: [
    {
      input: "Traiter les emails de support depuis Excel",
      processing: "Import et analyse des emails...",
      response: [
        "✓ Traitement terminé (156 emails) :",
        "• 65% - Questions fréquentes → Réponses auto",
        "• 25% - Problèmes techniques → Tickets créés",
        "• 10% - Cas complexes → Escalade support N2",
        "",
        "Actions réalisées :",
        "• Réponses automatiques envoyées",
        "• Base de connaissances mise à jour",
        "• Rapport de tendances généré"
      ]
    },
    {
      input: "Remplir automatiquement les formulaires RH",
      processing: "Extraction des données...",
      response: [
        "✓ Automatisation RH complétée :",
        "• 45 fiches employés traitées",
        "• Contrats générés automatiquement",
        "• Documents classés par département",
        "",
        "Résultats :",
        "• Temps gagné : 12 heures",
        "• Taux d'erreur : 0%",
        "• Conformité RGPD : 100%"
      ]
    }
  ]
};

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [category, setCategory] = useState('analytics');
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setStep(0);
      setCurrentText('');
      return;
    }

    const typeText = async () => {
      setIsTyping(true);
      const currentStep = demoExamples[category as keyof typeof demoExamples][step];
      
      // Type input
      for (let i = 0; i <= currentStep.input.length; i++) {
        setCurrentText(currentStep.input.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show processing
      setCurrentText(prev => prev + '\n\n' + currentStep.processing);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show response
      setCurrentText(prev => prev + '\n\n' + currentStep.response.join('\n'));
      setIsTyping(false);
    };

    typeText();
  }, [isOpen, step, category]);

  if (!isOpen) return null;

  const currentExamples = demoExamples[category as keyof typeof demoExamples];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg max-w-3xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex items-center mb-6">
          <Bot className="h-8 w-8 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold text-white">Démo Interactive</h2>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {demoCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  if (!isTyping) {
                    setCategory(cat.id);
                    setStep(0);
                  }
                }}
                disabled={isTyping}
                className={`p-4 rounded-lg text-left transition-all ${
                  category === cat.id
                    ? 'bg-indigo-600 ring-2 ring-indigo-400'
                    : 'bg-gray-700 hover:bg-gray-600'
                } ${isTyping ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Icon className="h-6 w-6 mb-2 text-indigo-400" />
                <h3 className="font-semibold text-white mb-1">{cat.name}</h3>
                <p className="text-sm text-gray-300">{cat.description}</p>
              </button>
            );
          })}
        </div>

        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm mb-6">
          <div className="text-gray-300 whitespace-pre-line min-h-[300px]">
            {currentText || "Sélectionnez une catégorie pour commencer la démo..."}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setStep(prev => Math.max(0, prev - 1))}
            disabled={step === 0 || isTyping}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Exemple précédent
          </button>
          <button
            onClick={() => setStep(prev => Math.min(currentExamples.length - 1, prev + 1))}
            disabled={step === currentExamples.length - 1 || isTyping}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Exemple suivant
          </button>
        </div>
      </div>
    </div>
  );
}