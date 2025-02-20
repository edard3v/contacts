import { Outlet } from "react-router-dom";
import { useInitApp } from "./useInitApp";

export default function App() {
  const { loading } = useInitApp();

  if (loading) return null;

  return <Outlet />;
}
