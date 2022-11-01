import styled from 'styled-components'

const ContentContainer = styled.div`
    position: fixed;
    top: 50%;
    left:50%;
    width: 50%;
    height:auto;
    padding: 1rem 1rem;
    transform: translate(-50%, -50%);
    background: white;
    text-align: center;

    @media (max-width: 768px) {
        width: 80%;
        h1{
            font-size: 1rem;
        }
  }
`

const ModalContainer = styled.div`
    display: ${p => p.block && p.block};
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height:100%;
    background: rgba(0,0,0,0.6)
`
const IconContainer = styled.div`
    font-size: 2rem; 
    text-align: right;
    padding-bottom: 1rem;
    color: crimson;
`

const StyledMessage = styled.div`
  text-align: center;
`

export {ModalContainer, ContentContainer, IconContainer, StyledMessage};