import { useNavigation } from "@react-navigation/native";
import Row from "../../components/row";

import { Container, Content, Card } from "native-base";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getRecords } from "../../redux/selectors/records";
import { getAllRecords } from "../../redux/disaptchers/records";
import { Text } from "react-native-svg";


const ListView = (props: any) => {
    const navigation = useNavigation();
    const records = useSelector(getRecords);

    const rows = records ? records.map(record => <Row key={record.uid} {...record} />): <Text>no</Text>;

    return (<Container>
        <Content padder>
            <Card>
                {rows}
            </Card>
        </Content>
    </Container>)
}

export default ListView