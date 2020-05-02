import React from 'react';

import {
  Main,
  Header,
  Button,
  Input,
  HeaderContent,
  SignUp,
  SignUpButton,
} from './styles';

import logo from '../../../assets/logo.svg';

const MainComponent: React.FC = () => {
  return (
    <Main>
      <Header>
        <img src={logo} alt="Netflix" style={{ width: '180px' }} />
        <Button>Entrar</Button>
      </Header>

      <HeaderContent>
        <h1>Filmes, séries e muito mais.</h1>
        <h1>Sem limites.</h1>
        <h3>Assista onde quiser. Cancele quando quiser.</h3>

        <SignUp>
          <Input placeholder="Email" />
          <SignUpButton>ASSINE A NETFLIX</SignUpButton>
        </SignUp>

        <p>
          Pronto para assistir? Informe seu email para criar ou acessar sua
          conta.
        </p>
      </HeaderContent>
    </Main>
  );
};

export default MainComponent;
