import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css"

const BookingForm = (props) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.date) {
        errors.date = "Date is required";
      }
      if (!values.time) {
        errors.time = "Time is required";
      }
      if (!values.guests) {
        errors.guests = "Number of guests is required";
      }
      if (!values.occasion) {
        errors.occasion = "Occasion is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      if (props.submitAPI(values)) {
        navigate('/booking-confirmed');
      }
    },
  });

  const handleDateChange = (e) => {
    formik.handleChange(e);
    props.updateTimes(e.target.value);
  };

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={formik.handleSubmit}>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formik.values.date}
        onChange={handleDateChange}
        required
      />
      {formik.errors.date && <div style={{ color: "red" }}>{formik.errors.date}</div>}

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        name="time"
        value={formik.values.time}
        onChange={formik.handleChange}
        required
      >
        {props.availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      {formik.errors.time && <div style={{ color: "red" }}>{formik.errors.time}</div>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        placeholder="1"
        min="1"
        max="10"
        value={formik.values.guests}
        onChange={formik.handleChange}
        required
      />
      {formik.errors.guests && <div style={{ color: "red" }}>{formik.errors.guests}</div>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formik.values.occasion}
        onChange={formik.handleChange}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {formik.errors.occasion && <div style={{ color: "red" }}>{formik.errors.occasion}</div>}

      <input type="submit" id="btnReservation" aria-label="On Click" value="Make Your Reservation" disabled={!formik.isValid || !formik.dirty} />
    </form>
  );
};

export default BookingForm;
