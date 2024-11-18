import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Qu'est-ce qu'AutoSmart NL ?",
    answer: "AutoSmart NL est une plateforme d'automatisation de pointe qui utilise le traitement du langage naturel pour vous aider à automatiser des tâches complexes. Décrivez simplement ce que vous voulez accomplir en français courant, et nos agents IA s'en occupent.",
  },
  {
    question: "Comment fonctionne la tarification ?",
    answer: "Nous proposons trois formules principales : Démarrage (29€/mois), Pro (99€/mois) et Entreprise (tarification personnalisée). Chaque formule inclut différentes fonctionnalités et limites d'utilisation. Tous les forfaits sont accompagnés d'un essai gratuit de 14 jours.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Oui, nous prenons la sécurité très au sérieux. Nous utilisons un chiffrement de niveau bancaire, respectons le RGPD et autres réglementations sur la confidentialité, et fournissons des fonctionnalités de sécurité de niveau entreprise. Vos données sont chiffrées en transit et au repos.",
  },
  {
    question: "Puis-je intégrer AutoSmart NL à mes outils existants ?",
    answer: "Oui, AutoSmart NL offre un accès API étendu et des intégrations avec les outils d'entreprise populaires. Nos forfaits Pro et Entreprise incluent des options d'intégration personnalisées.",
  },
  {
    question: "Quel type de support proposez-vous ?",
    answer: "Nous fournissons un support par email pour tous les forfaits, avec un support prioritaire pour les utilisateurs Pro et un support dédié 24/7 pour les clients Entreprise. Notre documentation est complète et régulièrement mise à jour.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div id="faq" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Questions fréquemment posées
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="pt-6">
                <dt>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-start justify-between text-left text-white"
                  >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      {openIndex === index ? (
                        <Minus className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Plus className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}