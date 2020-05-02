import React from 'react';

import Footer from './styles';

const FooterComponent: React.FC = () => {
  return (
    <Footer>
      <h3>Dúvidas? Entre em contato.</h3>
      <div>
        <div>
          <ul>
            <li>Perguntas frequentes</li>
            <li>Relações com investidores</li>
            <li>Formas de assistir</li>
            <li>Informações corporativas</li>
            <li>Originais Netflix</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Centro de ajuda</li>
            <li>Carreiras</li>
            <li>Termos de uso</li>
            <li>Entre em contato</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Conta</li>
            <li>Resgatar cartão pré-pago</li>
            <li>Privacidade</li>
            <li>Teste de velocidade</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Imprensa</li>
            <li>Comprar cartão pré-pago</li>
            <li>Preferência de cookies</li>
            <li>Avisos legais</li>
          </ul>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
