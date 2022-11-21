import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {CalendarProvider} from "./context/calendarContext";
import {Outlet} from "react-router-dom";
import {CalendarHeaderProvider} from "./context/calendarHeaderContext";


function App() {
  return (
    <div className="App">
        <CalendarHeaderProvider>
            <CalendarProvider>
                <Outlet />
            </CalendarProvider>
        </CalendarHeaderProvider>
    </div>
  );
}

export default App;
