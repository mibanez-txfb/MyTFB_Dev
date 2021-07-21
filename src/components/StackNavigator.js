import React, { useContext } from "react";
import { Text, View } from 'react-native';
import {Header} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen';
import StartUpScreen from '../screens/StartUpScreen';
import {AuthProvider, AuthContext} from '../components/AuthProvider';
import { inject, observer } from "mobx-react";
import {navigationRef, navigate, openDrawer} from "../state/RootNavigation";

// Constants
const Drawer = createDrawerNavigator();

const HeaderNav = () => {
    return (
        <>
        <Header
            leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' }, onPress: () => openDrawer(), }}
            centerComponent={{ text: 'MyTFB', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff', onPress: () => navigate("StartUpScreen"), }}
        />
        <StartUpScreen/>
        </>
    );
};

// Default Exported Component
const StackNavigator = class StackNavigator extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isLoading:true,
            isLoggedIn: false,
        }
        console.log(this.props.navigation);
    }

    componentDidMount = async() => {
        // Check async storage for token
        let value = await this.props.userStateStore.getToken();
        if(value){
            this.props.userStateStore.login(value);
        }
        this.setState({
            isLoading:false,
            isLoggedIn: this.props.userStateStore.isLoggedIn,
        });
    };
        
    render(){

        return (
            <AuthProvider>
                <NavigationContainer ref={navigationRef}>
                    <Drawer.Navigator initialRouteName="Home" headerMode="none" logout={this.logout}>
                        {this.props.userStateStore.isLoggedIn ? 
                        (
                            <>
                            <Drawer.Screen name="Home" component={HomeScreen} />
                            <Drawer.Screen name="Home" component={HomeScreen} />
                            <Drawer.Screen name="Profile" component={HomeScreen} />
                            <Drawer.Screen name="News" component={HomeScreen} />
                            </>
                        ) : 
                        (
                            <>
                            <Drawer.Screen name='hi' component={HeaderNav} />
                            <Drawer.Screen name="StartUpScreen" component={StartUpScreen} />
                            </>
                        )
                        }
                    </Drawer.Navigator>
                    
                </NavigationContainer>
            </AuthProvider>
        );
    };
}

export default inject('userStateStore')(observer(StackNavigator));