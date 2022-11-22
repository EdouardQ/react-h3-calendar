import {CalendarForm} from "./CalendarForm";

export const CalendarHeader = () => {

    return(
        <div>
            <div>
                <button className="btn btn-primary btn-date">Prev</button>
                Month / Year
                <button className="btn btn-primary btn-date">Next</button>
            </div>
            <br/>
            <CalendarForm></CalendarForm>
        </div>
    );
}