import React from 'react';

const EventDescription = ({ event }) => {
        console.log(event);
return(
            <div className="w3-container w3-card w3-round w3-margin-bottom" style={{backgroundColor: '#f0e7e7'}}>
                    <br/>
                    <h4>{event.eventName}</h4>
                    <br/>
                    <p>{event.eventDescription}</p>
                    <hr className="hrEvent"/>
                    <p>Center: {event.center.centerName}</p> {/* Ensure you're accessing the correct property */}
                    <p>Begins: {event.eventStartDate}</p>
                    <p>Ends: {event.eventEndDate}</p>
                    <p>Maximum number of participants: {event.maxParticipans}</p>
                    <p>Requirements: {event.eventRequirements}</p>
                    <button type="button" className="w3-button w3-margin-bottom"
                            style={{backgroundColor: '#A10135', color: '#f0e7e7'}}>
                            Join
                    </button>
            </div>
        );
}

export default EventDescription;
