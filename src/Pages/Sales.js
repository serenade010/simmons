import { React, useEffect, useState } from 'react';
import './sales.css';
import axios from 'axios';

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

function Sales() {
  const api_url = 'http://127.0.0.1:5000/ssale';
  // const [sales, setSales] = useState([]);
  const [sale, setSale] = useState([]);
  const [year, setYear] = useState(2019);
  // const fetchSales = async () => {
  //   axios.get(api_url).then((response) => {
  //     setSales(response.data);
  //     sales.map((sale) => {
  //       return (sale.deux = sale.season + '/' + sale.year);
  //     });
  //     setSales(sales);
  //   });
  // };

  const fetchAnnualSales = async () => {
    axios.get(`${api_url}/year/${year}`).then((response) => {
      setSale(response.data);
    });
  };

  useEffect(() => {
    // fetchSales();
    fetchAnnualSales();
    // eslint-disable-next-line
  }, [year]);

  return (
    <div className="sales">
      <div className="sales-title">Sales</div>
      <select
        className="sale-year-select"
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
        }}
      >
        <option>Select Year </option>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
      </select>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={sale}
            // margin={{
            //   top: 5,
            //   right: 30,
            //   left: 20,
            //   bottom: 5,
            // }}
          >
            <CartesianGrid strokeDasharray="50 1" />
            <XAxis dataKey="season" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sale"
              stroke="#8884d8"
              activeDot={{ r: 10 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Sales;
