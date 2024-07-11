import { useState, useEffect } from "react";
import { getAccountByToken } from "../../services/index.js";

export const useGetAccountByUser = () => {
  const [accountData, setAccountData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        console.log("Iniciando solicitud de cuenta...");
        const response = await getAccountByToken();
        console.log("Respuesta recibida:", response);
        if (response && response.account) {
          setAccountData(response.account);
        } else {
          setError("No se encontró la cuenta en la respuesta");
        }
      } catch (err) {
        console.error("Error al obtener la cuenta:", err);
        setError(err.message || 'Error al obtener la cuenta');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccount();
  }, []);

  return { accountData, isLoading, error };
};