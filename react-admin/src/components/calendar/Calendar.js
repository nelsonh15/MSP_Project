import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import NewEventDialog from './NewEventDialog';

function Calendar() {
  const [showNewEventDialog, setShowNewEventDialog] = useState(false);
  const [calendarEvents, setCalendarEvents] = useState([]);

  const addNewEvent = () => {
    setShowNewEventDialog(true);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const month = '' + (d.getMonth() + 1); // Months are zero indexed
    const day = '' + d.getDate();
    const year = d.getFullYear();
  
    return [month.padStart(2, '0'), day.padStart(2, '0'), year].join('-');
  };

  const handleEventDialogSubmit = async(title, description, startDate, endDate, repeat, clientName) => {
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
    const newEvent = {
      title: title,
      start: new Date(startDate),
      end: new Date(endDate)
    };

    setCalendarEvents([...calendarEvents, newEvent]);
    console.log(title, description, formattedStartDate, formattedEndDate, repeat, clientName)
  }

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  return (
    <div style={{ padding: '40px' }}>
      <NewEventDialog open={showNewEventDialog} onClose={() => setShowNewEventDialog(false)} onSubmit={handleEventDialogSubmit} />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView='dayGridMonth'
        customButtons={{
          addEventButton: {
            text: 'Add Event',
            click: addNewEvent
          }
        }}
        headerToolbar={{
          left: "timeGridDay,timeGridWeek,dayGridMonth",
          center: "title",
          right: "prev,next today addEventButton", // Add the custom button here
        }}
        weekends={true}
        events={calendarEvents}
        selectable={true}
        eventContent={renderEventContent}
        eventStartEditable={true}
      />
    </div>
  );
}

export default Calendar;
