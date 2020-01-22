import { useNavigation } from "@react-navigation/native";
import Row from "../../components/row";
import { IRecord } from "src/interface";
import { Container, Content, Card } from "native-base";
import React from "react";


const records: Array<IRecord> = [
    {
        uid: "1234",
        carId: "1234",
        gasStation: "Delek",
        price: 45,
        location: "1234",
        km: 4,
        liters: 6,
        timestamp: new Date()
    },
    {
        uid: "133234",
        carId: "1234",
        gasStation: "Paz",
        price: 45,
        location: "1234",
        km: 4,
        liters: 6,
        timestamp: new Date()
    },
    {
        uid: "31234",
        carId: "1234",
        gasStation: "DorAlon",
        price: 45,
        location: "1234",
        km: 4,
        liters: 6,
        timestamp: new Date()
    },
    {
        uid: "123435",
        carId: "1234",
        gasStation: "Sonol",
        price: 45,
        location: "1234",
        km: 4,
        liters: 6,
        timestamp: new Date()
    }
]



const ListView = (props: any) => {
    const navigation = useNavigation();

    const rows = records.map(record => <Row {...record} />);

    return (<Container>
        <Content padder>
            <Card>
                {rows}
            </Card>
        </Content>
    </Container>)
}

export default ListView