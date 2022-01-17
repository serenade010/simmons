import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Member from './Pages/Member';
import Order from './Pages/Order';
import Sales from './Pages/Sales';
import Customer from './Pages/Customer';
import Analytics from './Pages/Analytics';
import Inventory from './Pages/Inventory';
import Prediction from './Pages/Prediction';
import Planning from './Pages/Planning';
import { useState, useEffect } from 'react';
import View from './Pages/View';

function App() {
  const [current, setCurrent] = useState(() => {
    const saved = Number(localStorage.getItem('current'));
    return saved || 1;
  });
  useEffect(() => {
    localStorage.setItem('current', current);
  }, [current]);

  return (
    <Router>
      <div className="container">
        <div className="left">
          <Link
            to="/member"
            className="link"
            onClick={() => {
              setCurrent(1);
            }}
            id={current === 1 ? 'ddd' : ''}
          >
            <div className="title">Member</div>
          </Link>
          <Link
            to="/order"
            className="link"
            onClick={() => {
              setCurrent(2);
            }}
            id={current === 2 ? 'ddd' : ''}
          >
            <div className="title">Order</div>
          </Link>
          <Link
            to="/sales"
            className="link"
            onClick={() => {
              setCurrent(3);
            }}
            id={current === 3 ? 'ddd' : ''}
          >
            <div className="title">Sales</div>
          </Link>
          <Link
            to="/customer"
            className="link"
            onClick={() => {
              setCurrent(4);
            }}
            id={current === 4 ? 'ddd' : ''}
          >
            <div className="title">Customer</div>
          </Link>
          <Link
            to="/analytics"
            className="link"
            onClick={() => {
              setCurrent(5);
            }}
            id={current === 5 ? 'ddd' : ''}
          >
            <div className="title">Analytics</div>
          </Link>
          <Link
            to="/view"
            className="link"
            onClick={() => {
              setCurrent(6);
            }}
            id={current === 6 ? 'ddd' : ''}
          >
            <div className="title">View</div>
          </Link>
          <Link
            to="/inventory"
            className="link"
            onClick={() => {
              setCurrent(7);
            }}
            id={current === 7 ? 'ddd' : ''}
          >
            <div className="title">Inventory</div>
          </Link>
          <Link
            to="/prediction"
            className="link"
            onClick={() => {
              setCurrent(8);
            }}
            id={current === 8 ? 'ddd' : ''}
          >
            <div className="title">Prediction</div>
          </Link>
          <Link
            to="/planning"
            className="link"
            onClick={() => {
              setCurrent(9);
            }}
            id={current === 9 ? 'ddd' : ''}
          >
            <div className="title">Planning</div>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Member />}></Route>
        <Route path="/member" element={<Member />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
        <Route path="/analytics" element={<Analytics />}></Route>
        <Route path="/view" element={<View />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/prediction" element={<Prediction />}></Route>
        <Route path="/planning" element={<Planning />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
