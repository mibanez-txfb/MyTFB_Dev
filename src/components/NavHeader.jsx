import React from "react";
import { Header } from "react-native-elements";
import { inject, observer } from "mobx-react";
import {DrawerActions } from '@react-navigation/native';
import * as RootNavigation from "../state/RootNavigation";

const NavHeader = class NavHeader extends React.Component {
    constructor(props) {
        super(props);


        console.log(this);
    }

    render(){

        return(
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' }, onPress: () => DrawerActions.openDrawer(), }}
                centerComponent={{ text: 'MyTFB', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff', onPress: () => RootNavigation.navigate("Home"), }}
                />
        );
    };

}

export default inject('userStateStore')(observer(NavHeader));