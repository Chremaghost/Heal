import React from 'react';
import { Calendar, Book, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Bienvenue à l'Église Évangélique
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Un lieu de foi, d'espérance et d'amour
            </p>
            <Link
              to="/about"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Calendar className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nos Événements</h3>
              <p className="text-gray-600 mb-4">
                Découvrez nos prochains événements et rejoignez notre communauté.
              </p>
              <Link
                to="/events"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Voir le calendrier →
              </Link>
            </div>

            <div className="text-center p-6">
              <Book className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prédications</h3>
              <p className="text-gray-600 mb-4">
                Écoutez nos messages inspirants et enrichissants.
              </p>
              <Link
                to="/sermons"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Écouter les messages →
              </Link>
            </div>

            <div className="text-center p-6">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Notre Communauté</h3>
              <p className="text-gray-600 mb-4">
                Rejoignez notre famille et grandissez dans la foi.
              </p>
              <Link
                to="/about"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Nous rejoindre →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Horaires des Cultes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Culte du Dimanche</h3>
              <p className="text-gray-600">10h00 - 12h00</p>
              <p className="text-gray-600 mt-2">
                Louange, prédication et école du dimanche pour les enfants
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Étude Biblique</h3>
              <p className="text-gray-600">Mercredi 19h00 - 20h30</p>
              <p className="text-gray-600 mt-2">
                Approfondissement de la Parole et partage fraternel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}