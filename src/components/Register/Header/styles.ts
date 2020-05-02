import styled from 'styled-components';

export const Container = styled.div`
  height: 120px;
  border-bottom: 2px solid #ccc;
  background: white;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  padding: 0 60px;

  img {
    width: 220px;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 0;
  font-size: 1.8em;
  font-weight: 500;
`;
