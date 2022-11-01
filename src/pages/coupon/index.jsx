import React from 'react'
import {AddButtonContainer, ButtonContainer, FlexColumn, StyledButton, StyledForm, StyledFormWrapper, StyledInput, StyledRemoveButton, StyledTD, StyledTR, ToppingSizeContainer, TransactionContainer} from './style';
import {useGetCouponsQuery, useDeleteCouponMutation, usePostCouponMutation} from '../../store/api/couponApi'
import {formatIDR } from '../../helpers/formatter';
import { useState } from 'react';
import EditMenuModal from '../../components/EditMenuModal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NavBar from '../../components/NavBar';

const initalState = {
  couponCode: '',
  amount:'',
};

function Coupon() {

  const [showAddModal, setShowAddModal] = useState(false);
  const [state, setState] = useState(initalState);
  const [category, setCategory] = useState('');

  const handleInput = e => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState(prev => ({ ...prev, [key]: value }));
  };

  const {
    data: coupon,
    error: getCouponError,
    isLoading: isLoadingCoupon,
   } = useGetCouponsQuery();

  const [deleteCoupon] = useDeleteCouponMutation();
  const [postCoupon] = usePostCouponMutation();

  const DeleteCoupon = (id) => {
    deleteCoupon({id}, false)
    .unwrap()
    .then((response) =>{
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const renderTable = () => {
    if (getCouponError) {
        return 0;
      } if (coupon) 
        if (coupon.length === 0 || coupon.data === null) { return 0; }
        const array = coupon.data.map((data) => data);
        console.log(array);
        return array.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.coupon_code}</td>
              <td> - {formatIDR(data.amount)}</td>
              <td>
                <FlexColumn>
                  <StyledRemoveButton onClick={() => {DeleteCoupon(data.id)}}>Remove</StyledRemoveButton>
                </FlexColumn>
              </td>
            </tr>
          ));
      }

  const resetData = () => {
    setState(initalState);
    setCategory(1);
  }

  const handleAddSubmit = e => {
    e.preventDefault();
    postCoupon({ coupon_code: state.couponCode, amount: Number(state.amount)}, false)
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
      {isLoadingCoupon ? (
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
                  <th>Coupon_id</th>
                  <th>Code</th>
                  <th>Amount</th>
                  <th>Remove</th>
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
        show={showAddModal}
        handleClose={() => {setShowAddModal(false);}}
        text="Add coupon type"
      >
        <StyledFormWrapper>
            <StyledForm onSubmit={handleAddSubmit}>
              <label className='labelText' htmlFor="couponCode">Coupon code</label>
              <StyledInput
                type="text"
                name="couponCode"
                value={state.couponCode}
                onChange={handleInput}
              />
              <label className='labelText' htmlFor="amount">Amount</label>
              <StyledInput
                type="number"
                name="amount"
                value={state.amount}
                onChange={handleInput}
              />
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

export default Coupon
