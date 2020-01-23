import { useNavigation } from "@react-navigation/native";
import Row from "../../components/row";

import { Container, Content, Card } from "native-base";
import React from "react";
import { useSelector } from 'react-redux';
import { getRecords } from "../../redux/selectors/records";


const ListView = (props: any) => {
    const navigation = useNavigation();
    const records = useSelector(getRecords);

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