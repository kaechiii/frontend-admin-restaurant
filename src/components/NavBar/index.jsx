import React from 'react'
import { ImageContainer, Menu, MenuBar, SideBarContainer, StyledHeader, StyledUl, StyleLi, Toggle } from './style'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pizzacat from '../../assets/pizzacat.png';
import { faStar, faArrowRight, faReceipt, faUtensils, faTags, faHome } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function NavBar() {
    const [state, toggleState] = useState(false)

  return (
    <SideBarContainer className={state === true ? "" : "close"}>
        <StyledHeader>
            <ImageContainer>
                {state === true ? (<img src={pizzacat} alt="logo.png" />) : (<div>&nbsp;&nbsp;</div>)}
            </ImageContainer>
            <Toggle onClick={()=>{toggleState(!state)}}>
                <FontAwesomeIcon className={state === true ? "" : "toggleClose"} icon={faArrowRight}></FontAwesomeIcon>
            </Toggle> 
        </StyledHeader>
        <MenuBar>
            <Menu>
                <StyledUl>
                    <StyleLi>
                        <Link to="/dashboard">
                            <FontAwesomeIcon className = 'icon' icon={faHome}></FontAwesomeIcon>
                        </Link>
                        <Link to="/dashboard">
                            <p>Dashboard</p>
                        </Link>
                    </StyleLi>
                    <StyleLi>
                        <Link to="/orders">
                            <FontAwesomeIcon className = 'icon' icon={faReceipt}></FontAwesomeIcon>
                        </Link>
                        <Link to="/orders">
                            <p>Orders</p>
                        </Link>
                    </StyleLi>
                    <StyleLi>
                        <Link to="/menu">
                            <FontAwesomeIcon className = 'icon' icon={faUtensils}></FontAwesomeIcon>
                        </Link>
                        <Link to="/menu">
                            <p>Menu</p>
                        </Link>
                    </StyleLi>
                    <StyleLi>
                        <Link to="/coupons">
                            <FontAwesomeIcon className = 'icon' icon={faTags}></FontAwesomeIcon>
                        </Link>
                        <Link to="/coupons">
                            <p>Coupons</p>
                        </Link>
                    </StyleLi>
                    <StyleLi>
                        <Link to="/review">
                            <FontAwesomeIcon className = 'icon' icon={faStar}></FontAwesomeIcon>
                        </Link>
                        <Link to="/review">
                            <p>Review</p>
                        </Link>
                    </StyleLi>
                </StyledUl>
            </Menu>
        </MenuBar>
    </SideBarContainer>
  )
}

export default NavBar