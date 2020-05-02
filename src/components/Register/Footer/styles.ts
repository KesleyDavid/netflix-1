import styled from 'styled-components';

export default styled.footer`
  height: 250px;
  border-top: 2px solid #ccc;
  background-color: #e8e8e8;

  display: flex;
  flex-direction: column;
  padding: 30px 200px;

  h3 {
    margin-bottom: 30px;
    font-size: 1.3em;
  }

  h3,
  li {
    font-weight: 400;
    color: #666;
  }

  > div {
    display: flex;

    ul {
      list-style: none;

      & + ul {
        margin-left: 150px;
      }

      li + li {
        margin-top: 20px;
      }
    }
  }
`;
