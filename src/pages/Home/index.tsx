import React from 'react';

import Main from '../../components/Home/Main';
import Enjoy from '../../components/Home/Enjoy';
import Download from '../../components/Home/DownloadNow';
import Watch from '../../components/Home/Watch';
import FAQ from '../../components/Home/FAQ';
import Footer from '../../components/Home/Footer';

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
