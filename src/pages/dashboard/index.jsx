import React from 'react'
import TransactionContainer from './style';
import {useGetOrderQuery} from '../../store/api/orderApi'
import {formatDate, formatIDR } from '../../helpers/formatter';
import { useState } from 'react';
import moment from 'moment';
import NavBar from '../../components/NavBar';

function Dashboard() {

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
        return array.filter((data) => customFilter(data)).map((data, index) => (
            <tr key={index}>
              <th>{data.id}</th>
              <th>{formatDate(data.CreatedAt)}</th>
              <th>{data.user_id}</th>
              <th>{data.PaymentType.payment_type_name}</th>
              <th>{formatIDR(data.price)}</th>
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
                  <th>Date</th>
                  <th>Customer_id</th>
                  <th>Payment method</th>
                  <th>Total price</th>
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

export default Dashboard