import {CalendarHeader} from "./CalendarHeader";
import {UpdateTable} from "../services/calendarGeneratorService";
import {useEffect} from "react";
import $ from "jquery";

export const Calendar = () => {
    const currentDate = new Date(Date.now());
    let data = UpdateTable(currentDate);

    useEffect(() => {
        $('#month-select').val(currentDate.getMonth());
        $('#year-select').val(currentDate.getFullYear());
    });


    return (
        <div>
            <br/>
           <CalendarHeader currentDate={currentDate}></CalendarHeader>
            <br/><br/>
            <table className="table w-50 m-auto">
                <thead>
                    <tr>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                    </tr>
                </thead>
                <tbody dangerouslySetInnerHTML={{__html: data}}>
                </tbody>
            </table>
        </div>
    );
}