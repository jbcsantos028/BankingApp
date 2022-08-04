import React from "react";
import AccountForm from "./AccountForm";
import "./NewAccount.css";

const NewAccount = (props) => {
  const saveAccountDateHandler = (enteredAccountData) => {
    const accountData = {
      ...enteredAccountData,
      id: (Math.floor((1 + Math.random()) * 0x10000)).toString()
    }
    props.onAddAccount(accountData);
  }

  return (
    <div className="new-account">
      <AccountForm onSaveAccountData={saveAccountDateHandler} ownerList={props.owners} />
    </div>
  );
};

export default NewAccount;
