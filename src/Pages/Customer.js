import axios from 'axios';
import { React, useEffect, useState } from 'react';
import CustomerCard from '../Components/CustomerCard';
import './customer.css';
import Loader from 'react-loader-spinner';

function Customer() {
  const api_url = 'https://python-nccu-mis.herokuapp.com/active-rate';
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchdata = async () => {
    axios.get(api_url).then((response) => {
      setDatas(response.data);
    });
  };
  const changeState = () => {
    setLoading(!loading);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    changeState();
    // eslint-disable-next-line
  }, [datas]);

  if (loading) {
    return (
      <div className="customer">
        <div className="loading-container">
          <Loader type="Oval" color="#777" height={100} width={100} />
        </div>
      </div>
    );
  } else {
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
}

export default Customer;
