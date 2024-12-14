import BookingForm from "./BookingForm"
import { useState } from "react";
const BookingPage = (props)=> {
    // Define the initial state
    return <>
        <BookingForm availableTimes={props.availableTimes} updateTimes={props.updateTimes} submitAPI={props.submitAPI}/>
        </>
}

export default BookingPage;