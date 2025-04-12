import { useState, useEffect } from "react";

// 4 - CUSTOM HOOK
export const useFetch = (url) => {
  const [data, setData] = useState([]);

  // 5 - REFATORANDO O POST
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    } else if(method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        }
      })

      setMethod(method);
      setItemId(data);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (error) {
        const msgCustomDefault = "Houve um erro ao carregar os dados.";
        console.log(msgCustomDefault, error);
        setError(msgCustomDefault);
      }

      setLoading(false);
    }
    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      let json = null;

      if (method === "POST") {
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        json = await res.json();
      } else if (method === "DELETE") {
        const deleteUrl = url + "/" + itemId;
        const res = await fetch(deleteUrl, config);
        json = await res.json();
      }
      setCallFetch(json);
    };

    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
};
