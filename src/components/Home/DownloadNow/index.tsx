import React from 'react';

import {
  Download,
  DownloadGif,
  DownloadController,
  DownloadText,
} from './styles';

const DownloadNow: React.FC = () => {
  return (
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
        <h3>Salve seus títulos favoritos e sempre tenha algo para assistir.</h3>
      </DownloadText>
    </Download>
  );
};

export default DownloadNow;
