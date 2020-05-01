import React from 'react';

import logo from '../../assets/logo.svg';

import { Container, Header, Button, Main, HeaderContent, SignUp, Input, SignUpButton, EnjoyTv } from './styles';

const Home: React.FC = props => {
  return (
    <Container>
      <Main>
        <Header>
          <img src={logo} alt="Netflix" style={{ width: '180px' }}/>
          <Button>Entrar</Button>
        </Header>

        <HeaderContent>
          <h1>Filmes, séries e muito mais.</h1>
          <h1>Sem limites.</h1>
          <h3>Assista onde quiser. Cancele quando quiser.</h3>

          <SignUp>
            <Input placeholder="Email"/>
            <SignUpButton>ASSINE A NETFLIX</SignUpButton>
          </SignUp>

          <p>Pronto para assistir? Informe seu email para criar ou acessar sua conta.</p>
        </HeaderContent>
      </Main>


      <EnjoyTv>

      </EnjoyTv>
    </Container>
  );
}

export default Home;
