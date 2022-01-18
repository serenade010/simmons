import { React, useState } from 'react';
import './inventoryEntry.css';

function InventoryEntry(props) {
  const [time, setTime] = useState();
  const [risk, setRisk] = useState();
  const [znum, setZmun] = useState(0);
  const [rop, setRop] = useState(0);

  const calculateROP = () => {
    setRop(30 * time + Math.pow(25 * time, 0.5) * znum);
  };

  return (
    <div className="inv-entry">
      <div className="inv-name"> {props.name}</div>
      <div className="inv-time">
        <input
          type="number"
          placeholder={`前置時間: ${props.time}`}
          className="inv-form"
          min={0}
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            calculateROP();
          }}
        />
      </div>
      <div className="inv-rate">
        <select
          className="inv-form"
          value={risk}
          onChange={(e) => {
            setRisk(e.target.value);
            switch (Number(risk)) {
              case 10:
                setZmun(1.282);
                calculateROP();

                break;
              case 5:
                setZmun(1.645);
                calculateROP();
                break;
              case 2.5:
                setZmun(1.96);
                calculateROP();
                break;
              case 1:
                setZmun(2.326);
                calculateROP();
                break;
              case 0.5:
                setZmun(2.576);
                calculateROP();
                break;
              case 0.025:
                setZmun(3.291);
                calculateROP();
                break;
              default:
                setZmun(2.326);
                calculateROP();
            }
          }}
        >
          <option>缺貨風險 </option>
          <option>10</option>
          <option>5</option>
          <option>2.5</option>
          <option>1</option>
          <option>0.5</option>
          <option>0.025</option>
        </select>
      </div>
      <div className="rop">{rop.toFixed(2)}</div>
    </div>
  );
}

export default InventoryEntry;
