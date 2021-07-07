import { AuthProvider } from "../context/AuthContext";
import { ToastProvider } from "../context/ToastContext";

const AppProvider = ({children}) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  )
}

export default AppProvider;