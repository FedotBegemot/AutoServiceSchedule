import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css'

import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer"
import AddRequest from "./components/AddRequest";
import Requests from "./components/Requests";


function App() {
    const marginTop ={
        marginTop:"20px"
    };
  return (
    <Router>
        <NavigationBar/>
        <Container>
            <Row>
                <Col lg={12} style={marginTop}>
                    <Routes>
                        <Route path="/" element={<Welcome/>}/>
                        <Route path="/add" element={<AddRequest/>}/>
                        <Route path="/list" element={<Requests/>}/>
                    </Routes>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </Router>
  );
}

export default App;
