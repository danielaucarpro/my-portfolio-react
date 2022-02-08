import Header from "./components/Header/Header";

//css
import './App.css';
import Content from "./components/Content/Content";
import DetailPage from "./components/detailPage/DetailPage";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main-contianer">
        <Header />
        <Routes>
          <Route path='/' element={<Content />}></Route>
          <Route path='/detail' element={<DetailPage />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
