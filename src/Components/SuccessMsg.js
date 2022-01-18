import React, { useEffect, useState } from 'react';
import './successMsg.css';
import { BsCheckCircle } from 'react-icons/bs';

function SuccessMsg(props) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, props.delay);
  }, [props.delay]);

  return visible ? (
    <div className="successMsg">
      <BsCheckCircle size={25} color="white" />
      {props.message}
    </div>
  ) : (
    <div />
  );
}

export default SuccessMsg;
