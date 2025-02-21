import { useAuthStore } from "@global_stores/auth/useAuthStore";
import { CONTACTS } from "@pages/Contacts/config";
import { Navigate } from "react-router-dom";

export default function LoginProtector({ children }: Props) {
  const token = useAuthStore((state) => state.token);

  if (token) return <Navigate to={CONTACTS.to} replace />;

  return children;
}

type Props = {
  children: React.ReactNode;
};
