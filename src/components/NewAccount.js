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
      {
        props.showNewAccForm ?
        <AccountForm onSaveAccountData={saveAccountDateHandler} ownerList={props.owners} />
        :null
      }
    </div>
  );
};

export default NewAccount;
