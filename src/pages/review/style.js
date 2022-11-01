import styled from "styled-components"

const MenuContainer = styled.div`
    padding: 15px 20px;
    display: flex;
    width: 100%;
    gap: 3rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 992px) {
    flex-direction: row;
    
    gap: 1rem;
  }

  @media (min-width: 1280px) {
    padding: 15px 10vw;
    }
`

const MenuItem = styled.div`
    background: rgb(238,232,170);
    background: linear-gradient(90deg, rgba(238,232,170,1) 0%, rgba(255,217,128,1) 35%, rgba(255,223,92,1) 100%);
    padding: 0.5rem 0.5rem;
    border-radius: 1rem;
    width: 40vw;
    color: orange;
    display: flex;
    flex-direction: row;
    gap: 1rem;

    @media (min-width: 1280px) {
        width: 32vw;
    }

    @media (max-width: 1280px) {
        width: 33vw;
    }

    @media (max-width: 768px) {
    width: 90%;
    gap: 1rem;
  }
`

const ContainerImage = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    img{
        width: 100%;
        border-radius: 1rem;
    }
`

const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 0.5rem 0.5rem;
    justify-content: space-around;
`

const StyledCartButton = styled.button`
    color: orange;
    border-color: transparent;
    background-color: white;
    border-radius: 0.3rem;
    font-size: 1.5vw;
    padding: 0.3rem 0.5rem;
    border-width: thin;
    width: 80%;
    align-self: center;
    &:focus {
        outline: none;
    }

    @media (max-width: 768px) {
        font-size: 4vw;
    }
`

const NameStyled = styled.p`
    color: black;
    font-size: 2vw;

    @media (max-width: 768px) {
        font-size: 5.5vw;
  }
`

const PriceStyled = styled.p`
    color: black;
    font-size: 1.5vw;

    @media (max-width: 768px) {
        font-size: 5.5vw;
    }
`

const RatingContainer = styled.div`
    display: flex;
    font-size: 1.2rem;
    gap: 10px;
    color: black;
`

export {RatingContainer, MenuContainer, MenuItem, ContainerImage, PriceStyled, NameStyled, StyledCartButton, ContentInfo}