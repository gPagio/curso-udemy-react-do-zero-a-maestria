// Hooks
import { useState, useEffect } from "react";

// Firebase Firestore
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    const loadDocument = async () => {
      if (cancelled) return;
      setLoading(true);

      try {
        const docReference = doc(db, docCollection, id);
        const docSnapshot = await getDoc(docReference);

        setDocument(docSnapshot.data());
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };

    loadDocument();
  }, [docCollection, id, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { document, loading, error };
};
