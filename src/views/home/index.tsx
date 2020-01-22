import React, { Component } from "react";
import HomeScreen from "./home";
import MainScreenNavigator from "../records/index";
import ProfileScreen from "../profile/index";
import SideBar from "../sideBar/sideBar";
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationNativeContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const HomeScreenRouter = (props: any) => {
  return (
    <NavigationNativeContainer>
      <Drawer.Navigator initialRouteName="Home"  drawerContent={props => <SideBar {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Records" component={MainScreenNavigator} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationNativeContainer>
  )
}
export default HomeScreenRouter;