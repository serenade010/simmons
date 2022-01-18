import { React, useState } from 'react';
import datas from './predictionData';
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
import './prediction.css';

function Prediction() {
  const [data, setData] = useState(datas.data1);
  const [name, setName] = useState('BeautyCare加州帝皇');
  return (
    <div className="prediction">
      <div className="predict-text">Prediction</div>
      <div className="predict-input">
        <select
          className="order-form-predict"
          value={name}
          onChange={(e) => {
            if (e.target.value === 'BeautyCare加州帝皇') {
              setData(datas.data1);
              setName('BeautyCare加州帝皇');
            } else if (e.target.value === 'BeautyRest加寬雙人') {
              setData(datas.data2);
              setName('BeautyRest加寬雙人');
            } else {
              setData(datas.data3);
              setName('BeautyRest標準');
            }
          }}
        >
          <option>BeautyCare加州帝皇</option>
          <option>BeautyRest加寬雙人</option>
          <option>BeautyRest標準</option>
        </select>
      </div>
      <div className="predict-chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              style={{
                fontSize: '2rem',
              }}
            />
            <YAxis
              style={{
                fontSize: '3rem',
              }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="data"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              style={{
                fontSize: '3rem',
              }}
            />
            <Line type="monotone" dataKey="estimation" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Prediction;
