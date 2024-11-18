import React from 'react';
import { Bot, Github, Twitter, Linkedin, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const navigation = {
  solutions: [
    { name: 'Marketing', href: '/marketing' },
    { name: 'Analyses', href: '/analytics' },
    { name: 'Commerce', href: '/commerce' },
    { name: 'Insights', href: '/insights' },
  ],
  support: [
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'État API', href: '#' },
  ],
  company: [
    { name: 'À propos', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Emplois', href: '#' },
    { name: 'Presse', href: '#' },
    { name: 'Partenaires', href: '#' },
  ],
  legal: [
    { name: 'Politique de confidentialité', href: '/privacy' },
    { name: 'Mentions légales', href: '#' },
    { name: 'Gestion des cookies', href: '#', onClick: () => {
      localStorage.removeItem('cookie-consent');
      window.location.reload();
    }},
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
      description: 'Suivez-nous sur Twitter'
    },
    {
      name: 'GitHub',
      href: '#',
      icon: Github,
      description: 'Consultez notre code sur GitHub'
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
      description: 'Rejoignez-nous sur LinkedIn'
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center">
              <Bot className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">AutoSmart NL</span>
            </div>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
              Rendre l'automatisation accessible grâce au langage naturel. Notre plateforme combine l'IA avancée avec une interface intuitive pour transformer vos processus métier.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-500 hover:text-gray-400"
                  title={item.description}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Entreprise</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Légal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      {item.onClick ? (
                        <button
                          onClick={item.onClick}
                          className="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          to={item.href}
                          className="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} AutoSmart NL. Tous droits réservés. Pionnier de l'automatisation intelligente en langage naturel.
            </p>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-indigo-500" />
              <p className="text-xs leading-5 text-indigo-600 dark:text-indigo-400">
                Certifié RGPD
              </p>
            </div>
            <p className="text-xs leading-5 text-indigo-600 dark:text-indigo-400">
              Créé par Joanne Techer • I.A.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}