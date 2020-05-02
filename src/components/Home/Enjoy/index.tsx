import React from 'react';

import { EnjoyOnTv, EnjoyOnTvText, EnjoyOnTvGif } from './styles';

const EnjoyOnTvComponent: React.FC = () => {
  return (
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
  );
};

export default EnjoyOnTvComponent;
