import styled from 'styled-components';

export const EnjoyOnTv = styled.div`
  border-top: 10px solid #222;

  height: 600px;
  display: flex;
  justify-content: space-around;
  padding: 80px;
  width: 100%;
`;

export const EnjoyOnTvText = styled.div`
  color: white;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-size: 4em;
    max-width: 1000px;
  }

  h3 {
    font-size: 2em;
    font-weight: 400;
    margin-top: 20px;
  }
`;

export const EnjoyOnTvGif = styled.div`
  display: flex;
  display: relative;
  align-items: center;
  justify-content: center;

  img {
    width: 640px;
    z-index: 2;
    height: 480px;
  }

  video {
    position: absolute;
    top: 118%;
  }
`;
