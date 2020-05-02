import styled from 'styled-components';

export const Container = styled.div`
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: 600px;
  width: 500px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  > svg {
    margin-bottom: 40px;
  }

  p {
    font-size: 1em;

    span {
      font-weight: bold;
    }
  }

  h1 {
    margin-top: 5px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.3em;

    width: 315px;
    font-weight: 400;
  }

  div {
    display: flex;
    flex-direction: row;

    margin-top: 20px;

    svg {
      margin-right: 16px;
    }
  }
`;

export const Button = styled.button`
  height: 60px;
  width: 400px;
  background: red;
  border: 0;
  border-radius: 4px;
  margin-top: 40px;

  font-size: 1.3em;
  color: white;
`;
