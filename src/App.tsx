import React from 'react';

import GlobalStyle from './styles/global';
// import Register from './modules/Register/pages/Register';
// import Home from './modules/Home/pages/LandingPage';
import Profiles from './modules/Application/pages/Profiles';

const App: React.FC = () => (
  <>
    {/* <Home /> */}
    {/* <Register /> */}

    <Profiles />
    <GlobalStyle />
  </>
);

export default App;
