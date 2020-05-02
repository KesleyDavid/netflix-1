import React from 'react';

import { FiPlus } from 'react-icons/fi';

import { FAQ, SignUp, SignUpButton, Input } from './styles';

const FAQComponent: React.FC = () => {
  return (
    <FAQ>
      <h1>Perguntas frequentes</h1>
      <button>
        <h1>O que é a Netflix?</h1>
        <FiPlus size={40} color="#fff" style={{ marginLeft: 'auto' }} />
      </button>

      <button>
        <h1>Quanto custa a Netflix?</h1>
        <FiPlus size={40} color="#fff" style={{ marginLeft: 'auto' }} />
      </button>

      <button>
        <h1>Onde posso assistir?</h1>
        <FiPlus size={40} color="#fff" style={{ marginLeft: 'auto' }} />
      </button>

      <button>
        <h1>Como faço para cancelar?</h1>
        <FiPlus size={40} color="#fff" style={{ marginLeft: 'auto' }} />
      </button>

      <button>
        <h1>O que eu posso assistir na Netflix?</h1>
        <FiPlus size={40} color="#fff" style={{ marginLeft: 'auto' }} />
      </button>

      <div>
        <SignUp>
          <Input placeholder="Email" />
          <SignUpButton>ASSINE A NETFLIX</SignUpButton>
        </SignUp>
      </div>

      <p>
        Pronto para assistir? Informe seu email para criar ou acessar sua conta.
      </p>
    </FAQ>
  );
};

export default FAQComponent;
