import { useAuthStore } from "@global_stores/auth/useAuthStore";
import { LOGIN } from "@pages/Login/config";
import { Navigate } from "react-router-dom";

export default function RouterProtector({ children }: Props) {
  const token = useAuthStore((state) => state.token);

  if (!token) return <Navigate to={LOGIN.to} replace />;

  return children;
}

type Props = {
  children: React.ReactNode;
};
