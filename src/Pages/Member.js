import React, { useEffect, useState } from 'react';
import MemberEntry from '../Components/MemberEntry';
import './member.css';
import CountUp from 'react-countup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function Member() {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  useEffect(() => {
    fetchMember();
  }, []);
  const api_url = 'https://simmons2-backend.herokuapp.com/member';
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
        fetchMember();
      })
      .catch((error) => console.log(error));
  };

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
            <div className="create">
              <div className="create-text">Create Member</div>
              <div className="create-form">
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1.0, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                  className='box-form'
                >
                  <TextField
                    id="name-basic"
                    label="name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <TextField
                    id="sex-basic"
                    label="sex"
                    variant="outlined"
                    value={sex}
                    onChange={(e) => {
                      setSex(e.target.value);
                    }}
                  />
                  <TextField
                    id="age-basic"
                    label="age"
                    variant="outlined"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </Box>

                <button
                  onClick={() => {
                    createMember();
                  }}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
          <div className="data-container">
            <div className="member-count">
              <CountUp
                start={0}
                end={members.length}
                duration={2}
                className="count-up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Member;
