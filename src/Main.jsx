import CallToAction from "./CallToAction"
import Home from "./Home"
import BookingPage from "./BookingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Main() {
    return <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/booking" element={<BookingPage/>}></Route>
            </Routes>
    </main>
}