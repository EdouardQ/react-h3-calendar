export const CalendarGeneratorService = (year, month) => {
    const date = new Date(year, month, 1);

    const dates = [];

    while (date.getMonth() === month) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    return dates;
};

export const UpdateTable = (date) => {
    let dates = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: []
    };

    const calendarData = CalendarGeneratorService(date.getFullYear(), date.getMonth());

    for (let i = 0; i < calendarData[0].getUTCDay(); i++) {
        dates[i].push('');
    }

    calendarData.forEach((date) => {
        dates[date.getUTCDay()].push(date.getDate());
    })

    for (let i = calendarData[calendarData.length-1].getUTCDay()+1; i < 7; i++) {
        dates[i].push('');
    }

    for (let i = 0; i < 7; i++) {
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
