import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Directrice Technique chez TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "AutoSmart NL a révolutionné notre façon de traiter les données. Ce qui prenait des jours se fait maintenant en minutes.",
  },
  {
    name: "Michel Dubois",
    role: "Chef de Produit chez InnovateCorp",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "L'interface en langage naturel est incroyablement intuitive. Notre équipe était opérationnelle en quelques minutes.",
  },
  {
    name: "Émilie Laurent",
    role: "Directrice des Opérations chez GlobalTech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "Le retour sur investissement avec AutoSmart NL est incroyable. Ce n'est pas juste de l'automatisation - c'est de l'automatisation intelligente.",
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-400">Témoignages</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Approuvé par les leaders de l'industrie
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl ring-1 ring-white/10">
                <div className="flex items-center gap-x-4 mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg font-semibold leading-8 text-white">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <img className="h-12 w-12 rounded-full bg-gray-800" src={testimonial.image} alt="" />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm leading-6 text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}