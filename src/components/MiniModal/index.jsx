import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { ContentContainer, IconContainer, ModalContainer, StyledMessage } from './style'

const StyledModal = ({handleClose, show, text}) => {
  return (
    <ModalContainer block={show ? "block" : "none"}>
        <ContentContainer>
            <IconContainer>
                <FontAwesomeIcon icon={faXmark} onClick={handleClose}></FontAwesomeIcon>
            </IconContainer>
            {text && (
              <StyledMessage>
                <p>{text}</p>
              </StyledMessage>
            )}
        </ContentContainer>
    </ModalContainer>
  )
}

export default StyledModal;