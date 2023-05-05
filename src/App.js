import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import './App.css'

import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer"
import AddRequest from "./components/AddRequest";
import Schedule from "./components/Schedule";


function App() {
    const marginTop ={
        marginTop:"20px"
    };
  return (
    <div className="App">
        <NavigationBar/>
        <Container>
            <Row>
                <Col lg={12} style={marginTop}>
                    <Welcome/>
                    <AddRequest/>
                    <Schedule/>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
  );
}

export default App;
