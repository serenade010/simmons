import React from 'react';
import InventoryEntry from '../Components/InventoryEntry';
import './inventory.css';

function Inventory() {
  return (
    <div className="inventory">
      <div className="inv-left">
        <div className="current-comp">Current Component</div>
        <div className="inv-left-list">
          <InventoryEntry name="表布" />
          <InventoryEntry name="車花" />
          <InventoryEntry name="床架" />
          <InventoryEntry name="間棉" />
          <InventoryEntry name="彈簧" />
          <InventoryEntry name="木板" />
          <InventoryEntry name="拉鍊" />
        </div>
      </div>
      <div className="inv-space"></div>
      <div className="inv-right">
        <div className="current-pro">Current Product</div>
        <div className="inv-left-list">
          <InventoryEntry name="帝皇" />
          <InventoryEntry name="雙人" />
          <InventoryEntry name="標準" />
          <InventoryEntry name="天空" />
          <InventoryEntry name="輝煌" />
          <InventoryEntry name="宏觀" />
          <InventoryEntry name="康妮" />
        </div>
      </div>
    </div>
  );
}

export default Inventory;
