import React, { useEffect, useState } from 'react';
import './order.css';
import axios from 'axios';
import OrderEntry from '../Components/OrderEntry';
function Order() {
  const [orders, setOrders] = useState([]);
  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [name, setName] = useState();
  const [product, setProduct] = useState();
  const [date, setDate] = useState();
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
        total_amount: price * quantity,
        product_id: product,
        quantity: quantity,
        date: date,
      })
      .then((response) => {
        fetchOrder();
        setId('');
        setProduct('');
        setQuantity('');
        setPrice('');
        setDate('');
      })
      .then(() => {
        fetchOrder();
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
            className="order-form-member"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <select
            className="order-form"
            value={name}
            onChange={(e) => {
              if (e.target.value === 'BeautyCare加州帝皇') {
                setName('BeautyCare加州帝皇');
                setProduct(1);

                setPrice(68500);
              } else if (e.target.value === 'BeautyRest加寬雙人') {
                setName('BeautyCare加州帝皇');
                setProduct(2);
                setPrice(58000);
              } else {
                setName('BeautyCare加州帝皇');
                setProduct(3);
                setProduct(50000);
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
            className="order-form-quatity"
            min={0}
            value={quantity}
            onChange={(e) => {
              setQuantity(Number(e.target.value));
            }}
          />
          <input
            className="oreder-date"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></input>
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
