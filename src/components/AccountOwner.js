import React from 'react';

import './AccountOwner.css';
import Card from "./Card";

const AccountOwner = (props) => {
  // const onNameClick = () => {
  //   console.log(props.name);
  // }
  return (
    <Card className="account-owner">
      <div className="account-id">{props.id}</div>
      <div className="account-owner__detail">
        <h2>{props.name}</h2>
        
        {/* Shawn Code */}
        <button onClick={() => props.tryModal(props.name)}>{props.name}</button> 

        <div className="account-owner__balance">&#8369;{props.balance}</div>
      </div>
    </Card>
  );
};

export default AccountOwner;
