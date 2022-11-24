import $ from "jquery";
import {useEffect} from "react";
import {UpdateTable} from "../services/calendarGeneratorService";

export const Calendar = () => {
    const currentDate = new Date(Date.now());
    let data = UpdateTable(currentDate);

    let table;
    let monthSelect;
    let yearSelect;

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
        monthSelect = $('#month-select');
        yearSelect = $('#year-select');

        monthSelect.val(currentDate.getMonth()+1);
        yearSelect.val(currentDate.getFullYear());

        table.html(data);

        handleCurrentClick(yearSelect.val(), monthSelect.val());
    });

    const handleChange = () => {
        let month = monthSelect.val();
        const year = yearSelect.val();

        if (month.length < 2) {
            month = '0'+month;
        }

        data = UpdateTable(new Date(`${year}-${month}-01`));
        table.html(data);

        handleCurrentClick(year, month);
    };

    const handleClick = (event) => {
        if (event.target.id === "btn-prev") {
            if (monthSelect.val() === '1') {
                if (yearSelect.val() !== '1970') {
                    monthSelect.val(12);
                    yearSelect.val(yearSelect.val()-1);
                }
            } else {
                monthSelect.val(monthSelect.val()-1);
            }
        } else if (event.target.id === "btn-next") {
            if (monthSelect.val() === '12') {
                if (yearSelect.val() !== '2050') {
                    monthSelect.val(1);
                    yearSelect.val(parseInt(yearSelect.val())+1);
                }
            } else {
                monthSelect.val(parseInt(monthSelect.val())+1);
            }
        }

        handleChange();
    };

    const handleCurrentClick = (year, month) => {
        if (year == currentDate.getFullYear() && month == currentDate.getMonth()+1) {

            $(`#${year}-${month}-${currentDate.getDate()}`).html(`<span id="circle">${currentDate.getDate()}</span>`);
            let circle = $('#circle');
            circle.css('border-radius', '50%');
            circle.css('background', '#33cc33');
        }
    };

    return(
        <div>
            <br/>
           <div>
               <button id="btn-prev" className="btn btn-primary btn-date" onClick={handleClick}>Prev</button>
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
               <button id="btn-next" className="btn btn-primary btn-date" onClick={handleClick}>Next</button>
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
