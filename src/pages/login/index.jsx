import React, { useState } from 'react'
import { Container, ButtonContainer, StyledButton, StyledError, StyledForm, StyledFormWrapper, StyledInput} from './style';
import { useLoginMutation } from '../../store/api/loginApi';
import pizzacat from '../../assets/pizzacat.png';
import Cookies from 'js-cookie'
import StyledModal from '../../components/MiniModal';
import NavBar from '../../components/NavBar';

const initalState = {
    email: '',
    password: '',
};

function Login() {
    const [login] = useLoginMutation();
    const [state, setState] = useState(initalState);
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const [loginMessage, setLoginMessage] = useState('');
    const [showModal, setShowModal] = useState('');

    const validateEmail = () => {
        if(state.email === ''){
            setErrorEmail('Email field cannot be empty');
            return false;
        }
        const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const isEmail = regex.test(state.email);
        if(isEmail){
            return true;
        }
        setErrorEmail('Please enter valid email');
        return false;
    };

    const validatePassword = () => {
        if(state.password === ''){
            setErrorPassword('Password field cannot be empty');
            return false;
        }
        if(state.password.length < 8){
            setErrorPassword('Password should not be shorter than 8 characters')
            return false;
        }
        return true;
    }

    const resetValue = () => {
        setErrorEmail('');
        setErrorPassword();
    }

    const handleSubmit = e => {
        e.preventDefault();
        resetValue();

      let isFormValid = false;
  
      isFormValid = validateEmail();
      isFormValid = validatePassword();

      if(isFormValid){
        login({ email: state.email, password: state.password}, false)
          .unwrap()
          .then((response) => {
            setShowModal(true);
            setLoginMessage('Login successful');
            setState(initalState);
            Cookies.set('token', response.data.idToken);
          })
          .catch((error) => {
            setShowModal(true);
            setLoginMessage(error.data.message);
          });
      }
    }

    const handleInput = e => {
        const key = e.currentTarget.name;
        const value = e.currentTarget.value;
    
        setState(prev => ({ ...prev, [key]: value }));
    };

  return (
    <>
      <Container>
        <div className="logo">
          <img className="logocat" src={pizzacat} alt='logo.png'></img>
        </div>
        <fieldset>
          <legend>Login:</legend>
          <StyledFormWrapper>
            <StyledForm onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <StyledInput
                type="email"
                name="email"
                value={state.email}
                onChange={handleInput}
              />
              {errorEmail && (
                <StyledError>
                  <p>{errorEmail}</p>
                </StyledError>
              )}
              <label htmlFor="password">Password</label>
              <StyledInput
                type="password"
                name="password"
                value={state.password}
                onChange={handleInput}
              />
              {errorPassword && (
                <StyledError>
                  <p>{errorPassword}</p>
                </StyledError>
              )}
              <ButtonContainer>
                  <StyledButton type="submit">Login</StyledButton>
              </ButtonContainer>
            </StyledForm>
          </StyledFormWrapper>
          <StyledModal
            show={showModal}
            handleClose={() => {setShowModal(false); setState(initalState)}}
            text={loginMessage}
          >
          </StyledModal>
          </fieldset>
      </Container>
    </>
  )
}

export default Login