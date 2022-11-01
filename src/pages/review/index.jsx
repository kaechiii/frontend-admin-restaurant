import React from 'react'
import { useNavigate } from 'react-router-dom';
import { formatIDR } from '../../helpers/formatter';
import { useGetMenuQuery } from '../../store/api/menuApi';
import { MenuContainer, MenuItem, ContainerImage, ContentInfo, NameStyled, PriceStyled, RatingContainer} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import NavBar from '../../components/NavBar';

function Review() {
    const navigate = useNavigate()

    const {
        data: menu,
        error: getMenuError,
        isLoading: isLoadingMenu,
      } = useGetMenuQuery();

    const renderMenu = () => {
        if (getMenuError) {
          return 0;
        } if (menu) {
          if (menu.length === 0 || menu.data === null) 
          { 
            return (
              <p>No menu data to display</p>
            )
          }
          let arrayCopy = menu.data.map((data) => data);
          let sortedMenu = arrayCopy;
          return sortedMenu.map((data, index) => (
              <MenuItem key={index} onClickCapture={()=>{navigate(`/menu/${data.id}`, { replace: true })}}>
                <ContainerImage>
                  <img src={data.photo} alt="pizza.png"></img>
                </ContainerImage>
                <ContentInfo>
                  <NameStyled>{data.name}</NameStyled>
                  <PriceStyled>{formatIDR(data.price)}</PriceStyled>
                  <RatingContainer>
                    <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
                    <h4>{Math.round(data.rating * 100) / 100}</h4>
                  </RatingContainer>
                </ContentInfo>
              </MenuItem>
            ));
        }
      };

  return (
    <>
    <NavBar></NavBar>
    <MenuContainer>
        {renderMenu()}
      </MenuContainer>
    </>
  )
}

export default Review