import axios from 'axios';
import { React, useEffect, useState } from 'react';
import CustomerCard from '../Components/CustomerCard';
import './customer.css';

function Customer() {
  const api_url = 'http://127.0.0.1:5000/active-rate';
  const [datas, setDatas] = useState([]);
  const fetchdata = async () => {
    axios.get(api_url).then((response) => {
      setDatas(response.data);
    });
  };

  useEffect(() => {
    fetchdata();
  });
  return (
    <div className="customer">
      {datas.map((data) => {
        return (
          <CustomerCard
            key={data.member_id}
            active_rate={data.active_rate}
            months_ago_purchase={data.months_ago_purchase}
            name={data.name}
            purchase_time={data.purchase_time}
          />
        );
      })}
    </div>
  );
}

export default Customer;
