import React from "react";
import {Header} from 'react-native-elements';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer'
import StartUpScreen from '../screens/StartUpScreen';
import { inject, observer } from "mobx-react";
import {openDrawer} from "../state/RootNavigation";
import { Ionicons } from '@expo/vector-icons';
import {Linking, StyleSheet} from 'react-native';
import JoinMyTFBScreen  from '../screens/JoinMyTFBScreen';
import Footer from './Footer';

// Constants
const CustomDrawerContentComponent = (props) => (
    
    <DrawerContentScrollView> 
        <DrawerItem    
            label='Login'
            onPress={() => props.navigation.navigate("Login")}
            activeBackgroundColor='gray'
            icon={ ({focused, size}) => <Ionicons
                   name="md-home"
                   size={size}/>
            }
        />
        <DrawerItem    
            label='TexasFarmBureau.org'
            onPress={() => Linking.openURL('https://texasfarmbureau.org/')}
            activeBackgroundColor='gray'
            icon={ ({focused, size}) => <Ionicons
                   name="earth-outline"
                   size={size}/>
            }
        />
        <DrawerItem    
            label='TFB Insurance'
            onPress={() => Linking.openURL('https://www.txfb-ins.com/')}
            activeBackgroundColor='gray'
            icon={ ({focused, size}) => <Ionicons
                   name="reader-outline"
                   size={size}/>
            }
        />
        <DrawerItem    
            label='Renew'
            onPress={() => Linking.openURL('https://utilities.txfb.com/membership')}
            activeBackgroundColor='gray'
            icon={ ({focused, size}) => <Ionicons
                   name="sync-outline"
                   size={size}/>
            }
        />
        <DrawerItem    
            label='Join MyTFB'
            onPress={() => props.navigation.navigate("JoinMyTFB")}
            activeBackgroundColor='gray'
            icon={ ({focused, size}) => <Ionicons
                   name="exit-outline"
                   size={size}/>
            }
        />
    </DrawerContentScrollView>
)
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
            />
            <Drawer.Navigator initialRouteName="JoinMyTFB" headerMode="none"
                drawerStyle={{
                    backgroundColor: "#fafafa",
                    alignItems: "center",
                    paddingTop: 15,
                  }}
                  drawerContent={props => <CustomDrawerContentComponent {...props} />}
            >
                <Drawer.Screen name="Login" component={StartUpScreen}/>
                <Drawer.Screen name="JoinMyTFB" component={JoinMyTFBScreen}/>
            </Drawer.Navigator>
            {/* Footer */}
            <Footer> </Footer>
          </>
        );
    };
}

const styles = StyleSheet.create({

});

export default inject('userStateStore')(observer(LoggedOutNavigator));