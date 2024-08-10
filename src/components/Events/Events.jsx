import React from "react";
import "./Events.css"; // Define your styles here
import { event_list } from "../../assets/assets";

const UpcomingEvents = () => {
  return (
    <div className="events-wrapper">
      <h2 className="events-heading">Upcoming Events</h2>
      <div className="events-container">
        {event_list.map((event) => (
          <div key={event._id} className="event-card">
            <img src={event.image} alt={event.name} className="event-image" />
            <div className="event-details">
              <h3 className="event-name">{event.name}</h3>
              <p className="event-date">{event.Date}</p>
              <p className="event-description">{event.description}</p>
              <button className="btn btn-primary event-join-btn">
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
