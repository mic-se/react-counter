import React from 'react';

const ActionButton = ({ className, onClick, label }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default ActionButton;
