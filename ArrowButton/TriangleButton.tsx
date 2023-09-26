import React from 'react';
import './TriangleButton.css'; // Create this CSS file for styling

const TriangleButton: React.FC = ({ children }) => {
  return <button className="triangle-button">{children}</button>;
};

export default TriangleButton;

