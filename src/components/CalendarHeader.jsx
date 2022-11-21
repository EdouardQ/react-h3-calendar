import {useContext} from "react";
import {CalendarHeaderContext} from "../context/calendarHeaderContext";


export const CalendarHeader = (props) => {
    const {calendarHeader} = useContext(CalendarHeaderContext);

    return(
        <div>
            <button className="btn btn-primary">Prev</button>
            Var
            <button className="btn btn-primary">Suiv</button>
        </div>
    );
}