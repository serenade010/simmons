import { React, useEffect, useState } from 'react';
import './sales.css';
import axios from 'axios';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Sales() {
  const api_url = 'https://simmons-stage-backend.herokuapp.com/ssale';

  // const [sales, setSales] = useState([]);

  const [allsale, setAllsale] = useState([]);

  // const fetchSales = async () => {
  //   axios.get(api_url).then((response) => {
  //     setSales(response.data);
  //     sales.map((sale) => {
  //       return (sale.deux = sale.season + '/' + sale.year);
  //     });
  //     setSales(sales);
  //   });
  // };

  const fetchAllSales = async () => {
    axios.get(api_url).then((response) => {
      const salesData = response.data.map((data, i) => {
        data.index = data.year.toString() + ' Q' + data.season.toString();
        return data;
      });
      setAllsale(salesData);
    });
  };

  // const fetchAnnualSales = async () => {
  //   axios.get(`${api_url}/year/${year}`).then((response) => {
  //     setSale(response.data);
  //   });
  // };

  useEffect(() => {
    // fetchSales();
    fetchAllSales();
    // fetchAnnualSales();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="sales">
      <div className="sales-title">Sales</div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={allsale}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              dataKey="index"
              scale="band"
              style={{
                fontSize: '2rem',
              }}
            />
            {/* <XAxis dataKey= scale="band" /> */}
            <YAxis
              style={{
                fontSize: '2rem',
              }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="sale" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="sale" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Sales;
