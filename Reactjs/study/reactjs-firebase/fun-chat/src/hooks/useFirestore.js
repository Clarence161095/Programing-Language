import React, { useState } from 'react';
import { collection, getFirestore } from "firebase/firestore";

const useFirestore = (collection_name, condition) => {
  const [documents, setDocuments] = useState([]);

  React.useEffect(() => {
    // let collectionRef = collection(collection_name).orderBy('createdAt');
    let collectionRef = collection(getFirestore(), "collection_name")
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        // reset documents data
        setDocuments([]);
        return;
      }

      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );
    }

    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setDocuments(documents);
    });

    return unsubscribe;
  }, [collection_name, condition]);

  return documents;
};

export default useFirestore;
