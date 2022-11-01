import styled from 'styled-components';

const TransactionContainer = styled.div`
  padding: 1rem 5rem;
  display:flex;
  flex-direction: column;
  overflow-x: auto;
  padding-left: 80px;

  .WelcomeAccoutheader{
    display: flex;
    
    .headerName{
      display: flex;
      flex-direction: row;
    }
    
    .headerAccount{
      display: flex;
      h4{
        font-weight: 400;
      }
    }
  }

  .BalanceHeader{
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  .tableContainer{
    .filterContainer{
        display:flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: right;
        gap: 1rem;
        p{
          color: gray;
          font-weight: 300;
        }

        select{
          padding: 0.8rem 0.8rem;
          color: gray;
          border-color: rgba(237,237,237,255);
          background-color: rgba(246,246,246,255);
          font-size: 0.9rem;
          border-radius: 0.3rem;
        }
      }
      .sortContainer{
        display:flex;
        align-items: center;
        gap: 1rem;

        p{
          color: gray;
          font-weight: 300;
        }

        select{
          padding: 0.8rem 0.8rem;
          color: gray;
          border-color: rgba(237,237,237,255);
          background-color: rgba(246,246,246,255);
          font-size: 0.9rem;
          border-radius: 0.3rem;
        }

        input{
          padding: 0.8rem 1rem;
          color: gray;
          border-color: rgba(237,237,237,255);
          background-color: rgba(246,246,246,255);
          border-radius: 0.3rem;
          font-size: 0.9rem;
          border-top: thin;
          border-left: thin;
          &:focus {
            outline: none;
          }
        }
      }
    

    padding-top: 5rem;
    .tableStyle{
    text-align: left;
    padding-top: 1rem;

    table {
      border-collapse: collapse;
      width: 100%;
      text-align: center;
    }

    td, th {
      border: 1px solid rgba(237,237,237,255);
      padding: 1rem 1rem;
    }

    tr:nth-child(even) {
      background-color: rgba(246,246,246,255);
    }

    tr:first-child {
      
      th{
        padding: 1.2rem 1rem;
      }
      th:first-child{
        width: 5%;
      }
      th:nth-child(2){
        width: 15%;
      }
      th:nth-child(3){
        width: 5%;
      }
      th:nth-child(4){
        width: 25%;
      }
      th:nth-child(5){
        width: 25%;
      }
      th:nth-child(6){
        width: 15%;
      }
    }      
  }
  }
`;

const StyledTD = styled.td`
  border: none !important;
  display: flex;
  justify-content: center;
  img{
    width: 100px;
  }

  span{
    color: crimson;
  }
  padding: 0 !important;
`

const StyledTR = styled.tr`
  background-color: transparent !important;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  align-content: space-between;
  flex-direction: column;
`

const FlexContainer = styled.div`
  display:flex;
  min-width: 450px;
  gap: 30px;
`

const ImageContainer = styled.div`
  width: 50%;
`

const ToppingSizeContainer = styled.div`
  display:flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  text-align: left !important; 
  justify-content: center;
`

const PriceQuantityContainer = styled.div`
  display:flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  text-align: center !important; 
  justify-content: center;
`

const FlexColumn = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`


export { PriceQuantityContainer, FlexColumn, ImageContainer, ToppingSizeContainer, FlexContainer, TransactionContainer, StyledTD, StyledTR};