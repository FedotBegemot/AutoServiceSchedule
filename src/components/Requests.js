import React, {Component} from "react";
import {Card, Table} from "react-bootstrap";

import './styles.css'

export default class Requests extends Component{
    render() {
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header> Расписание работ</Card.Header>
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