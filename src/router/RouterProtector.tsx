import { useAuth } from "@global_states/auth/useAuth";
import { LOGIN } from "@pages/Login/config";
import { Navigate } from "react-router-dom";

export default function RouterProtector({ children }: Props) {
  const token = useAuth((state) => state.token);

  if (!token) return <Navigate to={LOGIN.to} replace />;

  return children;
}

type Props = {
  children: React.ReactNode;
};
