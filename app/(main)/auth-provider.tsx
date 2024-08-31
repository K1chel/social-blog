"use client";

import { Session, User } from "lucia";
import React, { createContext, useContext } from "react";

interface AuthContext {
  user: User;
  session: Session;
}

const AuthContext = createContext<AuthContext | null>(null);

export default function AuthProvider({
  children,
  value,
}: React.PropsWithChildren<{ value: AuthContext }>) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useSession() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useSession must be used within a AuthProvider");
  }
  return context;
}
