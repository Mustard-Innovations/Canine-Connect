'use client'
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { Auth } from 'firebase/auth';

const useAuth = () => {
  const auth = getAuth()
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Subscribe to the Firebase Auth state and set the user object
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return user;
};

export default useAuth;
