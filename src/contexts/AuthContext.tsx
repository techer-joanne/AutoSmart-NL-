import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Auth,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../config/firebase';

interface AuthContextType {
  currentUser: User | null;
  signup: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const signup = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result;
    } catch (err: any) {
      console.error('Signup Error:', err);
      if (err.code === 'auth/email-already-in-use') {
        setError('Cette adresse email est déjà utilisée. Veuillez vous connecter.');
      } else {
        setError(getErrorMessage(err));
      }
      throw err;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (err: any) {
      console.error('Login Error:', err);
      setError(getErrorMessage(err));
      throw err;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err: any) {
      console.error('Logout Error:', err);
      setError(getErrorMessage(err));
      throw err;
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
    error,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

function getErrorMessage(error: any): string {
  switch (error.code) {
    case 'auth/invalid-email':
      return "L'adresse email n'est pas valide";
    case 'auth/user-disabled':
      return 'Ce compte utilisateur a été désactivé';
    case 'auth/user-not-found':
      return 'Aucun utilisateur trouvé avec cette adresse email';
    case 'auth/wrong-password':
      return 'Le mot de passe est incorrect';
    case 'auth/email-already-in-use':
      return 'Cette adresse email est déjà utilisée. Veuillez vous connecter.';
    case 'auth/weak-password':
      return 'Le mot de passe doit contenir au moins 6 caractères';
    case 'auth/operation-not-allowed':
      return "L'authentification par email n'est pas activée";
    case 'auth/network-request-failed':
      return 'Erreur de connexion. Vérifiez votre connexion internet.';
    case 'auth/too-many-requests':
      return 'Trop de tentatives. Veuillez réessayer plus tard.';
    default:
      return error.message || 'Une erreur est survenue';
  }
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}