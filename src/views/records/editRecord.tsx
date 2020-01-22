import React, { useState } from "react";
import { Container, Content, Card, Icon, Text, Right, CardItem, Button, Item, Input, Thumbnail, Footer } from "native-base";
import { Image } from "react-native";
import { SvgXml } from 'react-native-svg';
import CarSvg from '../../assets/images/car.svg';
import DateSvg from '../../assets/images/date.svg';
import KmSvg from '../../assets/images/km.svg';
import LiterSvg from '../../assets/images/liter.svg';
import PriceSvg from '../../assets/images/price.svg';
import StationSvg from '../../assets/images/station.svg';
import { useNavigation, useRoute } from "@react-navigation/native";

import StationSelector from "../../components/stationSelector";
import { IRecord } from "src/interface";

const EditRecordView = (props: any) => {
    const route = useRoute();
    const record = route.params as IRecord;

    const [km, setKm] = useState((record.km || '').toString());
    const [price, setPrice] = useState((record.price || '').toString());
    const [liters, setLiters] = useState((record.liters || '').toString());
    const [station, setStation] = useState((record.gasStation || ''));

    return (
        <Container>
            <Content padder>
                <Card>
                    <CardItem>
                        <Item>
                            <SvgXml width="32" height="32" xml={CarSvg} />
                            <Input keyboardType={"numeric"} editable={false} placeholder='car id' />
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item>
                            <SvgXml width="32" height="32" xml={DateSvg} />
                            <Input placeholder='Date' />
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item>
                            <SvgXml width="32" height="32" xml={StationSvg} />
                            <StationSelector selected={station} updateSelected={setStation} />
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item>
                            <SvgXml width="32" height="32" xml={KmSvg} />
                            <Input keyboardType={"numeric"} placeholder='KM' onChangeText={setKm} value={km} />
                            <Right><Text>KM</Text></Right>
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item>
                            <SvgXml width="32" height="32" xml={LiterSvg} />
                            <Input keyboardType={"numeric"} placeholder='Liters' onChangeText={setLiters} value={liters} />
                            <Right><Text>Liter</Text></Right>
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item>
                            <SvgXml width="32" height="32" xml={PriceSvg} />
                            <Input keyboardType={"numeric"} placeholder='Price' onChangeText={setPrice} value={price} />
                            <Right><Text>NIS</Text></Right>
                        </Item>
                    </CardItem>
                </Card>
            </Content>
            <Footer>
                <Button
                    full
                    primary
                    style={{ marginTop: 10 }}
                    onPress={() => props.navigation.navigate("EditScreenTwo")}>
                    <Text>Save</Text>
                </Button>
            </Footer>
        </Container>
    );
}

export default EditRecordView;