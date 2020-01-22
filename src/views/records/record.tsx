
import React from "react";

import { Container, Content, Card, Icon, Text, Thumbnail, Left, Body, CardItem, Button } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IRecord } from "src/interface";
import { Image } from 'react-native';

const RecordView = (props: any) => {
    const navigation = useNavigation();
    const route = useRoute();

    const recordData: IRecord = route.params.props;
    return (
        <Container>
            <Content padder>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: 'https://www.office-masters.com/wp-content/uploads/2017/10/sonol-logo.png' }} />
                            <Body>
                                <Text>NativeBase {recordData.gasStation}</Text>
                                <Text note>April 15, 2016</Text>
                            </Body>
                        </Left>
                    </CardItem>

                    <CardItem>
                        <Body>
                            <Image source={{ uri: 'https://www.office-masters.com/wp-content/uploads/2017/10/sonol-logo.png' }} style={{ height: 200, width: 200, flex: 1 }} />
                            <Text>dddsf dfbd ds</Text>
                        </Body>
                    </CardItem>



                    <CardItem>
                        <Left>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-github" />
                                <Text>1,926 stars</Text>
                            </Button>
                        </Left>
                    </CardItem>

                </Card>
                <Button
                    full
                    rounded
                    primary
                    style={{ marginTop: 10 }}
                    onPress={() => navigation.navigate("EditRecordView", recordData)}
                >
                    <Text>Edit</Text>
                </Button>
            </Content>
        </Container>
    );
}

export default RecordView;