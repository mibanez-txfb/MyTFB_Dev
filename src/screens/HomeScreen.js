import * as React from 'react';
import {Text, View, StyleSheet, Button, Image} from 'react-native';
import {useAuthorization} from '../components/AuthProvider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LoginScreen, SignInScreen } from '../screens';

const width_proportion = '80%';
const height_proportion = '40%';
const Tab = createBottomTabNavigator();

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <View styles={styles.container} >
        <View >
          <Image
            style={styles.logo}
            source={require('../assets/MyTFB.png')}
          />
        </View>
        <Tab.Navigator style={styles.detailsContainer}>
          <Tab.Screen name="Log In" component={LoginScreen} />
          <Tab.Screen name="Create Account" component={LoginScreen} />
        </Tab.Navigator>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  container: {
    width: width_proportion,
    height: height_proportion,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#white',
  },
  detailsContainer: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  button: {
    margin: 24,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  text: {
    textAlign: 'center',
  },
  logo: {
    width: 750,
    height: 300,
  },
});

export default HomeScreen;