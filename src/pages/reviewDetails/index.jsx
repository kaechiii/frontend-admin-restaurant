import React from 'react'
import {HeaderTitleContainer, TransactionContainer} from './style';
import {useGetReviewQuery} from '../../store/api/menuApi'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';


function ReviewDetails() {
  const {id} = useParams();

  const navigate = useNavigate();

  const {
    data: review,
    error: getReviewError,
    isLoading: isLoadingReview,
   } = useGetReviewQuery({id});


  const renderTable = () => {
    if (getReviewError) {
        return 0;
      } if (review) {
        if (review.length === 0 || review.data === null) { return 0; }
        const array = review.data.map((data) => data);
        console.log(array);
        return array.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.order_detail_id}</td>
              <td>{data.description}</td>
              <td>{data.rating}</td>
            </tr>
          ));
      }
  }

  return (
    <>
    <NavBar></NavBar>
    <TransactionContainer>
      {isLoadingReview ? (
        <h1>Loading</h1>
      ) : (
        <>
        <HeaderTitleContainer>
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => {navigate('/review', { replace: true })}}></FontAwesomeIcon>
            <p>Review details</p>
            <div></div>
        </HeaderTitleContainer>
        <div className="tableContainer">
          <div className="tableStyle">
            <table>
              <thead>
                <tr>
                  <th>Review_id</th>
                  <th>Order_detail_id</th>
                  <th>Description</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {renderTable()}
              </tbody>
            </table>
          </div>
        </div>
        </>
        
      )}
    </TransactionContainer>
    </>
  )
}

export default ReviewDetails