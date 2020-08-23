import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MonthView = styled.div`
  margin: 20px;

  header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border: 1px solid #0070c0;
    background: #0070c0;
    padding: 5px;
    border-radius: 5px 5px 0 0;

    strong {
      color: #fff;
      text-align: center;
    }
  }

  main {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 1px;
    background: #ccc;
    border: 1px solid #ccc;
  }

`;

export const Day = styled.div`
  height: 5rem;
  padding: 0.5rem;
  background: #fff;
  font-size: 0.8rem;
`;
