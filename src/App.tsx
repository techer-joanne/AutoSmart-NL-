import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import MarketingPage from './pages/MarketingPage';
import AnalyticsPage from './pages/AnalyticsPage';
import CommercePage from './pages/CommercePage';
import InsightsPage from './pages/InsightsPage';
import PrivacyPage from './pages/PrivacyPage';
import DashboardPage from './pages/DashboardPage';
import AnalyticsToolPage from './pages/AnalyticsToolPage';
import VisionToolPage from './pages/VisionToolPage';
import EmailToolPage from './pages/EmailToolPage';
import AddToolsPage from './pages/AddToolsPage';
import WorkflowPage from './pages/WorkflowPage';
import SecurityPage from './pages/SecurityPage';
import SettingsPage from './pages/SettingsPage';
import PublicLayout from './components/PublicLayout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            {/* Routes publiques avec PublicLayout */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/marketing" element={<MarketingPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/commerce" element={<CommercePage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Route>

            {/* Routes protégées */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/analytics" element={
              <ProtectedRoute>
                <AnalyticsToolPage />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/vision" element={
              <ProtectedRoute>
                <VisionToolPage />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/email" element={
              <ProtectedRoute>
                <EmailToolPage />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/tools" element={
              <ProtectedRoute>
                <AddToolsPage />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/workflows" element={
              <ProtectedRoute>
                <WorkflowPage />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/security" element={
              <ProtectedRoute>
                <SecurityPage />
              </ProtectedRoute>
            } />
            <Route path="/dashboard/settings" element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            } />

            {/* Redirection par défaut */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;