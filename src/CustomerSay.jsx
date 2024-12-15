import { Link } from "react-router-dom";

const CustomerSay = ()=> {
    return <>
    <Link to="/booking"><button aria-label="On Click" style={{backgroundColor: "#edc913", marginBottom: "30px"}}>Reserve Table</button></Link>
    </>
}

export default CustomerSay;