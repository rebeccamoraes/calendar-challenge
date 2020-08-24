import styled from 'styled-components';

export const Container = styled.div`
  background: #FFF;
  width: 20rem;
  margin: 20px auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);

  > p {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: 1rem;
  }

  section {
    border-top: 1px solid #0070c0;
    margin: 5px 0;
    padding-top: 5px;
  }

  button {
    background: #0070c0;
    border: 0;
    border-radius: 5px;
    height: 2rem;
    color: #fff;
    margin: 5px 0;
    width: 100%;
  }
  button.secondary {
    background: #fff;
    border: 1px solid #ccc;
    color: #333;
  }
`;
