import React, { useEffect, useState } from 'react';
import MemberEntry from '../Components/MemberEntry';
import './member.css';
import CountUp from 'react-countup';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import SuccessMsg from '../Components/SuccessMsg';

function Member() {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [delay, setDelay] = useState('0');
  const [loading, setLoading] = useState(false);

  const changeState = () => {
    setLoading(!loading);
  };

  useEffect(() => {
    fetchMember();
  }, []);
  useEffect(() => {
    changeState();
    // eslint-disable-next-line
  }, [members]);
  const api_url = 'https://python-nccu-mis.herokuapp.com/member';
  const fetchMember = async () => {
    axios
      .get(api_url)
      .then((response) => setMembers(response.data))
      .catch((error) => console.log(error));
  };

  const createMember = async () => {
    axios
      .post(api_url, {
        member_name: name,
        sex: sex,
        age: age,
      })
      .then((response) => {
        setLoading(!loading);
        fetchMember();
        setAge('');
        setSex('');
        setName('');
      })
      .catch((error) => console.log(error));
  };
  if (loading) {
    return (
      <div className="member">
        <div className="member-header">
          <div>Member</div>
        </div>
        <div className="member-dash">
          <div className="table-container">
            <div className="table-title">
              <div className="id">ID</div>
              <div className="name">Name</div>
              <div className="sex">Sex</div>
              <div className="age">Age</div>
              <div className="monetary">Monetary</div>
            </div>

            <div className="loading-container">
              <Loader type="Oval" color="#777" height={100} width={100} />
            </div>
          </div>
          <div className="right-side">
            <div className="create-container">
              <div className="create-text">Create Member</div>
              <div className="create-form">
                <input
                  type="text"
                  placeholder="Name"
                  className="order-form-home"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Sex"
                  className="order-form-home"
                  value={sex}
                  onChange={(e) => {
                    setSex(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Age"
                  className="order-form-home"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    createMember();
                  }}
                >
                  Create
                </button>
              </div>
            </div>
            <div className="data-container">
              <div className="member-count">
                <CountUp
                  start={0}
                  end={members.length}
                  duration={1}
                  className="count-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="member">
        <div className="member-header">
          <div>Member</div>
        </div>
        <div className="member-dash">
          <div className="table-container">
            <div className="table-title">
              <div className="id">ID</div>
              <div className="name">Name</div>
              <div className="sex">Sex</div>
              <div className="age">Age</div>
              <div className="monetary">Monetary</div>
            </div>

            {members.map((member) => {
              return (
                <MemberEntry
                  key={member.id}
                  id={member.id}
                  name={member.member_name}
                  sex={member.sex}
                  age={member.age}
                  residence={member.residence}
                  monetary={member.monetary}
                />
              );
            })}
          </div>
          <div className="right-side">
            <div className="create-container">
              <div className="create-text">Create Member</div>
              <div className="create-form">
                <input
                  type="text"
                  placeholder="Name"
                  className="order-form-home"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Sex"
                  className="order-form-home"
                  value={sex}
                  onChange={(e) => {
                    setSex(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Age"
                  className="order-form-home"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    createMember();
                    setDelay('5000');
                  }}
                >
                  Create
                </button>
              </div>
            </div>
            <div className="data-container">
              <div className="member-count">
                <CountUp
                  start={0}
                  end={members.length}
                  duration={1}
                  className="count-up"
                />
              </div>
            </div>
          </div>
        </div>
        <SuccessMsg delay={delay} message="Member Created!" />
      </div>
    );
  }
}

export default Member;
