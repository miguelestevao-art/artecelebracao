"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "../hooks/useLogin";
import { useAuth } from "@/providers/AuthProvider";

export default function LoginForm() {const {
  email,
  password,
  loading,
  error,
  setEmail,
  setPassword,
  handleLogin,
} = useLogin();

const { user } = useAuth();

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="space-y-2 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-xl font-bold text-primary-foreground">
          AC
        </div>

        <CardTitle className="text-2xl">
          ArteCelebração Hub
        </CardTitle>

        <CardDescription>
          Organizando pessoas para servir com excelência.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className="space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          handleLogin();
        }}
        >
          {user && (
  <div className="mt-6 rounded-md bg-muted p-4">
    <p className="text-sm font-medium">
      Usuário autenticado
    </p>

    <p className="text-sm text-muted-foreground">
      {user.email}
    </p>
  </div>
)}
          <div className="space-y-2">
            <Label htmlFor="email">
              E-mail
            </Label>

            <Input
              id="email"
              type="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">
              Senha
            </Label>

            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
             />
              </div>
          {
              error && (
            <p className="text-sm text-destructive">
            {error}
          </p>
          )
        }
          <Button
          type="submit"
          className="w-full"
          disabled={loading}
          >
          {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
