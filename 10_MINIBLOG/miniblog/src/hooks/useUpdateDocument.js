// Hooks
import { useState, useEffect, useReducer } from "react";

// Firebase
import { db } from "../firebase/config";
import { updateDoc, doc } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};

const updateReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "UPDATED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useUpdateDocument = (docCollection) => {
  const [response, dispatch] = useReducer(updateReducer, initialState);

  // Prevenção contra estouro de memória
  const [cancelled, setCancelled] = useState(false);
  const checkCanceledBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const updateDocument = async (id, data) => {
    checkCanceledBeforeDispatch({ type: "LOADING" });

    try {
      const docRef = doc(db, docCollection, id);
      const updatedDocument = await updateDoc(docRef, data);

      checkCanceledBeforeDispatch({
        type: "UPDATED_DOC",
        payload: updatedDocument,
      });
    } catch (error) {
      checkCanceledBeforeDispatch({ type: "ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { updateDocument, response };
};
