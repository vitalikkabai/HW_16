import React from "react";
import "./Contacts.css";

const renderingGenderIcon = (gender) => {
  if (gender === "male") {
    return "fas fa-mars";
  } else if (gender === "female") {
    return "fas fa-venus";
  } else {
    return "fas fa-genderless";
  }
}




const Contact = (props) => (
  <div className="contactInfo">
    <span>{props.info.firstName}</span>
    <span>{props.info.lastName}</span>
    <span>{props.info.phone}</span>
    <i className={renderingGenderIcon(props.info.gender)}></i>
  </div>
);

export default Contact;
