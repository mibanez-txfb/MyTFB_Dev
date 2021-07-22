import React, { useCallback } from 'react';
import {Linking, KeyboardAvoidingView, TouchableWithoutFeedback, Text, View, StyleSheet, Button, Image, TextInput} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { inject, observer } from "mobx-react";

// Constants
const width_proportion = '80%';
const height_proportion = '40%';
const Tab = createBottomTabNavigator();
const privacyPolicyURL = 'https://texasfarmbureau.org/privacy-policy/'

// Default Exported Component
const StartUpScreen = class StartUpScreen extends React.Component{
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);

        this.state = {
            selectedIndex: 0,
            paramOne: "",
            paramTwo: "",

        }
    }

    login () {
        this.props.userStateStore.login(this.state.paramOne);
    };

    signUp() {
        console.log(this.state.paramOne);
    }

    handleOne = text => {
        this.setState({ paramOne: text });
    };

    handleTwo = text => {
        this.setState({ paramTwo: text });
    };
    

    handleIndexChange = index => {
        this.setState({
            ...this.state,
            selectedIndex: index,
            paramOne: null,
            paramTwo: null,
        });
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
                    <SegmentedControlTab
                        values             = { ["Log In", "Create Account"] }
                        selectedIndex      = { this.state.selectedIndex } 
                        onTabPress         = { this.handleIndexChange }
                        tabsContainerStyle = { styles.tabsContainerStyle }
                        tabStyle           = { styles.tabStyle }
                        tabTextStyle       = { styles.tabTextStyle }
                        activeTabStyle     = { styles.activeTabStyle }
                        activeTabTextStyle = { styles.activeTabTextStyle }
                        borderRadius       = {10}
                    />
                    {
                        this.state.selectedIndex === 0 ? (
                            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                    <View style={styles.loginScreenContainer}>
                                    <View style={styles.loginFormView}>
                                        <TextInput placeholder="Email Address" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={this.handleOne} />
                                        <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={this.handleTwo} secureTextEntry={true}/>
                                        <Button
                                        buttonStyle={styles.loginButton}
                                        onPress={() => this.login()}
                                        title="Login"
                                        />
                                    </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </KeyboardAvoidingView>
                         ) : (
                            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                    <View style={styles.loginScreenContainer}>
                                    <View style={styles.loginFormView}>
                                        <TextInput placeholder="Membership Number" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={this.handleOne}  />
                                        <TextInput placeholder="Zipcode" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={this.handleTwo} secureTextEntry={true}/>
                                        <Button
                                        buttonStyle={styles.loginButton}
                                        onPress={() => this.signUp()}
                                        title="Verify"
                                        />
                                    </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </KeyboardAvoidingView>
                         )
                    }
                    <Text style={styles.url} onPress={ ()=> Linking.openURL(privacyPolicyURL) } > Privacy Policy </Text>
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
    url: {
        color: 'gray',
        textAlign: 'center',

    }
});

export default inject('userStateStore')(observer(StartUpScreen));