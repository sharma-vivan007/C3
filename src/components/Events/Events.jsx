import React from "react";
import "./Events.css"; // You'll define the styles here
import { event_list } from "../../assets/assets";

const UpcomingEvents = () => {
  return (
    <div className="events-container">
      {event_list.map((event) => (
        <div key={event._id} className="event-card">
          <img src={event.image} alt={event.name} className="event-image" />
          <div className="event-details">
            <h3 className="event-name">{event.name}</h3>
            <p className="event-date">{event.Date}</p>
            <p className="event-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvents;
