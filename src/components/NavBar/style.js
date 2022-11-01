import styled from "styled-components";

const SideBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    padding: 10px 14px;
    background: blanchedalmond;
    transition: all 0.3s ease;
    z-index: 100;  
`

const StyledHeader = styled.header`
    position: relative;
`

const Toggle = styled.div`
    position: absolute;
    right: -25px;
    transform: translateY(-50%) rotate(180deg);
    height: 30px;
    width: 30px;
    background-color: orange;
    color: black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    cursor: pointer;
    transition:  all 0.3s ease;
`

const ImageContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    img{
        width: 100%;
    }
`
const MenuBar = styled.div`
    height: calc(100% - 55px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: hidden;
    overflow-x: hidden;
`

const Menu = styled.div`
    margin-top: 40px;
`

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const StyleLi = styled.li`
    display: flex;
    gap: 15px;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;
    color: orange;

    a{
    text-decoration: none;
   
    color: orange;
  }
`



export {StyledUl, StyleLi, Menu, MenuBar, ImageContainer, SideBarContainer, StyledHeader, Toggle}