import React from 'react';
import './customer.css';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Customer() {
  return (
    <div className="customer">
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Customer;

const data = [
  {
    name: '10/10',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '10/20',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '10/30',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '11/10',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '11/20',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '11/30',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '12/10',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
