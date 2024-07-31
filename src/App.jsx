import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import LoginPage from "./pages/LoginPage";
// import Blog from "./pages/Blog";
// import Sidebar from "./Sidebar";
// import BlogDet from "./pages/BlogDet";
// import Banner from "./pages/Banner";
// import Det from "./pages/Det";
// import News from "./pages/News";
// import NewsDet from "./pages/NewsDet";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Faq from "./pages/Faq";
import Posagent from "./pages/Posagent";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/pos-agent" element={<Posagent />} />
          {/*}  <Route exact path="/banner" element={<Banner />} />
          <Route exact path="/register" element={<LoginPage />} />
          <Route exact path="/blog" element={<News />} />
          <Route exact path="/singleblog/:slug" element={<NewsDet />} />
         
          <Route exact path="/sidebar" element={<Sidebar />} />
          <Route exact path="" element={<BlogDet />} />

        */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
