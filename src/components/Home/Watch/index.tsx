import React from 'react';

import { Watch, WatchText, WatchGif } from './styles';

const WatchComponent: React.FC = () => {
  return (
    <Watch>
      <WatchText>
        <h1>Assista quando quiser</h1>
        <h3>
          Assista no celular, tablet, smart TV ou notebook sem pagar a mais por
          isso
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
  );
};

export default WatchComponent;
