import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';

type FirebaseUserType = User | null;

export const UserContext = React.createContext<FirebaseUserType>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<FirebaseUserType>(null);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
      }
    });
  }, [user]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
