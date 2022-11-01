import moment from 'moment';

const formatDate = (date) => {
  const formattedDate = moment(date).format('D MMMM YYYY - h:mm');

  return formattedDate;
};

const formatIDR = (balance) => {
    const newBalance = balance.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    return newBalance;
};

export {formatDate, formatIDR};
