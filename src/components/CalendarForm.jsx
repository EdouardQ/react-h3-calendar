export const CalendarForm = () => {
    let dates = {
        "months": [
            "january",
            "february",
            "mars",
            "april",
            "mai",
            "june",
            "july",
            "september",
            "october",
            "november",
            "december"
        ],
        "years": []
    };

    for (let i = 1970; i <= 2030; i++) {
        dates.years.push(i);
    }

    return(
        <div>
            <form className="w-25 m-auto">
                <select id="months" className="form-select d-inline-block w-25">
                    {dates.months.map((value => <option value={value}>{value}</option>))}
                </select>
                <select id="years" className="form-select d-inline-block w-25">
                    {dates.years.map((value => <option value={value}>{value}</option>))}
                </select>
            </form>
        </div>
    );
}
