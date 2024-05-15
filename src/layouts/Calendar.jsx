import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'events'), (snapshot) => {
      const eventData = [];
      snapshot.forEach((doc) => {
        eventData.push({ id: doc.id, ...doc.data() });
      });
      setEvents(eventData);
    });

    return () => unsubscribe();
  }, []);

  const handleDateClick = async (arg) => {
    const title = prompt("Enter event title:");
    if (title) {
      try {
        await addDoc(collection(db, 'events'), {
          title: title,
          start: arg.date,
          allDay: arg.allDay
        });
        setEvents([...events, { title, start: arg.date, allDay: arg.allDay }]);
      } catch (error) {
        console.error("Error adding event to Firestore:", error);
      }
    }
  };

  const handleEventClick = (arg) => {
    const deleteEvent = window.confirm("Delete this event?");
    if (deleteEvent) {
      const updatedEvents = events.filter(event => event.id !== arg.event.id);
      setEvents(updatedEvents);
    }
  };

  return (
    <div style={{ background: "white", padding: "0 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}> 
      <div className="bg-blue-950 p- rounded-md flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/PlayerDashboard" className="block text-white hover:text-blue-100" style={{ fontSize: "1rem" , padding:"0.5rem"}}>
          Back                  
        </Link>
      </div>
      <div className="flex-grow text-center">
        <span className="text-white font-bolder" style={{ fontSize: "1.5rem" }}>Calendar Schedule</span>
      </div>
    </div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay"
          }}
          height="calc(100vh - 40px)" // Adjusted height to accommodate the back button
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          style={{ background: "white", width: "100%" }} 
        />
      </div>
    </div>
  );
}

export default Calendar;
