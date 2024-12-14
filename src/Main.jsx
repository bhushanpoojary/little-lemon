import CallToAction from "./CallToAction"
import Home from "./Home"
import BookingPage from "./BookingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useReducer } from "react";
import ConfirmedBooking from "./ConfirmedBooking";



const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

function initializeTimes() {
    return fetchAPI(new Date());
}

function updateTimes(state, date) {
    console.log(date);
    return [...fetchAPI(new Date(date))];
}
const initialAvailableTimesState = [...initializeTimes()]; 
export default function Main() {
    //const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    const [state, dispatch] = useReducer(updateTimes, initialAvailableTimesState);
    return <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={state} updateTimes={dispatch} submitAPI={submitAPI}/>}></Route>
                <Route path="/booking-confirmed" element={<ConfirmedBooking/>}></Route>
            </Routes>
    </main>
}