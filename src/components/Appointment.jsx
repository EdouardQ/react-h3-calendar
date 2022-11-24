import {useContext} from "react";
import {AppointmentContext} from "../context/appointmentContext";

export const Appointment = (props) => {
    const { appointment } = useContext(AppointmentContext);

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