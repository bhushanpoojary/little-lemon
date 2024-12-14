import { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
   
  const handleChange = (e) => {
    setDate(e);
  }  
  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={(e)=> handleChange(e.target.value)}/>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        {props.availableTimes.map(time => <option key={time}>{time}</option>)}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e)=> setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
