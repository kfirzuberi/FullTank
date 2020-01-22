
import React from "react";
import { AppRegistry, Alert } from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1
} from "native-base";
import { useNavigation } from "@react-navigation/native";

/*export default class Profile extends React.Component {
  componentDidMount() {
    if (this.props.navigation.state.params !== undefined) {
      Alert.alert("USER found", this.props.navigation.state.params.name);
    }
  }*/


const Profile = (props: any) => {
  const navigation = useNavigation();

  
  return (
    <Container>
      <Content padder>
        <Card>
          <CardItem>
            <Icon active name="paper-plane" />
            <Text>Show User profiles here... </Text>
            <Right>
              <Icon name="close" />
            </Right>
          </CardItem>
        </Card>
        <Button
          full
          rounded
          primary
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate("EditScreenOne")}
        >
          <Text>Goto EditScreen One</Text>
        </Button>
      </Content>
    </Container>
  );
}

Profile.navigationOptions =  ({ navigation }) => {
  header: (props : any) =>  ( /* Your custom header */
    <Header
      style={{
        height: 80,
        marginTop: 20 /* only for IOS to give StatusBar Space */
      }}
    >
      <Text>This is CustomHeader</Text>
    </Header>
  )
};
Profile['navigationOptions'] = screenProps => ({
  title: 'Home'
});

Profile.navigationOptionsssssss = ({ navigation }) => {
  return {
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Profile ddd</Title>
        </Body>
        <Right />
      </Header>
    )
  };
};

export default Profile;