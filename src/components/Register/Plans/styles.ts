import styled from 'styled-components';

export const Container = styled.div`
  height: 800px;
  padding: 30px 300px;
`;

export const Content = styled.div`
  height: 700px;
  background: #ccc;

  > p {
    font-size: 1em;

    span {
      font-weight: 500;
    }
  }

  > h1 {
    margin: 10px 0;
  }

  > h2 {
    font-size: 1.3em;
    font-weight: 400;
  }

  > div {
    margin: 40px 0;
  }
`;

export const PlanBlocks = styled.div`
  display: flex;
  margin-left: auto;

  h1 {
    flex: 1;
  }
`;

export const PBText = styled.h1``;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;

  div {
    margin-left: auto;
    display: flex;

    svg {
      margin: 10px 80px;
    }
  }
`;

export const DetailText = styled.p`
  margin: 10px 80px;
  width: 25px;
`;
