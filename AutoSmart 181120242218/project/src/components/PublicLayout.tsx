import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

export default function PublicLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Outlet />
      {isHomePage && <Footer />}
      <CookieBanner />
    </div>
  );
}