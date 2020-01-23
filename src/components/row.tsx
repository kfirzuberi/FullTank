
import React from "react";
import { CardItem, Icon, Text, Right, Badge } from "native-base";
import { IRecord } from "../redux/interface";
import { useNavigation } from "@react-navigation/native";
import StationImage from "./stationImage";
const moment = require('moment');


const Row = (props: IRecord) => {
    const navigation = useNavigation();
    const { uid, price, liters, timestamp, gasStation } = props;
    return (
        <CardItem  key={uid} button onPress={() => {
            navigation.navigate("RecordView", { props })
        }}>
            <StationImage station={gasStation} width="28" height="28" />
            <Text style={{flex: 1}} >{moment(timestamp).fromNow()}</Text>

            <Right style={{ flexDirection: "row" , flex: 0}}>
                <Badge warning>
                    <Text>{liters} L</Text>
                </Badge>
                <Badge success>
                    <Text>{price} ₪</Text>
                </Badge>
                <Icon style={{marginLeft : 6}} name="arrow-forward" />
            </Right>
        </CardItem>
    )
}

export default Row;