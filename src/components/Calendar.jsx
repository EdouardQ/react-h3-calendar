import { useContext } from "react";
import {CalendarContext} from "../context/calendarContext";
import {CalendarHeader} from "./CalendarHeader";

export const Calendar = (props) => {
    const calendar = useContext(CalendarContext);

    let generateTable = () => {
        let dates = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: []
        };

        const calendarData = calendar.calendar;

        for (let i = 0; i < calendarData[0].getUTCDay(); i++) {
            dates[i].push('');
        }

        calendarData.forEach((date) => {
            dates[date.getUTCDay()].push(date.getDate());
        })

        for (let i = calendarData[calendarData.length-1].getUTCDay()+1; i < 7; i++) {
            dates[i].push('');
        }

        let data = '';

        for (let i = 0; i < 5; i++) {
            data += '<tr>';
            for (let j = 0; j < 7; j++) {
                data += `<td>${dates[j][i]}</td>`
            }
            data += '</tr>';
        }

        return data;
    };

    const data = generateTable();

    return (
        <div>
            <br/>
           <CalendarHeader></CalendarHeader>
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