import { useEffect, useRef, useDebugValue, use } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useDebugValue("------ CUSTOM HOOK E USE DEBUG VALUE ------");
  useDebugValue("O número anterior é: " + value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
