import { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar.jsx";
import { Divisas } from "../../components/Divisas/Divisas.jsx";
import { User } from "../../components/User/User.jsx";
import { ProfileMenu } from "../../components/UserMenu/UserMenu.jsx";
import { LoadingSpinner } from "../../components/LoadingSpinner.jsx";
import "../../styles/LoadingSpinner.css"; // Ruta a tu archivo CSS de LoadingSpinner
import { Content } from "../../components/dashboard/Content.jsx";

export const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular una carga rápida
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Cambiar a 1000ms (1 segundo) para simular una carga rápida

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="dashboard-container">
      <Navbar />
      <Content/>
    </div>
  );
};
