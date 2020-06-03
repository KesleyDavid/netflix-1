import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

// import ChooseYourPlan from '../../components/Register/ChooseYourPlan';
import Plans from '../../components/Plans';

import { Container } from './styles';

const Register: React.FC = () => (
  <Container>
    <Header />
    {/* <ChooseYourPlan /> */}
    <Plans />
    <Footer />
  </Container>
);

export default Register;
