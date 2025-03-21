import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Calendar, Book, Bell, Settings, LogOut } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { EventsManager } from './EventsManager';
import { SermonsManager } from './SermonsManager';
import { AnnouncementsManager } from './AnnouncementsManager';

export function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md min-h-screen p-4">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800">Administration</h2>
          </div>
          <nav className="space-y-2">
            <Link
              to="/admin/events"
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded-lg"
            >
              <Calendar className="h-5 w-5" />
              <span>Événements</span>
            </Link>
            <Link
              to="/admin/sermons"
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded-lg"
            >
              <Book className="h-5 w-5" />
              <span>Prédications</span>
            </Link>
            <Link
              to="/admin/announcements"
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded-lg"
            >
              <Bell className="h-5 w-5" />
              <span>Annonces</span>
            </Link>
            <Link
              to="/admin/settings"
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded-lg"
            >
              <Settings className="h-5 w-5" />
              <span>Paramètres</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded-lg w-full"
            >
              <LogOut className="h-5 w-5" />
              <span>Déconnexion</span>
            </button>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8">
          <Routes>
            <Route path="events" element={<EventsManager />} />
            <Route path="sermons" element={<SermonsManager />} />
            <Route path="announcements" element={<AnnouncementsManager />} />
            <Route
              index
              element={
                <div className="text-center">
                  <h1 className="text-2xl font-bold mb-4">Bienvenue dans l'administration</h1>
                  <p className="text-gray-600">
                    Sélectionnez une section dans le menu pour commencer.
                  </p>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}