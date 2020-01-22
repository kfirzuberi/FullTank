import React, { Component } from "react";
import Profile from "./profile";
import EditScreenOne from "./editOne";
import EditScreenTwo from "./editTwo";

import {
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Left,
    Right,
    Icon,
    Title,
    Button,
    H1
} from "native-base";

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProfileIndex = (prop: any) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{
                header: ({ navigation }) =>
                    (<Header>
                        <Left>
                            <Button transparent onPress={() => navigation.openDrawer()}>
                                <Icon name="menu" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Profile ddd</Title>
                        </Body>
                        <Right />
                    </Header>)
            }} />
            <Stack.Screen name="EditScreenOne" component={EditScreenOne} />
            <Stack.Screen name="EditScreenTwo" component={EditScreenTwo} />
        </Stack.Navigator>
    )
}

export default ProfileIndex;