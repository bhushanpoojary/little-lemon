import './App.css';
import Header from "./Header";
import Main from './Main';
import Nav from "./Nav";
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <div class="container">
        <Router>
          <Header/>
          <Nav/>
          <Main/>
          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;
