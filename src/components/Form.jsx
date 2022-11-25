import {useContext, useState} from "react";
import {AppointmentContext} from "../context/appointmentContext";

export const Form = () => {
    const [form, setForm] = useState({
        title: "",
        date: "",
        commentary: ""
    });
    const appointementCont = useContext(AppointmentContext);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (e) => {
        const { title, date, commentary } = form;
        if (
            title.length > 0 &&
            date.length > 0
        ) {
            let newAppointmentList = [appointementCont.appointment];
            newAppointmentList.push({...form});
            appointementCont.setAppointment(newAppointmentList);
        } else {
            alert(
                "Invalid data"
            );
        }
        e.preventDefault();
    };

    return(
        <div className="w-25 m-auto">
            <h3>Add an appointment</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                />
                <input
                    type="datetime-local"
                    className="form-control"
                    name="date"
                    placeholder="Date"
                    value={form.date}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className="form-control"
                    name="commentary"
                    placeholder="Commentary"
                    value={form.commentary}
                    onChange={handleChange}
                />
                <br/>
                <input type="submit" className="btn btn-primary" value="Add appointment" />
            </form>
        </div>
    );
}