import React from 'react';

import Main from '../../components/Main';
import Enjoy from '../../components/Enjoy';
import Download from '../../components/DownloadNow';
import Watch from '../../components/Watch';
import FAQ from '../../components/FAQ';
import Footer from '../../components/Footer';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Main />
      <Enjoy />
      <Download />
      <Watch />
      <FAQ />
      <Footer />
    </Container>
  );
};

export default Home;
