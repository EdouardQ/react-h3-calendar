import {createContext, useState} from "react";
import {CalendarGeneratorService} from "../services/calendarGeneratorService";

export const CalendarHeaderContext = createContext();

export const CalendarHeaderProvider = (props) => {
    const now = new Date(Date.now());
    const [calendarHeader, setCalendarHeader] = useState(CalendarGeneratorService(now.getFullYear(), now.getMonth()));

    return (
        <CalendarHeaderContext.Provider value={{ calendarHeader: calendarHeader, setCalendarHeader }}>
            {props.children}
        </CalendarHeaderContext.Provider>
    );
};