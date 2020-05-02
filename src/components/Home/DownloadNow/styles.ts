import styled from 'styled-components';

export const Download = styled.div`
  border-top: 10px solid #222;

  height: 700px;
  display: flex;
  justify-content: space-around;
  padding: 60px;
  padding-top: 40px;
  width: 100%;
`;

export const DownloadGif = styled.div`
  display: flex;
  display: relative;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const DownloadText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

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

export const DownloadController = styled.div`
  width: 450px;
  height: 120px;
  border: 3px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 10px;

  position: absolute;
  z-index: 2;
  background-color: black;
  bottom: 15%;

  img {
    height: 80%;
    margin-right: 20px;
  }

  h3 {
    font-size: 1.4em;
    width: calc(100% - 30px);
    color: white;
    padding-bottom: 6px;
  }

  p {
    font-size: 1.2em;
    font-weight: regular;
    color: blue;
  }
`;
