import React from "react";
import { StatusBar } from "react-native";
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right
} from "native-base";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = (props: any) => {
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
                    <Title>HomeScreen</Title>
                </Body>
                <Right />
            </Header>
            <Content padder>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>Here we will show some stats</Text>
                        </Body>
                    </CardItem>
                </Card>
                <Button
                    full
                    rounded
                    dark
                    style={{ marginTop: 10 }}
                    onPress={() => navigation.navigate("Records")}
                >
                    <Text>View all records</Text>
                </Button>
                <Button
                    full
                    rounded
                    primary
                    style={{ marginTop: 10 }}
                    onPress={() => navigation.navigate("Profile")}
                >
                    <Text>Log new record</Text>
                </Button>
            </Content>
        </Container>
    );
}

export default HomeScreen;