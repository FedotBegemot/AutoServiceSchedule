import React from "react";
import {Navbar, Nav} from "react-bootstrap";

class NavigationBar extends React.Component{
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Управление расписанием автосервиса</Navbar.Brand>
                <img
                    src="https://cdn4.iconfinder.com/data/icons/BRILLIANT/transportation/png/400/muscle_car.png"
                    width="50"
                    height="50"
                    alt="brand"
                />{" "}
                <Nav className="me-auto">
                    {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                    <Nav.Link href="#">Добавить заявку</Nav.Link>
                    <Nav.Link href="#">Раписание</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavigationBar;