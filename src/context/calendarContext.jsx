import { createContext, useState } from "react";
import {CalendarGeneratorService} from "../services/calendarGeneratorService";

export const CalendarContext = createContext();

export const CalendarProvider = (props) => {
    const now = new Date(Date.now());
    const [calendar, setCalendar] = useState(CalendarGeneratorService(now.getFullYear(), now.getMonth()));

    return (
        <CalendarContext.Provider value={{ calendar: calendar, setCalendar }}>
            {props.children}
        </CalendarContext.Provider>
    );
};