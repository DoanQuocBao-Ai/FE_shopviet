import Home from "./components/Home";
import {BrowserRouter, Route, Routes  } from "react-router-dom";
import Header from './components/header/Header'
import { Container } from "reactstrap";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Home />} />
            <Route path="/loginsuccess" element={<Home />} />
            <Route path="/reset-password" element={<Home />} />
          </Routes>
        </Container>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
