
import React from "react";
import { CardItem, Icon, Text, Right } from "native-base";
import { IRecord } from "src/interface";
import { useNavigation } from "@react-navigation/native";


const Row = (props: IRecord) => {
    const navigation = useNavigation();
    const { uid, price, liters } = props;
    return (
        <CardItem key={uid} button onPress={() => {
            navigation.navigate("RecordView", { props })
        }}>
            <Icon active name="logo-googleplus" />
            <Text>{liters} ליטר</Text>
            <Text>אתמול</Text>
            <Text> {price} nis</Text>
            <Right>

                <Icon name="arrow-forward" />
            </Right>
        </CardItem>
    )
}

export default Row;