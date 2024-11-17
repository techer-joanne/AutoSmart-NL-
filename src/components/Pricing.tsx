import React from 'react';
import { Check } from 'lucide-react';
import AuthModal from './AuthModal';

const tiers = [
  {
    name: "Démarrage",
    id: "tier-starter",
    priceMonthly: "29€",
    description: "Parfait pour les individus et les petites équipes qui débutent avec l'automatisation.",
    features: [
      "5 agents IA",
      "1 000 tâches par mois",
      "Analyses de base",
      "Support par email",
      "Accès API",
      "Garantie de disponibilité 99,9%"
    ],
    featured: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    priceMonthly: "99€",
    description: "Idéal pour les entreprises en croissance nécessitant des capacités d'automatisation avancées.",
    features: [
      "Agents IA illimités",
      "10 000 tâches par mois",
      "Analyses avancées",
      "Support prioritaire",
      "Flux personnalisés",
      "Collaboration d'équipe",
      "Sécurité avancée",
      "Accès API"
    ],
    featured: true,
  },
  {
    name: "Entreprise",
    id: "tier-enterprise",
    priceMonthly: "Sur mesure",
    description: "Support dédié et infrastructure pour les grandes organisations.",
    features: [
      "Tout en illimité",
      "Modèles IA personnalisés",
      "Support premium 24/7",
      "Intégrations sur mesure",
      "Garantie SLA",
      "Gestionnaire de compte dédié",
      "Déploiement sur site",
      "Politiques de sécurité personnalisées"
    ],
    featured: false,
  },
];

export default function Pricing() {
  const [showRegisterModal, setShowRegisterModal] = React.useState(false);
  const [selectedTier, setSelectedTier] = React.useState<string | null>(null);

  const handlePricingClick = (tierId: string) => {
    setSelectedTier(tierId);
    setShowRegisterModal(true);
  };

  return (
    <>
      <div id="pricing" className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Tarifs</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Choisissez le forfait parfait pour vos besoins
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
            Commencez avec nos options de tarification flexibles. Tous les forfaits incluent un essai gratuit de 14 jours.
          </p>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 ring-1 ${
                  tier.featured
                    ? 'bg-gray-800/60 ring-indigo-500'
                    : 'bg-gray-800/40 ring-gray-700'
                }`}
              >
                <h3 className="text-lg font-semibold leading-8 text-white">
                  {tier.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">{tier.priceMonthly}</span>
                  {tier.priceMonthly !== "Sur mesure" && (
                    <span className="text-sm font-semibold leading-6 text-gray-300">/mois</span>
                  )}
                </p>
                <button
                  onClick={() => handlePricingClick(tier.id)}
                  className={`mt-6 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    tier.featured
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {tier.featured ? "Commencer maintenant" : "En savoir plus"}
                </button>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={showRegisterModal}
        onClose={() => {
          setShowRegisterModal(false);
          setSelectedTier(null);
        }}
        type="register"
      />
    </>
  );
}