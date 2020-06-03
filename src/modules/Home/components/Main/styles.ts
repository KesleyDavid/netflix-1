import styled from 'styled-components';
import backgroundImage from '../../../../assets/painel.jpeg';

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
