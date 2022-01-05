import React from 'react';
import './planning.css';

function Planning() {
  return (
    <div className="planning">
      <div className="planning-title">近8週的物料規劃:</div>
      <div className="planning-container">
        <div className="planning-entry">
          2/21: 送出成品: <div className="planning-item">80加州帝皇床墊</div>{' '}
          <div className="planning-item">40加寬雙人床墊</div>
          <div className="planning-item">40標準床墊</div>
        </div>
        <div className="planning-entry">
          2/14: 開始組裝 組裝內容: 80加州帝皇床墊 40加寬雙人床墊 40標準床墊{' '}
        </div>
        <div className="planning-entry">
          2/07: 送出成品: 100加州帝皇床墊 50加寬雙人床墊 30標準床墊
          <div className="planning-item"> 開始組裝床表、彈簧體、床體 </div>
          組裝內容: 80加州帝皇床表、彈簧體、床體 40加寬雙人床表、彈簧體、床體
          40標準床表、彈簧體、床體
        </div>
        <div className="planning-entry">
          1/31: 開始組裝床墊 組裝內容:{' '}
          <div className="planning-item">100加州帝皇床墊</div>
          <div className="planning-item">50加寬雙人床墊</div>
          <div className="planning-item"> 30標準床墊</div>
          送出訂單 訂單內容: 表布360、彈簧66000、彈簧筒13200、間棉360{' '}
        </div>
        <div className="planning-entry">
          1/24: 開始組裝床表、彈簧體、床體 組裝內容:
          <div className="planning-item">
            100加州帝皇床表、彈簧體、床體 50加寬雙人床表、彈簧體、床體
          </div>
          30標準床表、彈簧體、床體 送出訂單 訂單內容: 車花360、拉鍊160、泡棉440{' '}
        </div>
        <div className="planning-entry">
          1/17: 送出訂單 訂單內容: 表布410、彈簧77500、彈簧筒15500、間棉410
          散熱層1280
        </div>
        <div className="planning-entry">
          1/10: 送出訂單 訂單內容: 車花410、拉鍊210、泡棉510
        </div>
        <div className="planning-entry">
          1/03: 送出訂單 訂單內容: 散熱層1500
        </div>
      </div>
    </div>
  );
}

export default Planning;
