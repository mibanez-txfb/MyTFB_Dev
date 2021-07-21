import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await AsyncStorage.setItem('user', JSON.stringify(email));
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await AsyncStorage.setItem('user', JSON.stringify(email));
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await AsyncStorage.removeItem('user');
          } catch (e) {
            console.error(e);
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
