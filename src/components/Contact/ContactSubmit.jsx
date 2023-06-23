import React from "react";

const ContactSubmit = ({ submitData }) => {
  const { submitMessage } = submitData;
  return (
    <div className="submit__message-container">
      <h3 className="submit__message">{submitMessage}</h3>
    </div>
  );
};

export default ContactSubmit;
