import {Calendar} from "./Calendar";
import {Appointment} from "./Appointment";
import {Form} from "./Form";

export const Home = () => {


    return (
        <div>
            <Calendar />
            <br/><br/><br/>
            <Form />
            <div>
                <table className="table table-striped w-75 m-auto">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Commentary</th>
                        </tr>
                    </thead>
                    <Appointment />
                </table>
            </div>
        </div>
    );
};