import React from "react";

const Alert = ({ alert }) => {
  // If no alert exists, don't render anything
  if (!alert) {
    return null;
  }

  // Log alert details for debugging
  console.log("message", alert.message, alert.type);

  return (
    <div>
      <div className={`alert alert-${alert.type}`} role="alert">
        {alert.message}
      </div>
    </div>
  );
};

export default Alert;
