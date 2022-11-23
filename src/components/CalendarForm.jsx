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

    for (let i = 1970; i <= 2050; i++) {
        dates.years.push(i);
    }

    return(
        <div className="w-25 d-inline-block">
            <form className="w-50 m-auto flex">
                <select id="month-select" className="form-select">
                    {dates.months.map(((value, i) => <option value={i+1}>{value}</option>))}
                </select>
                <select id="year-select" className="form-select">
                    {dates.years.map((value => <option value={value}>{value}</option>))}
                </select>
            </form>
        </div>
    );
}
