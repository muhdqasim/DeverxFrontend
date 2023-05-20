import "./App.css";
import React from "react";
import axios from "axios";
import Home from "./views/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./views/About";
import Services from "./views/Services";
import Resources from "./views/Resources";
import Portfolio from "./views/Portfolio";
import Blogs from "./views/Blogs";
import Contact from "./views/Contact";
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: null,
    };
  }

  fetchAPI = async () => {
    const res = await axios.get("http://localhost:9000/testAPI");
    if (res) {
      this.setState({ apiResponse: res.data });
    }
  };

  componentDidMount() {
    this.fetchAPI();
    console.log("APP JS MOUNTED");
  }

  render() {
    return (
      <Router>
        <Box px={3} height={700} sx={{ flexDirection: "column" }}>
          <Box sx={{ alignContent: "flex-start" }}>
            <NavBar />
          </Box>
          <Box sx={{ alignContent: "flex-end", flexGrow: 1 }}>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/services" element={<Services />}></Route>
              <Route exact path="/resources" element={<Resources />}></Route>
              <Route exact path="/portfolio" element={<Portfolio />}></Route>
              <Route exact path="/blogs" element={<Blogs />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    );
  }
}

export default App;
