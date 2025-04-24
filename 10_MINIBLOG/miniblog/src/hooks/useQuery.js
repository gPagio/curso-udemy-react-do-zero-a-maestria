// Hooks
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export const useQuery = () => {
  {
    /**
     * useLocationUsado para recuperar o parâmetro search usado
     * no redirecionamento feito pelo useNavigate no componente
     * Home.jsx
     */
  }
  const { search } = useLocation();

  {
    /**
     * Retorna um array de parâmetros de busca.
     * Assim como o useEffect, o useMimo só executa
     * quando algum item muda no seu arrya de
     * dependências, no nosso caso o search
     */
  }
  return useMemo(() => new URLSearchParams(search), [search]);
};
