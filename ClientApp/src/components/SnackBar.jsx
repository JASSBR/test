import React, { useEffect } from "react";
import "./Snackbar.css"
const Snackbar = ({ message, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return <div className="snackbar">{message}
  <span className="close" onClick={onClose}>x</span></div>;
};

export default Snackbar;
