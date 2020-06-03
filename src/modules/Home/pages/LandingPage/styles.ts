import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
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
