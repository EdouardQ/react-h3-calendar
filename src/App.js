import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Outlet} from "react-router-dom";
import {AppointmentProvider} from "./context/appointmentContext";


function App() {
  return (
    <div className="App">
        <AppointmentProvider>
            <Outlet />
        </AppointmentProvider>
    </div>
  );
}

export default App;
