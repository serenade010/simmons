import React from 'react';
import './memberEntry.css';

function MemberEntry(props) {
  return (
    <div className="entry">
      <div className="id">{props.id}</div>
      <div className="name">{props.name}</div>
      <div className="sex">{props.sex}</div>
      <div className="age">{props.age}</div>
      <div className="monetary">{props.monetary}</div>
    </div>
  );
}

export default MemberEntry;
