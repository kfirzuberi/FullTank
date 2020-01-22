import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { CommonActions , useNavigation} from '@react-navigation/native';

import {
    Button,
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
    Input,
    InputGroup,
    Item,
    Tab,
    Tabs,
    Footer,
    FooterTab,
    Label
} from "native-base";

const MapView = (props: any) => {
    const navigation = useNavigation();
    return (
        <Container>
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => navigation.openDrawer()}
                    >
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>Jade Chat</Title>
                </Body>
                <Right />
            </Header>
            <Content padder>
                <Item floatingLabel style={{ marginTop: 20 }}>
                    <Label>Jade Chat</Label>
                    <Input />
                </Item>
                <Button
                    rounded
                    danger
                    style={{ marginTop: 20, alignSelf: "center" }}
                    onPress={() => {
                        navigation.dispatch(
                            CommonActions.navigate({
                              name: 'Profile',
                              params: { name: "jade" }
                            })
                          );
                    }}
                >
                    <Text>Goto Jade Profile</Text>
                </Button>
            </Content>
        </Container>
    );
}

export default MapView;