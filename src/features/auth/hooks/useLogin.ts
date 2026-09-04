"use client";

import { useState } from "react";

import { signIn } from "../services/auth.service";

import { useRouter } from "next/navigation";

export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const router = useRouter();

  async function handleLogin()  {
    console.log("Iniciando login...");
    try {
      setLoading(true);
      setError("");

      await signIn({
        email,
        password,
      });

      router.push("/dashboard");

      console.log("Login realizado com sucesso!");

    } catch (error) {
      console.error(error);
      setError("E-mail ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  }

  return {
    email,
    password,
    loading,
    error,
    setEmail,
    setPassword,
    handleLogin,
  };
}
