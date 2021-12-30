import React, { useEffect, useState } from 'react';
import MemberEntry from '../Components/MemberEntry';
import './member.css';
import CountUp from 'react-countup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Member() {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  useEffect(() => {
    fetchMember();
  }, []);
  const api_url = 'http://127.0.0.1:5000/member';
  const fetchMember = async () => {
    const response = await fetch(api_url);
    const data = await response.json();
    setMembers(data);
  };

  const createMember = async () => {
    await fetch(api_url, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        member_name: name,
        sex: sex,
        age: age,
      }),
    });

    await fetchMember();
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
              <form className="create-form">
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1.5, width: '33ch' },
                  }}
                  noValidate
                  autoComplete="off"
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
              </form>
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
              <p className="members-currently">members currently</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Member;
