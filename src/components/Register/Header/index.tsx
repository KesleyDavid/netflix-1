import React from 'react';

import logo from '../../../assets/logo.svg';

import { Container, Button } from './styles';

const Header: React.FC = () => (
  <Container>
    <img src={logo} alt="logo" />
    <Button>Entrar</Button>
  </Container>
);

export default Header;
