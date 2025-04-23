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
  const [loading, setLoading] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {

    const loadData = async () => {
      if (cancelled) return;
    }
  }, [docCollection, search, uid, cancelled]);
}