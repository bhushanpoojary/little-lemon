import './App.css';
import Header from "./Header";
import Main from './Main';
import Nav from "./Nav";
import Footer from './Footer';

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <nav>
        <Nav/>
      </nav>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
