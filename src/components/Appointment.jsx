import {useContext, useEffect} from "react";
import {AppointmentContext} from "../context/appointmentContext";

export const Appointment = (props) => {
    let { appointment } = useContext(AppointmentContext);

    useEffect(() => {
        localStorage.clear();

        localStorage.setItem(appointment[0].title, JSON.stringify(appointment[0]));
        // console.log(JSON.parse(localStorage.getItem(appointment[0].title)));
    });

    return (
        <tbody>
            {appointment.map((object) => {
                return <tr>
                    <td>{object.title}</td>
                    <td>{object.date}</td>
                    <td>{object.commentary}</td>
                </tr>
            })}
        </tbody>
    );
};