import React from 'react';

import './ErrorModal.css';
import Card from './Card';

const ErrorModal = (props) => {
  return (
  <div>
    <div className="error-backdrop" onClick={props.onConfirm} />
    <Card className="error-modal">
      <header className="error-header">
        <h2>{props.title}</h2>
      </header>
      <div className="error-content">
        <p>{props.message}</p>
      </div>
      <footer className="error-action">
        <button onClick={props.onConfirm}>Okay</button>
      </footer>
    </Card>
  </div>
  );
};

export default ErrorModal;