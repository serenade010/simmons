import { React, useEffect, useState } from 'react';
import './analytics.css';
import { FaJenkins, FaCrown } from 'react-icons/fa';
import Loader from 'react-loader-spinner';
import axios from 'axios';

function Analytics() {
  const api_url = 'https://python-nccu-mis.herokuapp.com/rfm';
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    axios.get(api_url).then((response) => {
      setMembers(response.data);
    });
  };
  const changeState = () => {
    setLoading(!loading);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    changeState();
    // eslint-disable-next-line
  }, [members]);

  if (loading) {
    return (
      <div className="analytics">
        <div className="ana-container">
          <div className="ana-text">根據RFM分析結果所得出的最具價值客戶群</div>
          <div className="loading">
            <Loader type="Oval" color="#777" height={100} width={100} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="analytics">
        <div className="ana-container">
          <div className="ana-text">根據RFM分析結果所得出的最具價值客戶群</div>
          <div className="member-container">
            {members.map((member) => {
              return (
                <div className="rfm-card" key={member.id}>
                  <div className="rfm-crown-icon">
                    <FaCrown size={50} />
                  </div>
                  <FaJenkins size={80} />
                  <div> Name: {member.member_name}</div>
                  <div>Age: {member.age}</div>
                  <div> Monetary: {member.monetary}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;
