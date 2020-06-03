import styled from 'styled-components';

export const Watch = styled.div`
  border-top: 10px solid #222;

  height: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 80px;
  width: 100%;
`;

export const WatchText = styled.div`
  h1 {
    font-size: 4em;
    color: white;
    max-width: 600px;
    padding-bottom: 6px;
  }

  h3 {
    font-size: 2em;
    width: 650px;
    font-weight: regular;
    color: white;
  }
`;

export const WatchGif = styled.div`
  display: flex;

  img {
    height: 480px;
    width: 640px;
    z-index: 2;
  }

  video {
    position: absolute;
    width: 400px;
    right: 17%;
    top: 254%;
    z-index: 1;
  }
`;
