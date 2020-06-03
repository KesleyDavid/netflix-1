import React from 'react';

import Container from './styles';

const Footer: React.FC = () => (
  <Container>
    <h3>Dúvidas? Entre em contato conosco.</h3>

    <div>
      <ul>
        <li>Perguntas frequentes</li>
        <li>Preferências de cookies</li>
      </ul>

      <ul>
        <li>Centro de ajuda</li>
        <li>Informações corporativas</li>
      </ul>

      <ul>
        <li>Termos de uso</li>
      </ul>

      <ul>
        <li>Privacidade</li>
      </ul>
    </div>
  </Container>
);

export default Footer;
