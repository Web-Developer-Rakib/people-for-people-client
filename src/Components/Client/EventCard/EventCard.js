import React from "react";
import childSupport from "../../../img/childSupport.png";
import "./EventCard.css";

const EventCard = () => {
  return (
    <div className="event-card">
      <img src={childSupport} alt="" className="card-img" />
      <h3 className="card-title">Child Support</h3>
    </div>
  );
};

export default EventCard;
