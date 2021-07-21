import React, { useContext } from "react";
import { Text, View } from 'react-native';
import {Header} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import StartUpScreen from '../screens/StartUpScreen';
import {AuthProvider, AuthContext} from '../components/AuthProvider';
import { inject, observer } from "mobx-react";
import * as RootNavigation from "../state/RootNavigation";

// Constants
const Drawer = createDrawerNavigator();

// Default Exported Component
const DrawerNavigator = class DrawerNavigator extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
        return (
            
            <Drawer.Navigator initialRouteName="Home" headerMode="none" logout={this.logout}>
                {this.props.userStateStore.isLoggedIn ? 
                    (
                        <>
                        <Drawer.Screen name="Home" component={HomeScreen} />
                        <Drawer.Screen name="Profile" component={HomeScreen} />
                        <Drawer.Screen name="News" component={HomeScreen} />
                        </>
                    ) : 
                    (
                        <>
                        <Drawer.Screen name="StartUpScreen" component={StartUpScreen} />
                        </>
                    )
                }
            </Drawer.Navigator>
          
        );
    };


    


}

export default inject('userStateStore')(observer(DrawerNavigator));