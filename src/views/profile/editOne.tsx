import React from "react";
import { AppRegistry, Alert } from "react-native";

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

const EditScreenOne = (props: any) => {
    return (
        <Container>
            <Content padder>
                <Card>
                    <CardItem>
                        <Icon active name="paper-plane" />
                        <Text>Edit Screen 1</Text>
                        <Right>
                            <Icon name="close" />
                        </Right>
                    </CardItem>
                </Card>
                <Button
                    full
                    rounded
                    primary
                    style={{ marginTop: 10 }}
                    onPress={() => props.navigation.navigate("EditScreenTwo")}
                >
                    <Text>Goto EditScreenTwo</Text>
                </Button>
            </Content>
        </Container>
    );
}

EditScreenOne.navigationOptions = ({ navigation }) => ({
    header: (
        <Header>
            <Left>
                <Button transparent onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
                <Title>EditScreenOne</Title>
            </Body>
            <Right />
        </Header>
    )
});


export default EditScreenOne;
