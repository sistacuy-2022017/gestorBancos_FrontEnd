import { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/navbar.jsx";
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
