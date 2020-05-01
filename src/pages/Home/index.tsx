import React from 'react';

import { FiPlus } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import {
  Container,
  Header,
  Button,
  Main,
  HeaderContent,
  SignUp,
  Input,
  SignUpButton,
  EnjoyOnTv,
  EnjoyOnTvText,
  EnjoyOnTvGif,
  Download,
  DownloadGif,
  DownloadText,
  DownloadController,
  Watch,
  WatchText,
  WatchGif,
  FAQ,
  Footer,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
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
      <EnjoyOnTv>
        <EnjoyOnTvText>
          <h1>Aproveite na TV.</h1>
          <h3>
            Assista em Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
            aparelhos de Blu-ray e outros aparelhos
          </h3>
        </EnjoyOnTvText>
        <EnjoyOnTvGif>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="tv"
          />

          <video autoPlay playsInline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv.m4v"
              type="video/mp4"
            />
          </video>
        </EnjoyOnTvGif>
      </EnjoyOnTv>
      <Download>
        <DownloadGif>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="Eleven"
          />

          <DownloadController>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              alt="Stranger Things"
            />
            <div>
              <h3>Stranger Things</h3>
              <p>Download em andamento...</p>
            </div>

            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              alt="Download Gif"
              style={{ width: '60px', height: '60px' }}
            />
          </DownloadController>
        </DownloadGif>
        <DownloadText>
          <h1>Baixe séries para assistir offline.</h1>
          <h3>
            Salve seus títulos favoritos e sempre tenha algo para assistir.
          </h3>
        </DownloadText>
      </Download>
      <Watch>
        <WatchText>
          <h1>Assista quando quiser</h1>
          <h3>
            Assista no celular, tablet, smart TV ou notebook sem pagar a mais
            por isso
          </h3>
        </WatchText>
        <WatchGif>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            alt="Netflix on ipad, mac and phone"
          />

          <video autoPlay playsInline muted loop>
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" />
          </video>
        </WatchGif>
      </Watch>
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
          Pronto para assistir? Informe seu email para criar ou acessar sua
          conta.
        </p>
      </FAQ>
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
    </Container>
  );
};

export default Home;
