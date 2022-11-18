import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {CalendarProvider} from "./context/calendarContext";
import {Outlet} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <CalendarProvider>
            <Outlet />
        </CalendarProvider>
    </div>
  );
}

export default App;
