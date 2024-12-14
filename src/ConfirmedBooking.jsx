import { Link } from "react-router-dom";
const ConfirmedBooking = () => {
    return <>
        <h1>Booking has been confirmed</h1>
        <button>
            <Link to="/booking">Booking</Link>
        </button>
    </>
}

export default ConfirmedBooking;