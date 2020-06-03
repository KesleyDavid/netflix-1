import React from 'react';

import { FiCheckCircle, FiCheck } from 'react-icons/fi';

import { Container, Content, Button } from './styles';

const ChooseYourPlan: React.FC = () => (
  <Container>
    <Content>
      <FiCheckCircle size={60} color="red" />
      <p>
        PASSO <span>1</span> DE <span>3</span>
      </p>
      <h1>Escolha seu plano.</h1>

      <div>
        <FiCheck color="red" size={40} />
        <h3>Sem compromisso, cancele quando quiser.</h3>
      </div>

      <div>
        <FiCheck color="red" size={40} />
        <h3>Todo o conteúdo da Netflix por um preço único e acessível.</h3>
      </div>

      <div>
        <FiCheck color="red" size={40} />
        <h3>Assista o quanto quiser em todos os seus aparelhos.</h3>
      </div>
      <Button>VEJA NOSSOS PLANOS</Button>
    </Content>
  </Container>
);

export default ChooseYourPlan;
