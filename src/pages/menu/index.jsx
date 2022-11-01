import React from 'react'
import {AddButtonContainer, ButtonContainer, FlexColumn, StyledButton, StyledEditButton, StyledForm, StyledFormWrapper, StyledInput, StyledRemoveButton, TransactionContainer} from './style';
import {useDeleteMenuMutation, useGetMenuQuery, useUpdateMenuMutation, usePostMenuMutation} from '../../store/api/menuApi'
import { useState } from 'react';
import moment from 'moment';
import EditMenuModal from '../../components/EditMenuModal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NavBar from '../../components/NavBar';

const initalState = {
  name: '',
  image:'',
  price:''
};

function Menu() {

  const [showTable, setShowTable] = useState('thismonth');
  const [showModal, setShowModal] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [state, setState] = useState(initalState);
  const [menuID, setMenuId] = useState('');
  const [category, setCategory] = useState('');

  const handleInput = e => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [key]: value }));
  };

  const {
    data: menu,
    error: getMenuError,
    isLoading: isLoadingMenu,
   } = useGetMenuQuery();

  const [deleteMenu] = useDeleteMenuMutation();
  const [updateMenu] = useUpdateMenuMutation();
  const [postMenu] = usePostMenuMutation();

  const DeleteMenu = (id) => {
    deleteMenu({id}, false)
    .unwrap()
    .then((response) =>{
      console.log(response);
      setShowModal(false);
    })
    .catch((error) => {
      console.log(error);
      setShowModal(false);
    })
  }

  const renderTable = () => {
    if (getMenuError) {
        return 0;
      } if (menu) {
        if (menu.length === 0 || menu.data === null) { return 0; }
        const array = menu.data.map((data) => data);
        console.log(array);
        return array.filter((data) => customFilter(data)).map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td><img src={data.photo} alt="food.png"></img></td>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>{data.category_type.category_type_name}</td>
              <td>{Math.round(data.rating * 100) / 100}</td>
              <td>
                <FlexColumn>
                  <StyledEditButton onClick={() => {setData( data.name, data.photo, data.price, data.categoryID, data.id);setShowModal(true)}}>Edit</StyledEditButton>
                  <StyledRemoveButton onClick={() => {DeleteMenu(data.id)}}>Remove</StyledRemoveButton>
                </FlexColumn>
              </td>
            </tr>
          ));
      }
  }
  
  const setData = (name, image, price, categoryID, menuID) => {
    setState({name: name, image: image, price: price});
    setCategory(categoryID);
    setMenuId(menuID)
  }

  const resetData = () => {
    setState(initalState);
    setCategory(1);
  }

  const tableOption = [
    { value: 'thismonth', text: 'This month' },
    { value: 'lastmonth', text: 'Last month' },
    { value: 'thisyear', text: 'This year' },
  ];

  const handleChangeTable = (event) => {
    setShowTable(event.target.value);
  };

  const customFilter = (data) => {
    if (showTable === 'thismonth') {
      if (moment().month() === moment(data.CreatedAt).month()
      && moment().year() === moment(data.CreatedAt).year()) return 1;
    } else if (showTable === 'lastmonth') {
      if (moment().month() - 1 === moment(data.CreatedAt).month()
      && moment().year() === moment(data.CreatedAt).year()) return 1;
    } else if (showTable === 'thisyear') {
      if (moment().year() === moment(data.CreatedAt).year()) return 1;
    }

    return 0;
  };

  const categoryOption = [
    { value: '1', text: '1. Pizza' },
    { value: '2', text: '2. Pasta' },
    { value: '3', text: '3. Drink' },
  ];

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateMenu({ id: menuID, name: state.name, price: Number(state.price), photo: state.image, categoryID: Number(category) }, false)
        .unwrap()
        .then((response) => {
          console.log(response)
          setShowModal(false);
        })
        .catch((error) => {
         console.log(error)
         setShowModal(false);
        });
  };

  const handleAddSubmit = e => {
    e.preventDefault();
    postMenu({ name: state.name, price: Number(state.price), photo: state.image, categoryID: Number(category) }, false)
        .unwrap()
        .then((response) => {
          console.log(response)
          setShowAddModal(false);
        })
        .catch((error) => {
         console.log(error)
         setShowAddModal(false);
        });
  };

  return (
    <>
    <NavBar></NavBar>
    <TransactionContainer>
      {isLoadingMenu ? (
        <h1>Loading</h1>
      ) : (
        <div className="tableContainer">
          <AddButtonContainer onClick={()=>{setShowAddModal(!showAddModal); resetData()}}>
            <FontAwesomeIcon className="plus-icon" icon={faPlus}></FontAwesomeIcon>
          </AddButtonContainer>
          <div className="tableStyle">
            <table>
              <thead>
                <tr>
                  <th>Menu_id</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Rating</th>
                  <th>Edit/Remove</th>
                </tr>
              </thead>
              <tbody>
                {renderTable()}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <EditMenuModal
          show={showModal}
          handleClose={() => {setShowModal(false);}}
          text="Edit menu"
        >
          <StyledFormWrapper>
            <StyledForm onSubmit={handleSubmit}>
              <label className='labelText' htmlFor="name">Name</label>
              <StyledInput
                type="text"
                name="name"
                value={state.name}
                onChange={handleInput}
              />
              <label className='labelText' htmlFor="image">Image</label>
              <StyledInput
                type="text"
                name="image"
                value={state.image}
                onChange={handleInput}
              />
              <label className='labelText' htmlFor="price">Price</label>
              <StyledInput
                type="number"
                name="price"
                value={state.price}
                onChange={handleInput}
              />
              <div className="filterContainer">
                <p>Category option: </p>
                <select value={category} onChange={handleChangeCategory}>
                  {categoryOption.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
              <ButtonContainer>
                <StyledButton type="submit">Submit</StyledButton>
            </ButtonContainer>
            </StyledForm>
          </StyledFormWrapper>    
      </EditMenuModal>
      <EditMenuModal
        show={showAddModal}
        handleClose={() => {setShowAddModal(false);}}
        text="Add menu"
      >
        <StyledFormWrapper>
            <StyledForm onSubmit={handleAddSubmit}>
              <label className='labelText' htmlFor="name">Name</label>
              <StyledInput
                type="text"
                name="name"
                value={state.name}
                onChange={handleInput}
              />
              <label className='labelText' htmlFor="image">Image</label>
              <StyledInput
                type="text"
                name="image"
                value={state.image}
                onChange={handleInput}
              />
              <label className='labelText' htmlFor="price">Price</label>
              <StyledInput
                type="number"
                name="price"
                value={state.price}
                onChange={handleInput}
              />
              <div className="filterContainer">
                <p>Category option: </p>
                <select value={category} onChange={handleChangeCategory}>
                  {categoryOption.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
              <ButtonContainer>
                <StyledButton type="submit">Submit</StyledButton>
            </ButtonContainer>
            </StyledForm>
          </StyledFormWrapper>  
      </EditMenuModal>
    </TransactionContainer>
    </>
  )
}

export default Menu