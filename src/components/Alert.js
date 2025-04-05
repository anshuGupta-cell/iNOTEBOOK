import React, {
  useContext
}from "react";
import "../App.css"
import {
  AlertContext
} from "../context/notes/NoteContext.js"

const Alert = (props) => {
  const alertContext = useContext(AlertContext)
  const {
    alert
  } = alertContext
  
  if (!alert) {
    return null;
  }
  
  return (
    <div className="pos-fixed z-i-100 w-100">
      <div className={`alert p-2 alert-${alert.type}`} style={{whiteSpace: "pre-wrap"}} role="alert">
        {alert.message}
      </div>
    </div>
  );
};

export default Alert;
