import React from "react";
import { Text, View, StyleSheet, Linking } from "react-native";
import { inject, observer } from "mobx-react";
import { Ionicons } from "@expo/vector-icons";

const NavHeader = class NavHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={styles.headerFooterStyle}>
                <View >
                    <Text style={styles.textStyle}> Copyright 2021 <Text style={styles.textStyle} onPress={()=>{Linking.openURL('https://texasfarmbureau.org/')}}> Texas Farm Bureau </Text> | All Rights Reserved </Text>
                </View>
                <View style={{width:'30%'}}>
                    <Text style={styles.textStyle}> 
                        <Ionicons style={styles.iconStyle}
                            name="logo-facebook"
                            size='large'
                            onPress={()=>{Linking.openURL('https://www.facebook.com/TexasFarmBureau')}}
                        /> 
                        <Ionicons style={styles.iconStyle}
                            name="logo-twitter"
                            size='large'
                            onPress={()=>{Linking.openURL('https://twitter.com/texasfarmbureau')}}
                        /> 
                        <Ionicons style={styles.iconStyle}
                            name="logo-youtube"
                            size='large'
                            onPress={()=>{Linking.openURL('https://www.youtube.com/user/texasfarmbureau/videos')}}
                        /> 
                        <Ionicons style={styles.iconStyle}
                            name="logo-instagram"
                            size='large'
                            onPress={()=>{Linking.openURL('https://www.instagram.com/texasfarmbureau/')}}
                        /> 
                        <Ionicons style={styles.iconStyle}
                            name="logo-vimeo"
                            size='large'
                            onPress={()=>{Linking.openURL('https://vimeo.com/channels/texasfarmbureau')}}
                        /> 
                        <Ionicons style={styles.iconStyle}
                            name="logo-pinterest"
                            size='large'
                            onPress={()=>{Linking.openURL('https://www.pinterest.com/texasfarmbureau/')}}
                        /> 
                    </Text>
                </View>
            </View>
        );
    };

}

const styles = StyleSheet.create({
    headerFooterStyle: {
        flexDirection:'row',
      width: '100%',
      height: 30,
      backgroundColor: '#606070',
      justifyContent:'space-around',
    },
    textStyle: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 13,
      padding: 7,
    },
    iconStyle:{
        color: '#fff',
        padding: '2%',
    },
  });

export default inject('userStateStore')(observer(NavHeader));