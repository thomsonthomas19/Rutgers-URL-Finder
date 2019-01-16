// taken from pupster
import React from 'react';

const Button = ({className, onClick, children}) => {
  console.log(className);

  return (
    <button 
      onClick={onClick} 
      className={className}>
      {children}
    </button>
  )
}

export default Button;