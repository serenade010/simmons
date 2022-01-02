import React from 'react';
import './orderEntry.css';

function OrderEntry(props) {
  return (
    <div className="orederEntry">
      <div className="date">
        {props.date.length > 10 ? props.date.substr(0, 10) : props.date}
      </div>
      <div className="member-id">{props.memberId}</div>
      <div className="order-id">{props.orderId}</div>
      <div className="amount">{props.amount}</div>
    </div>
  );
}

export default OrderEntry;
