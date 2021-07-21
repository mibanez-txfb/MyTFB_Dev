import React from "react";
import {Header} from 'react-native-elements';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen';
import { inject, observer } from "mobx-react";
import {navigate, openDrawer} from "../state/RootNavigation";
import { ImageBackground, StyleSheet, View} from "react-native";
import { Ionicons } from '@expo/vector-icons';

// Constants
const CustomDrawerContentComponent = (props) => (
    <DrawerContentScrollView {...props}>
            <View style={{height: 200}}>
                <ImageBackground
                    style={styles.backgroundImage}
                    source={require('../assets/DrawerBackground.jpg')}    
                />
            </View>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
)
const Drawer = createDrawerNavigator();

// Default Exported Component
const LoggedInNavigator = class LoggedInNavigator extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
        return (
            <>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' }, onPress: () => openDrawer(), }}
                centerComponent={{ text: 'MyTFB', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff', onPress: () => navigate("Welcome"), }}
            />
            <Drawer.Navigator initialRouteName="Welcome" headerMode="none"
                drawerStyle={{
                    backgroundColor: "green",
                    alignItems: "center",
                  }}
                drawerContent={props => <CustomDrawerContentComponent {...props} />}
            >
                <Drawer.Screen name="Welcome" component={HomeScreen} />
                <Drawer.Screen name="AGFUND" component={HomeScreen} />
                <Drawer.Screen name="TFB Store" component={HomeScreen} />
                <Drawer.Screen name="Settings" component={HomeScreen} 
                    options={{
                        title: 'Settings',
                        drawerIcon: ({focused, size}) => (
                           <Ionicons
                              name="settings-outline"
                              size={size}
                           />
                        ),
                     }}
                />
            </Drawer.Navigator>
          </>
        );
    };

}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
    }
});

export default inject('userStateStore')(observer(LoggedInNavigator));