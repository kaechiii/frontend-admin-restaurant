import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: palegoldenrod;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo{
    padding: 2rem 2rem;
  }

  .logocat{
    width: 100%;
    height: 100%;
  }

  fieldset{
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 10px;
    border-color: orange;
    border-radius: 10px;
    border-width: 10px;

    legend{
      padding: 10px;
      font-size: 1.3rem
    }
  }
`
const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 100%;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
`;

const StyledButton = styled.button`
  display: block;
  background-color: palegoldenrod;
  color: black;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

export {Container, ButtonContainer, StyledFormWrapper,StyledForm, StyledInput, StyledButton, StyledError}
