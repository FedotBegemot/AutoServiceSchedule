import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

import './styles.css'

export default class NavigationBar extends Component{
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    Управление расписанием автосервиса
                    <img
                        src="https://cdn4.iconfinder.com/data/icons/BRILLIANT/transportation/png/400/muscle_car.png"
                        width="50"
                        height="50"
                        alt="brand"
                    />
                </Link>
                <Nav className="me-auto">
                    {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                    <Link to={"add"} className="nav-link">Добавить заявку</Link>
                    <Link to={"list"} className="nav-link">Заявки на ремонт</Link>
                </Nav>
            </Navbar>
        )
    }
}