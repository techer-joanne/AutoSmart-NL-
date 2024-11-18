import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowRight, Loader2, AlertCircle, CheckCircle } from 'lucide-react';

export default function VerificationPage() {
  const { currentUser, sendVerificationEmail } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(0);
  const [canResend, setCanResend] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
      return;
    }

    const checkVerification = async () => {
      if (currentUser) {
        await currentUser.reload();
        if (currentUser.emailVerified) {
          navigate('/dashboard');
        }
      }
    };

    const interval = setInterval(checkVerification, 3000);
    return () => clearInterval(interval);
  }, [currentUser, navigate]);

  useEffect(() => {
    if (!canResend && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCanResend(true);
    }
  }, [countdown, canResend]);

  const handleResendEmail = async () => {
    if (!canResend) return;

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      await sendVerificationEmail();
      setSuccess("L'email de vérification a été renvoyé avec succès !");
      setCanResend(false);
      setCountdown(30); // Réduit à 30 secondes pour éviter les problèmes de rate limiting
    } catch (err: any) {
      if (err.code === 'auth/too-many-requests') {
        setError("Trop de tentatives. Veuillez patienter quelques minutes avant de réessayer.");
        setCanResend(false);
        setCountdown(60);
      } else {
        setError(err.message || "Une erreur s'est produite lors de l'envoi de l'email.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      <div className="max-w-md mx-auto px-4">
        <div className="text-center">
          <Mail className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            Vérifiez votre email
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Un email de vérification a été envoyé à{' '}
            <span className="font-medium text-indigo-600 dark:text-indigo-400">
              {currentUser?.email}
            </span>
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Vérifiez également vos spams si vous ne trouvez pas l'email.
          </p>
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg flex items-center gap-2">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        {success && (
          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg flex items-center gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm">{success}</p>
          </div>
        )}

        <div className="mt-8 space-y-4">
          <button
            onClick={handleResendEmail}
            disabled={loading || !canResend}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-4 w-4 mr-2" />
                Envoi en cours...
              </>
            ) : !canResend ? (
              `Réessayer dans ${countdown}s`
            ) : (
              "Renvoyer l'email de vérification"
            )}
          </button>

          <div className="text-sm text-center text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            Une fois votre email vérifié, vous serez automatiquement redirigé vers votre tableau de bord
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}