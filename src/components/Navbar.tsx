import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Church, Menu, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Church className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Église Évangélique</span>
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">Accueil</Link>
            <Link to="/events" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">Événements</Link>
            <Link to="/sermons" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">Prédications</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">À propos</Link>
            {user ? (
              <>
                <Link to="/admin" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">Admin</Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">Connexion</Link>
            )}
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">Accueil</Link>
            <Link to="/events" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">Événements</Link>
            <Link to="/sermons" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">Prédications</Link>
            <Link to="/about" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">À propos</Link>
            {user ? (
              <>
                <Link to="/admin" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">Admin</Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <Link to="/login" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md">Connexion</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}