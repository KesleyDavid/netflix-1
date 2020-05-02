import React from 'react';

import Header from '../../components/Register/Header';
import Footer from '../../components/Register/Footer';

// import ChooseYourPlan from '../../components/Register/ChooseYourPlan';
import Plans from '../../components/Register/Plans';

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
