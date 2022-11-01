import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { ContentContainer, IconContainer, ModalContainer, StyledMessage } from './style'

const EditMenuModal = ({handleClose, show, text, children}) => {
  return (
    <ModalContainer block={show ? "block" : "none"}>
        <ContentContainer>
            <IconContainer>
                <FontAwesomeIcon icon={faXmark} onClick={handleClose}></FontAwesomeIcon>
            </IconContainer>
            {text && (
              <StyledMessage>
                <h1>{text}</h1>
              </StyledMessage>
            )}
            {children}
        </ContentContainer>
    </ModalContainer>
  )
}

export default EditMenuModal;