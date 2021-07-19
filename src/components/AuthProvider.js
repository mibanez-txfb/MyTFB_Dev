import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = React.createContext({
  status: 'idle',
  authToken: null,
  signIn: () => {},
  signOut: () => {}
});

export const useAuthorization = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('Error');
  }
  return context;
};

export const AuthProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, {
    status: 'idle',
    authToken: null,
  });


  const actions = ({
      signIn: async token => {
        dispatch({type: 'SIGN_IN', token});
        await AsyncStorage.setItem('token', token);
      },
      signOut: async () => {
        dispatch({type: 'SIGN_OUT'});
        await AsyncStorage.removeItem('token');
      },
    });

  return (
    <AuthContext.Provider value={{...state, ...actions}}>
      {props.children}
    </AuthContext.Provider>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_OUT':
      return {
        ...state,
        status: 'signOut',
        authToken: null,
      };
    case 'SIGN_IN':
      return {
        ...state,
        status: 'signIn',
        authToken: action.token,
      };
  }
};