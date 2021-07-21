import * as React from 'react';
import {Linking, KeyboardAvoidingView, TouchableWithoutFeedback, Text, View, StyleSheet, Button, Image, TextInput} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { inject, observer } from "mobx-react";

// Constants
const width_proportion = '80%';
const height_proportion = '40%';
const Tab = createBottomTabNavigator();

// Default Exported Component
const HomeScreen = class HomeScreen extends React.Component{
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);

        this.state = {
            hi:'hi',
        }
        console.log(this.props);
    }

    logout(){
        this.props.userStateStore.logout();
    }

    render(){
        return (
            
            <View style={styles.screen}>
                <View styles={styles.container} >
                    <View >
                        <Image
                            style={styles.logo}
                            source={require('../assets/MyTFB.png')}
                        />
                    </View>
                    <View>
                        <Text> Hello User :D {this.props.userStateStore.email} </Text>    
                        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <View style={styles.loginScreenContainer}>
                                    
                                    <Button
                                    buttonStyle={styles.loginButton}
                                    onPress={() => this.logout()}
                                    title="Logout"
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </KeyboardAvoidingView>
                    </View> 
                </View>
            </View>
        );
    };
}

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
  containerView: {
    flex: 1,
},
loginScreenContainer: {
    flex: 1,
},
logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
},
loginFormView: {
    flex: 1
},
loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
    
},
loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
},
});

export default inject('userStateStore')(observer(HomeScreen));