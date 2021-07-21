import React, { useContext } from "react";
import { Text, View } from 'react-native';
import {Header} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoggedOutNavigator from './LoggedOutNavigator';
import LoggedInNavigator from './LoggedInNavigator';
import {AuthProvider, AuthContext} from '../components/AuthProvider';
import { inject, observer } from "mobx-react";
import {navigationRef} from "../state/RootNavigation";

// Constants
const Stack = createStackNavigator();

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
                    <Stack.Navigator initialRouteName="Home" headerMode="none" logout={this.logout}>
                        {this.props.userStateStore.isLoggedIn ? 
                        (
                            <>
                            <Stack.Screen name="LoggedIn" component={LoggedInNavigator} />
                            </>
                        ) : 
                        (
                            <>
                            <Stack.Screen name='LoggedOut' component={LoggedOutNavigator} />
                            </>
                        )
                        }
                    </Stack.Navigator>
                    
                </NavigationContainer>
            </AuthProvider>
        );
    };
}

export default inject('userStateStore')(observer(StackNavigator));