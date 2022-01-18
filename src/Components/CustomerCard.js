import React from 'react';
import './customerCard.css';
import { AiOutlineUser } from 'react-icons/ai';
function CustomerCard(props) {
  return (
    <div className="customer-card">
      <AiOutlineUser size={80} />
      <div className="name">{props.name}</div>
      <div className="active-rate">active-rate:{props.active_rate}</div>
      <div className="months_ago_purchase">
        last purchase:{props.months_ago_purchase}m
      </div>
      <div className="purchase_time">{props.purchase_time} times</div>
    </div>
  );
}

export default CustomerCard;
