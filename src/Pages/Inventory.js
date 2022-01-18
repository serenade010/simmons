import React from 'react';
import InventoryEntry from '../Components/InventoryEntry';
import './inventory.css';

function Inventory() {
  return (
    <div className="inventory">
      <div className="inv-left">
        <div className="current-comp">Current Component</div>
        <div className="inv-left-list">
          <InventoryEntry name="表布" time={7} />
          <InventoryEntry name="車花" time={21} />
          <InventoryEntry name="床架" time={14} />
          <InventoryEntry name="間棉" time={7} />
          <InventoryEntry name="彈簧" time={7} />
          <InventoryEntry name="木板" time={14} />
          <InventoryEntry name="拉鍊" time={7} />
        </div>
      </div>
      <div className="inv-space"></div>
      <div className="inv-right">
        <div className="current-pro">Current Product</div>
        <div className="inv-left-list">
          <InventoryEntry name="帝皇" time={7} />
          <InventoryEntry name="雙人" time={10} />
          <InventoryEntry name="標準" time={7} />
          <InventoryEntry name="天空" time={8} />
          <InventoryEntry name="輝煌" time={8} />
          <InventoryEntry name="宏觀" time={10} />
          <InventoryEntry name="康妮" time={8} />
        </div>
      </div>
    </div>
  );
}

export default Inventory;
