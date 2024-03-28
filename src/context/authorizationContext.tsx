"use client";
import React, { createContext, useContext, useState } from "react";
import {
  AuthorizationContextInterface,
  UserInterface,
} from "@/typescript/interfaces";

const AuthContext = createContext<AuthorizationContextInterface | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserInterface | null>(null);
  const [email, setEmail] = useState<string>("");

  const login = (userInformation: UserInterface) => {
    setIsLoggedIn(true);
    setUser(userInformation);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const registerEmail = (email: string) => {
    setEmail(email);
  };

  const registerUser = (registerUserInformation: UserInterface) => {
    setIsLoggedIn(true);
    setUser(registerUserInformation);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        user,
        registerEmail,
        email,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
