import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import CustomerSay from "./CustomerSay";
import Specials from "./Spcecials";
import "./Home.css"

const Home = () => {
  return (
    <div className="containerHome" style={{ backgroundColor: "#495E57" }}>
      <div className="containerHome" style={{marginLeft: "auto" , marginRight: "auto"}}>
        <div style={{ backgroundColor: "#495E57" }}>
          <CallToAction />
          <Chicago />
          <Specials />
          <CustomerSay />
        </div>
        <div
          style={{
            backgroundColor: "#495E57",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="./greeksalad.jpg" width={200} />
        </div>
      </div>
    </div>
  );
};
export default Home;
