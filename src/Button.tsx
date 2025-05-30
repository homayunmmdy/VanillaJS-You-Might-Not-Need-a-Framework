import React from 'react'
import './button.css'

interface ButtonProps {
  children : React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="primary-btn">{children}</button>;
};