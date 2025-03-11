import React from "react";
import "../App.css"

const Alert = ({ alert }) => {
  // If no alert exists, don't render anything
  if (!alert) {
    return null;
  }

  return (
    <div className="pos-bsolute w-100">
      <div className={`alert p-2.5 alert-${alert.type}`} style={{whiteSpace: "pre-wrap"}} role="alert">
        {alert.message}
      </div>
    </div>
  );
};

export default Alert;
