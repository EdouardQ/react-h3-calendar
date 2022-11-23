import $ from "jquery";
import {useEffect} from "react";
import {UpdateTable} from "../services/calendarGeneratorService";

export const Calendar = () => {
    const currentDate = new Date(Date.now());
    let data = UpdateTable(currentDate);
    let table;

    let dates = {
        "months": [
            "january",
            "february",
            "mars",
            "april",
            "mai",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december"
        ],
        "years": []
    };

    for (let i = 1970; i <= 2050; i++) {
        dates.years.push(i);
    }

    useEffect(() => {
        table = $('tbody');
        $('#month-select').val(currentDate.getMonth());
        $('#year-select').val(currentDate.getFullYear());
        table.html(data);
    });

    const handleChange = (event) => {
        let month = $('#month-select').val();
        const year = $('#year-select').val();

        if (month.length < 2) {
            month = '0'+month;
        }

        data = UpdateTable(new Date(`${year}-${month}-01`));
        table.html(data);
    };

    return(
        <div>
            <br/>
           <div>
               <button className="btn btn-primary btn-date">Prev</button>
               <div className="w-25 d-inline-block">
                   <form className="w-50 m-auto flex">
                       <select id="month-select" className="form-select" onChange={handleChange}>
                           {dates.months.map(((value, i) => <option value={i+1}>{value}</option>))}
                       </select>
                       <select id="year-select" className="form-select" onChange={handleChange}>
                           {dates.years.map((value => <option value={value}>{value}</option>))}
                       </select>
                   </form>
               </div>
               <button className="btn btn-primary btn-date">Next</button>
           </div>
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
                <tbody>
                </tbody>
            </table>
        </div>
    );
}
