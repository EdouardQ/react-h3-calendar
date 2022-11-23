import {CalendarForm} from "./CalendarForm";

export const CalendarHeader = (props) => {

    return(
        <div>
            <div className="">
                <button className="btn btn-primary btn-date">Prev</button>
                <CalendarForm currentDate={props.currentDate}></CalendarForm>
                <button className="btn btn-primary btn-date">Next</button>
            </div>
        </div>
    );
}