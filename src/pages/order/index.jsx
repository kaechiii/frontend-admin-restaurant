import React from 'react'
import {FlexContainer, ImageContainer, PriceQuantityContainer, StyledTD, StyledTR, ToppingSizeContainer, TransactionContainer} from './style';
import {useGetOrderQuery} from '../../store/api/orderApi'
import {formatDate, formatIDR } from '../../helpers/formatter';
import { useState } from 'react';
import moment from 'moment';
import NavBar from '../../components/NavBar';

function Order() {

    const [showTable, setShowTable] = useState('thismonth');
    const {
        data: order,
        error: getOrderError,
        isLoading: isLoadingOrder,
      } = useGetOrderQuery();

  const renderTable = () => {
    if (getOrderError) {
        return 0;
      } if (order) {
        if (order.length === 0 || order.data === null) { return 0; }
        const array = order.data.map((data) => data);
        console.log(array);
        return array.filter((data) => customFilter(data)).map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{formatDate(data.CreatedAt)}</td>
              <td>{data.user_id}</td>
              <td>
                {
                  data.OrderDetail.map((data) => (
                    <StyledTR>
                      <StyledTD>
                        <FlexContainer>
                          <ImageContainer>
                            <img src={data.Menu.photo} alt="food.png"></img>
                            <p>{data.Menu.name}</p>
                          </ImageContainer>
                          <ToppingSizeContainer>
                            <div>
                              <p>Topping:</p>
                              <ul>
                                {renderTopping(data.topping)}
                              </ul>
                            </div>
                            <div>
                              <p>Size: {data.size}</p>
                            </div>
                          </ToppingSizeContainer>
                          <PriceQuantityContainer>
                            <p>Quantity x Price: </p>
                            <p>{data.quantity} x <span>{formatIDR(data.Menu.price)}</span></p>
                            <p>= <span>{formatIDR(data.quantity * data.Menu.price)}</span></p>
                          </PriceQuantityContainer>
                        </FlexContainer>
                        
                      </StyledTD>
                    </StyledTR>
                  ))
                }
              </td>
              <td>{formatIDR(data.CouponType.amount)}</td>
              <td>{formatIDR(data.price)}</td>
            </tr>
          ));
      }
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

  const renderTopping = (array) => {
    if (array === null || array.length === 0) {
      return (
        <li>No topping</li>
      )
    }
    return array.map((data) => (
      <li>{data}</li>
    )
    )
  }

  return (
    <>
    <NavBar></NavBar>
    <TransactionContainer>
      {isLoadingOrder ? (
        <h1>Loading</h1>
      ) : (
        <div className="tableContainer">
          <div className="filterContainer">
              <p>Show</p>
              <select value={showTable} onChange={handleChangeTable}>
                {tableOption.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
          </div>
          <div className="tableStyle">
            <table>
              <thead>
                <tr>
                  <th>Transaction_id</th>
                  <th>Date/Time</th>
                  <th>Customer_id</th>
                  <th>Menu</th>
                  <th>Discount</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {renderTable()}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </TransactionContainer>
    </>
  )
}

export default Order