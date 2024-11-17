import React from 'react';
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Politique de Confidentialité
          </h1>

          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Protection de vos Données
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Conformément au Règlement Général sur la Protection des Données (RGPD), nous nous engageons à protéger vos données personnelles. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Données Collectées
                </h2>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Informations de compte (nom, email)</li>
                <li>Données d'utilisation du service</li>
                <li>Préférences de configuration</li>
                <li>Logs techniques pour la sécurité</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Sécurité des Données
                </h2>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Chiffrement de bout en bout</li>
                <li>Stockage sécurisé en Europe</li>
                <li>Accès restreint et contrôlé</li>
                <li>Audits de sécurité réguliers</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Vos Droits
                </h2>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact DPO
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pour toute question concernant vos données personnelles, contactez notre Délégué à la Protection des Données :
              </p>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>Email : dpo@autosmart.fr</p>
                <p>Téléphone : +33 (0)1 23 45 67 89</p>
                <p>Adresse : 123 Avenue de la Protection des Données, 75000 Paris</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}