import { createContext, useState } from "react";
import {CalendarGeneratorService} from "../services/calendarGeneratorService";

export const CalendarContext = createContext();

export const CalendarProvider = (props) => {
    const [calendar, setCalendar] = useState([]);

    return (
        <CalendarContext.Provider value={{ calendar: calendar, setCalendar }}>
            {props.children}
        </CalendarContext.Provider>
    );
};