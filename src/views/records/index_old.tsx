/*
import React, { Component } from "react";
import ListView from "./listView";
import MapView from "./mapView";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {
    Button,
    Text,
    Icon,
    Item,
    Footer,
    FooterTab,
    Label
} from "native-base";

const Tab = createBottomTabNavigator();


const ChatTabBar = ({ state, descriptors, navigation }) => {
    return (
        <Footer>
            <FooterTab>
                <Button

                    vertical
                    active={state.index === 0}
                    onPress={() => navigation.navigate("ListView")}
                >
                    <Icon name="list" />
                   
                </Button>
                <Button
                    vertical
                    active={state.index === 1}
                    onPress={() => navigation.navigate("MapView")}
                >
                    <Icon name="map" />
                    <Text>Jade</Text>
                </Button>
            </FooterTab>
        </Footer>);
};


const MainScreenNavigator = (props: any) => {
    return (
        <Tab.Navigator tabBar={props => <ChatTabBar {...props} />}>
            <Tab.Screen name="ListView" component={ListView} />
            <Tab.Screen name="MapView" component={MapView} />

        </Tab.Navigator>
    );
}

export default MainScreenNavigator;

*/