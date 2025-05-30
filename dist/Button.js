import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import './button.css';
export const Button = ({ children }) => {
    return _jsx("button", { className: "primary-btn", children: children });
};
