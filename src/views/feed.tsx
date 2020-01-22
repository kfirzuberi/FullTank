
import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

const Feed = (props:any)=>{
    return (      <Container>
        <Header />
        <Content>
          <Button>
            <Text>Click Me feed!</Text>
          </Button>
        </Content>
      </Container>)
}

export default Feed;