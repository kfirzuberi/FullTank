
import React, { Component } from 'react';
import { Container, Header, Content, Text , Root} from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Button } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import Profile from "./profile/index";
import Home from "./home/index";
import SideBar from "./sideBar/sideBar";


const Main = (props:any)=>{
    return (   
         <Home />
        )
}

export default Main;