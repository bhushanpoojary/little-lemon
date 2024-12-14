import CallToAction from "./CallToAction"
import Home from "./Home"
import BookingPage from "./BookingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useReducer } from "react";

const initialAvailableTimesState = [...initializeTimes()]; 


function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function updateTimes(state, date) {
    return [...state.availableTimes, date];
}

export default function Main() {
    //const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    const [state, dispatch] = useReducer(updateTimes, initialAvailableTimesState);
    return <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={state}/>}></Route>
            </Routes>
    </main>
}