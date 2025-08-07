import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export const useQuery = () => {
  // Extrai da query string (tudo o que fica depois do "?")
  const { search } = useLocation();

  // A partir desse hook consigo acessar qualquer parametro 
  // depois do "q" na query como se fossem propriededes de 
  // um objeto
  return useMemo(() => new URLSearchParams(search), [search]);
};
