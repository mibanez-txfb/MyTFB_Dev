import React from "react";
import {Header} from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer'
import StartUpScreen from '../screens/StartUpScreen';
import { inject, observer } from "mobx-react";
import {navigate, openDrawer, goToOutside} from "../state/RootNavigation";
import { Ionicons } from '@expo/vector-icons';
import {Linking, Text} from 'react-native';

// Constants
const Drawer = createDrawerNavigator();


// Default Exported Component
const LoggedOutNavigator = class LoggedOutNavigator extends React.Component{
    constructor(props) {
        super(props);
        console.log(this);
    }


    render(){
        return (
            <>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' }, onPress: () => openDrawer(), }}
                centerComponent={{ text: 'MyTFB', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff', onPress: () => navigate("Login"), }}
            />
            <Drawer.Navigator initialRouteName="Login" headerMode="none"
                drawerStyle={{
                    backgroundColor: "#fafafa",
                    alignItems: "center",
                  }}
            >
                <Drawer.Screen name="Login" component={StartUpScreen}
                    options={{
                        title: 'Home',
                        drawerIcon: ({focused, size}) => (
                           <Ionicons
                              name="md-home"
                              size={size}
                           />
                        ),
                     }}
                />
                <Drawer.Screen name="TexasFarmBureau.org" component={StartUpScreen}
                    options={{
                        onPress: () => Linking.openURL('https://texasfarmbureau.org/'),
                        title: 'TexasFarmBureau.org',
                        drawerIcon: ({focused, size}) => (
                           <Ionicons
                              name="earth-outline"
                              size={size}
                           />
                        ),
                     }}
                />
                <Drawer.Screen name="TFB Insurance" component={StartUpScreen} 
                    options={{
                        title: 'TFB Insurance',
                        drawerIcon: ({focused, size}) => (
                           <Ionicons
                              name="reader-outline"
                              size={size}
                              onPress={() => Linking.openURL('https://utilities.txfb.com/membership')}
                           />
                        ),
                     }}
                />
                <Drawer.Screen name="Renew" component={StartUpScreen} 
                    options={{
                        title: 'Renew',
                        drawerIcon: ({focused, size}) => (
                           <Ionicons
                              name="sync-outline"
                              size={size}
                              onPress={() => Linking.openURL('https://utilities.txfb.com/membership')}
                           />
                        ),
                     }}
                />
                <Drawer.Screen name="Join TFB" component={StartUpScreen} 
                    options={{
                        title: 'Join TFB',
                        drawerIcon: ({focused, size}) => (
                           <Ionicons
                              name="exit-outline"
                              size={size}
                           />
                        ),
                        title: () => (
                            <Text onPress={() => goToOutside('https://utilities.txfb.com/membership')  }> Hi </Text>
                          ),
                     }}
                />
            </Drawer.Navigator>
          </>
        );
    };

}

export default inject('userStateStore')(observer(LoggedOutNavigator));