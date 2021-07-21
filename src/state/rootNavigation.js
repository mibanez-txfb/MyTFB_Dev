import * as React from 'react';
import {Linking} from 'react-native';
import {DrawerActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
	navigationRef.current?.navigate(name, params);
}

export function goBack() {
	navigationRef.current?.goBack();
}

export function openDrawer() {
	navigationRef.current?.dispatch(DrawerActions.openDrawer());
}

export function goToOutside(url){
    Linking.openURL(url);
}