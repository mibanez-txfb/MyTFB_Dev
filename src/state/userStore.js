import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { observable, makeObservable, action, runInAction } from 'mobx';

class UserStateStore{
    email = null;
    id = null;
    isLoggedIn = false;

    constructor(){
        makeObservable(this, {
            email: observable,
            id: observable,
            isLoggedIn: observable,
            init: action,
            setEmail: action,
            setID: action,
            setLoggedIn: action,
            login: action,
            getToken: action,
            logout: action,
        });
    }

    init = async() => {
        let value = await AsyncStorage.getItem('token');
        console.log(value);
        if(value != null){
            this.setLoggedIn(true);
            this.setEmail(value);
            this.setID(10);
        }

    }

    setEmail(email){
        this.email = email;
    };

    setID(id){
        this.id = id;
    };

    setLoggedIn(val){
        this.isLoggedIn = val;
    }

    login = async(email) => {
        // Auth here, for now just save to async
        await AsyncStorage.setItem('token', email);
        runInAction(() =>{
            this.setLoggedIn(true);
            this.setEmail(email);
            this.setID(10);
            console.log(AsyncStorage.getItem('token'));
        });
    };

    logout = async() => {
        // Remove token and user
        let value = await AsyncStorage.removeItem('token');
        console.log(await AsyncStorage.getItem('token'));
        runInAction(() =>{
            this.setLoggedIn(false);
            this.setEmail('');
            this.setID('');
        });
        
    };

    getToken = async() => {
        let value = await AsyncStorage.getItem('token');
        runInAction(() =>{
            return value;
        });
    };
}

let uss = new UserStateStore();
uss.init();

export default uss;
