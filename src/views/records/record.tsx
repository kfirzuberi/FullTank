
import React from "react";

import { Container, Content, Card, Icon, Text, Thumbnail, Left, Body, CardItem, Button, Item, Badge } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IRecord } from "../../redux/interface";
import { Image } from 'react-native';
import StationImage from "../../components/stationImage";
import { SvgXml } from "react-native-svg";
import CarSvg from '../../assets/images/car.svg';
import DateSvg from '../../assets/images/date.svg';
import KmSvg from '../../assets/images/km.svg';
import LiterSvg from '../../assets/images/liter.svg';
import PriceSvg from '../../assets/images/price.svg';
import StationSvg from '../../assets/images/station.svg';
const moment = require('moment');

const RecordView = (props: any) => {
    const navigation = useNavigation();
    const route = useRoute();

    const recordData: IRecord = route.params.props;

    const imageURL = "https://d32ogoqmya1dw8.cloudfront.net/images/sp/library/google_earth/google_maps_hello_world.jpg";
    return (
        <Container>
            <Content padder>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <StationImage thumbnail station={recordData.gasStation} width="50" height="50" />
                            <Body>
                                <Text> {recordData.gasStation}</Text>
                                <Text note>{moment(recordData.timestamp).format('MMMM Do YYYY, h:mm a')}</Text>
                            </Body>
                        </Left>
                    </CardItem>

                    <CardItem>

                        <Body>
                            <Image source={{ uri: imageURL }} style={{ height: 200, width: '100%', flex: 1 }} />

                        </Body>
                    </CardItem>
                    <CardItem>

                        <Body style={{ flexDirection: "row", justifyContent: 'space-evenly'}}>
                            <Badge warning style={{ flexDirection: "row", alignItems: 'center', flex: 0 }}>
                                <SvgXml width="20" height="20" xml={LiterSvg} />
                                <Text>{recordData.liters} Liter</Text>
                            </Badge>
                            <Badge success style={{ flexDirection: "row", alignItems: 'center', flex: 0 }}>
                                <SvgXml width="20" height="20" xml={PriceSvg} />
                                <Text>{recordData.price} ₪</Text>
                            </Badge>
                            <Badge info style={{ flexDirection: "row", alignItems: 'center', flex: 0 }}>
                                <SvgXml width="20" height="20" xml={CarSvg} />
                                <Text>{recordData.carId} ₪</Text>
                            </Badge>
                        </Body>

                    </CardItem>


                    <CardItem>

                        <Left>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                            <SvgXml width="20" height="20" xml={KmSvg} />
    <Text>{recordData.km} KM</Text>
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