import React, { useEffect, useState } from 'react';
import './order.css';
import axios from 'axios';
import OrderEntry from '../Components/OrderEntry';
import Loader from 'react-loader-spinner';
import { AiFillDelete } from 'react-icons/ai';
import SuccessMsg from '../Components/SuccessMsg';

function Order() {
  const [orders, setOrders] = useState([]);
  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [name, setName] = useState();
  const [product, setProduct] = useState();
  const [date, setDate] = useState();
  const [quantity, setQuantity] = useState();
  const [loading, setLoading] = useState(false);
  const [delay, setDelay] = useState('0');
  const api_url = 'https://python-nccu-mis.herokuapp.com/order';
  let deleteNum = 0;

  const changeState = () => {
    setLoading(!loading);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  useEffect(() => {
    changeState();
    // eslint-disable-next-line
  }, [orders]);

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
        setName('');
      })
      .then(() => {
        fetchOrder();
      })
      .catch((error) => console.log(error));
  };

  const deleteOrder = async () => {
    deleteNum = Number(
      window.prompt('The order you want to delete (Order ID)', '')
    );
    await axios.delete(api_url + `/${deleteNum}`);
    alert('Delete Suceess!');
    setLoading(!loading);
    await fetchOrder();
  };

  if (loading) {
    return (
      <div className="order">
        <div className="create-order">
          <div className="create-order-text">Create Order</div>
          <div className="create-order-container">
            <input
              type="text"
              placeholder="ID"
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
                if (e.target.value === 'BeautyCare????????????') {
                  setName('BeautyCare????????????');
                  setProduct(1);

                  setPrice(68500);
                } else if (e.target.value === 'BeautyRest????????????') {
                  setName('BeautyCare????????????');
                  setProduct(2);
                  setPrice(58000);
                } else {
                  setName('BeautyCare????????????');
                  setProduct(3);
                  setProduct(50000);
                }
              }}
            >
              <option>Select Product </option>
              <option>BeautyCare????????????</option>
              <option>BeautyRest????????????</option>
              <option>BeautyRest??????</option>
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
          <div className="loading-container">
            <Loader type="Oval" color="#777" height={100} width={100} />
          </div>
        </div>
      </div>
    );
  } else {
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
                if (e.target.value === 'BeautyCare????????????') {
                  setName('BeautyCare????????????');
                  setProduct(1);

                  setPrice(68500);
                } else if (e.target.value === 'BeautyRest????????????') {
                  setName('BeautyCare????????????');
                  setProduct(2);
                  setPrice(58000);
                } else {
                  setName('BeautyCare????????????');
                  setProduct(3);
                  setProduct(50000);
                }
              }}
            >
              <option>Select Product </option>
              <option>BeautyCare????????????</option>
              <option>BeautyRest????????????</option>
              <option>BeautyRest??????</option>
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
                setDelay('5000');
              }}
            >
              create
            </button>
          </div>
        </div>
        <div className="order-table-title">
          <div className="Date">Order Date</div>
          <div className="memberId">Member ID</div>
          <div className="orderId">Order ID</div>
          <div className="Amount">Amount</div>
        </div>
        <div className="orderlist">
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
          <button
            className="delete-btn"
            onClick={() => {
              deleteOrder();
            }}
          >
            <AiFillDelete size={20} />
          </button>
        </div>
        <SuccessMsg delay={delay} message="Order Created!" />
      </div>
    );
  }
}

export default Order;
