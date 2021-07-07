import { useContext } from "react";
import {AuthContext} from '../context/AuthContext'

export function useAuth() {
  const context = useContext(AuthContext)

  if(!context) {
    throw new Error("useAuth can only be used within a AuthProvider")
  }
  return context;
}