import React, { useEffect, useState } from 'react';
import './order.css';
import axios from 'axios';
import OrderEntry from '../Components/OrderEntry';
function Order() {
  const [orders, setOrders] = useState([]);
  const [id, setId] = useState();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState();
  const api_url = 'http://127.0.0.1:5000/order';

  useEffect(() => {
    fetchOrder();
  }, []);
  const fetchOrder = async () => {
    axios
      .get(api_url)
      .then((response) => setOrders(response.data))
      .catch((error) => console.log(error));
  };

  const createOrder = async () => {
    axios
      .post(api_url, {
        member_id: id,
        total_amount: 50 * quantity,
        products: [{ product_id: 2, quantity: 10 }],
      })
      .then((response) => {
        fetchOrder();
        setId('');
        setProduct('');
        setQuantity('');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="order">
      <div className="create-order">
        <div className="create-order-text">Create Order</div>
        <div className="create-order-container">
          <input
            type="text"
            placeholder="member ID"
            className="order-form"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <select
            className="order-form"
            value={product}
            onChange={(e) => {
              if (e.target.value === 'BeautyCare加州帝皇') {
                setProduct(1);
              } else if (e.target.value === 'BeautyRest加寬雙人') {
                setProduct(2);
              } else {
                setProduct(3);
              }
            }}
          >
            <option>Select Product </option>
            <option>BeautyCare加州帝皇</option>
            <option>BeautyRest加寬雙人</option>
            <option>BeautyRest標準</option>
          </select>
          <input
            type="number"
            placeholder="Quantity"
            className="order-form"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          <button
            className="create-order-btn"
            onClick={() => {
              createOrder();
            }}
          >
            create
          </button>
        </div>
      </div>
      <div className="orderlist">
        <OrderEntry
          orderId="Order ID"
          memberId="Member ID"
          date="Date"
          amount="Amount"
          id="order-list-title"
        />
        {orders.map((order) => {
          return (
            <OrderEntry
              orderId={order.order_id}
              memberId={order.member_id}
              date={order.date}
              amount={order.total_amount}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Order;
