import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/header";
import { tokens } from "../../theme";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // Adding state
    // Saving array of events to put in calendar
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter event title");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();
        // Functionality for unselecting a date once it's clicked

        if (title){
            calendarApi.addEvent({
                // This will add event into calendar app
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (window.confirm(`Do you wish to delete event '${selected.event.title}'`)){
            selected.event.remove();
        }
    };

    return <Box m="20px">
        <Header title="CALENDAR" subtitle="Full Calendar Interactive Page"/>
        {/* Splitting between actual events and our calendar app */}
        <Box display="flex" justifyContent="space-between">
            
        </Box>
    </Box>
};

export default Calendar;