import styled from 'styled-components';

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
