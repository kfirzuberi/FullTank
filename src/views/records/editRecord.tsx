import React, { useState } from "react";
import { Container, Content, Card, Icon, Text, Right, CardItem, Button, Item, Input, Footer, DatePicker } from "native-base";
import { SvgXml } from 'react-native-svg';
import DateSvg from '../../assets/images/date.svg';
import KmSvg from '../../assets/images/km.svg';
import LiterSvg from '../../assets/images/liter.svg';
import PriceSvg from '../../assets/images/price.svg';
import StationSvg from '../../assets/images/station.svg';
import { useRoute } from "@react-navigation/native";

import StationSelector from "../../components/stationSelector";
import { IRecord } from "../../redux/interface";
import { useDispatch } from "react-redux";
import { addNewRecord, updateRecord } from "../../redux/disaptchers/records";

const EditRecordView = (props: any) => {
    const route = useRoute();
    const dispatch = useDispatch();
    const record = route.params as IRecord;
    const isNew = route.params.isNew;

    const [km, setKm] = useState((record.km || '').toString());
    const [price, setPrice] = useState((record.price || '').toString());
    const [liters, setLiters] = useState((record.liters || '').toString());
    const [station, setStation] = useState((record.gasStation || ''));
    const [timestamp, setTimestamp] = useState(record.timestamp || new Date(Date.now()));

    const addOrUpdate = async () => {
        const recordData: IRecord = {
            km: parseInt(km),
            liters: parseInt(liters),
            price: parseInt(price),
            gasStation: station,
            carId: record.carId || "123",
            location: record.location,
            uid: record.uid,
            userId : record.userId || '123456789',
            timestamp: record.timestamp || new Date()
        };  

        if (isNew) {
            dispatch(addNewRecord(recordData))
        } else {
            dispatch(updateRecord(recordData))
        }
    }

    return (
        <Container>
            <Content padder>
                <Card>
                    <CardItem>
                        <Item style={{width : '100%'}}>
                            <SvgXml width="32" height="32" xml={DateSvg} />
                            <DatePicker
                                defaultDate={timestamp}
                                minimumDate={new Date()}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                onDateChange={setTimestamp}
                                disabled={isNew}
                            />

                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item style={{width : '100%'}}>
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
                            <Right><Text>₪</Text></Right>
                        </Item>
                    </CardItem>
                </Card>
            </Content>
            <Footer>
                <Button
                    full
                    primary
                    style={{ marginTop: 10 }}
                    onPress={() => addOrUpdate()}>
                    <Text>Save</Text>
                </Button>
            </Footer>
        </Container>
    );
}

export default EditRecordView;