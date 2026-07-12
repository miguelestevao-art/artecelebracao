import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/lib/firebase";
import { LoginCredentials } from "../types/auth.types";

export async function signIn({
  email,
  password,
}: LoginCredentials) {
  return signInWithEmailAndPassword(auth, email, password);
}
