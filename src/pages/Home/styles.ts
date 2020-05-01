import styled from 'styled-components';
import backgroundImage from '../../assets/painel.jpeg';

export const Container = styled.div`
  height: 100vh;
`;

export const Main = styled.main`
  height: 1348px;
  padding: 40px 80px;
  background: url(${backgroundImage});
  background-size: cover;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 1348px;
    width: 100%;
    z-index: 1;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
    background-color: rgba(0, 0, 0, 0.4);
    height: 100vh;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    z-index: 2;
  }
`;

export const Button = styled.button`
  z-index: 2;
  width: 100px;
  height: 45px;
  background-color: #d81f26;
  border: 0;
  border-radius: 4px;

  color: white;
  font-weight: 400;
  font-size: 20px;
`;

export const HeaderContent = styled.div`
  color: white;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 200px;

  h1 {
    z-index: 2;
    font-size: 4em;
    max-width: 1000px;
    text-align: center;
  }

  h3 {
    z-index: 2;
    font-size: 2em;
    font-weight: 400;
    margin: 20px;
  }

  p {
    z-index: 2;
    font-size: 1.5em;
    margin-top: 20px;
    font-weight: 400;
  }
`;

export const SignUp = styled.div`
  min-height: 80px;
  width: 100%;
  z-index: 2;
  display: flex;
`;

export const Input = styled.input`
  width: 700px;
  padding: 20px;

  &::placeholder {
    font-size: 2em;
    color: #8c8c8c;
  }
`;

export const SignUpButton = styled.button`
  flex: 1;
  text-align: center;
  font-size: 2.5em;
  color: white;
  background: #d81f26;
  border: 0;
`;

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
    right: 15%;
    top: 277%;
    z-index: 1;
  }
`;

export const FAQ = styled.div`
  border-top: 10px solid #222;

  height: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 250px;
  width: 100%;

  p {
    color: white;
    font-size: 1.6em;
    margin: 20px 0 0 0;
  }

  > h1 {
    color: white;
    font-size: 4em;
    margin-bottom: 60px;
    font-weight: 500;
  }

  > button {
    display: flex;

    background-color: #303030;
    border: 0;
    height: 110px;
    width: 100%;
    padding: 0 40px;

    h1 {
      color: white;
      font-size: 2.8em;
      font-weight: 400;
      text-align: left;
    }

    & + button {
      margin-top: 10px;
    }
  }

  div {
    margin-top: 40px;
    width: 96%;

    input {
      height: 90px;
    }
  }
`;

export const Footer = styled.footer`
  border-top: 10px solid #222;

  height: 600px;
  width: 100%;

  color: #757575;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-size: 1.5em;
    font-weight: 400;
  }

  div {
    display: flex;
    margin: 30px;
    font-weight: 400px;

    div {
      margin: 20px 70px;

      li {
        list-style: none;

        & + li {
          margin-top: 20px;
        }
      }
    }
  }
`;
