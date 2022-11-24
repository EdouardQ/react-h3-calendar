import {createContext, useState} from "react";

export const AppointmentContext = createContext();

export const AppointmentProvider = (props) => {
    const [appointment, setAppointment] = useState([{
            'title': "Date de rendu",
            'date': '2022-11-25',
            'commentary': "Date à laquelle je dois rendre ce projet."
        }]);

    return (
        <AppointmentContext.Provider value={{appointment: appointment, setAppointment}}>
            {props.children}
        </AppointmentContext.Provider>
    );
};