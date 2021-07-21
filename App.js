import * as React from 'react';
import { Provider } from 'mobx-react';
import StackNavigator from './src/components/StackNavigator';
import UserStateStore from './src/state/userStore';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/* The starting point of the application! We create a 
*   'store' that holds our user's data */
export default function App() {
    return (
        <SafeAreaProvider>
        <Provider
        userStateStore={UserStateStore}
        >
            <StackNavigator>
            </StackNavigator>
            
        </Provider>
        </SafeAreaProvider>
  );
}