import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

// Hooks
import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // Cleanup - prevenção contra estouro de memória
  // Acontece quando ainda existem funções pendentes de execução
  // e o componente que as chamou já foi desmontado
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  // Register - Criar usuário
  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, { displayName: data.displayName });

      setLoading(false);
      return user;
    } catch (error) {
      console.log("Erro ao fazer criar usuário...");
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;
      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa ter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado.";
      } else {
        systemErrorMessage = "Ocorreu um erro, tente mais tarde.";
      }
      setError(systemErrorMessage);
      setLoading(false);
    }
  };

  // Login - Entrar
  const login = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      console.log("Erro ao fazer login...");
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;
      if (error.message.includes("invalid-credential")) {
        systemErrorMessage = "Email ou senha estão incorretos.";
      } else {
        systemErrorMessage = "Ocorreu um erro, tente mais tarde.";
      }

      setError(systemErrorMessage);
      setLoading(false);
    }
  };

  // Logout - Sair
  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { auth, createUser, login, logout, error, loading };
};
