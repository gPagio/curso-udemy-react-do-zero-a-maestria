// Hooks
import { useState, useEffect } from "react";

// Firebase Firestore
import { db } from "../firebase/config";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      if (cancelled) return;
      setLoading(true);

      const collectionRef = collection(db, docCollection);
      try {
        let q;

        if (search) {
          q = query(
            collectionRef,
            where("tagsArray", "array-contains", search),
            orderBy("createdAt", "desc")
          );
        } else if (uid) {
          q = query(
            collectionRef,
            where("uid", "==", uid),
            orderBy("createdAt", "desc")
          );
        } else {
          q = query(collectionRef, orderBy("createdAt", "desc"));
        }

        onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    };

    loadData();
  }, [docCollection, search, uid, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { documents, loading, error };
};
