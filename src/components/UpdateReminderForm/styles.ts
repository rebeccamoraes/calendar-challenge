import styled from 'styled-components';

export const Container = styled.div`
  background: #FFF;
  width: 350px;
  margin: 20px auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);

  h2 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    label {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      input {
        width: 17rem;
        height: 2rem;
        border: 0px;
        border-bottom: 1px solid #0070c0;
      }
    }

    button {
      background: #0070c0;
      border: 0;
      border-radius: 5px;
      height: 2rem;
      color: #fff;
      margin-bottom: 2px;
    }

    button.secondary {
      background: #fff;
      border: 1px solid #ccc;
      color: #333;
    }
  }
`;
