import React from 'react';

import { Container, Content, Header, Card, Title, Text } from './styles';

const Profiles: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Title> Quem está assistindo?</Title>

        <Profiles>
          <Card>
            <Text></Text>
          </Card>

          <Card>
            <Text></Text>
          </Card>

          <Card>
            <Text></Text>
          </Card>

          <Card>
            <Text></Text>
          </Card>
        </Profiles>
      </Content>
    </Container>
  );
};

export default Profiles;
