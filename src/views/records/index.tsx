import React from "react";
import { Button, Body, Header, Left, Right, Icon, Title } from "native-base";
import { createStackNavigator } from '@react-navigation/stack';
import RecordView from "./record";
import EditRecordView from "./editRecord";
import ListView from "./list";

const Stack = createStackNavigator();

const RecordScreen = (props: any) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={ListView} options={{
                header: ({ navigation }) =>
                    (<Header>
                        <Left>
                            <Button transparent onPress={() => navigation.openDrawer()}>
                                <Icon name="menu" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Records view</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={() => navigation.navigate("EditRecordView", { isNew: true })}>
                                <Icon name="add" />
                            </Button>
                        </Right>

                    </Header>)
            }} />
            <Stack.Screen name="RecordView" component={RecordView} />
            <Stack.Screen name="EditRecordView" component={EditRecordView} />
        </Stack.Navigator>
    )
}

export default RecordScreen;