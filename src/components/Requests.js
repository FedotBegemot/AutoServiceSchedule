import React, {Component} from "react";
import {Card, Table} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


import './styles.css'

export default class Requests extends Component{

    constructor(props) {
        super(props);
        this.state = {
            requests : []
        };
    }

    componentDidMount() {
        axios.get("")
            .then(response => console.log(response.data));
    }

    render() {
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList} /> Расписание работ</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant={"dark"}>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>VIN-код</th>
                            <th>Дата обращения</th>
                            <th>Статус</th>
                            <th>Требуемые расходные
                                материалы</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr align={"center"}>
                            <td colSpan={6}>Заявок на ремонт пока нет</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}