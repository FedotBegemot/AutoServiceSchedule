import React, {Component} from "react";
import {Card, Form, Button, Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare, faSave} from '@fortawesome/free-solid-svg-icons';

import './styles.css'

export default class AddRequest extends Component{
    constructor(props) {
        super(props);
        this.state = {vin:'', date:'', status:'', consumables:''};
        this.requestChange = this.requestChange.bind(this);
        this.submitRequest = this.submitRequest.bind(this);
    }

    submitRequest(event){
        alert('VIN-code: '+ this.state.vin + ' Date: '+ this.state.date +
            ' Status: '+ this.state.status +' Consumables: '+this.state.consumables);
        event.preventDefault();
    }

    requestChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Добавить заявку</Card.Header>
                    <Form onSubmit={this.submitRequest} id={"requestFormId"}>
                        <Card.Body>
                        <Form.Group as={Col} className="mb-3" controlId="formGridVin">
                            <Form.Label>VIN-код</Form.Label>
                            <Form.Control required
                                type="text" name={"vin"}
                                value={this.state.vin}
                                onChange={this.requestChange}
                                className={"bg-dark text-white"}
                                placeholder="Введите VIN-код автомобиля" />
                            <Form.Text className="text-muted">
                                В свидетельстве о регистрации транспортного средства VIN-код также указан как
                                идентификационный номер.
                            </Form.Text>
                        </Form.Group>

                        <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridDate">
                            <Form.Label>Дата обращения</Form.Label>
                            <Form.Control required
                                type="text" name={"date"}
                                value={this.state.date}
                                onChange={this.requestChange}
                                className={"bg-dark text-white"}
                                placeholder="Введите дату обращения клиента" />
                        </Form.Group>

{/*TODO: починить список!!!*/}

                        <Form.Group as={Col} controlId="formGridStatus">
                            <Form.Label>Статус</Form.Label>
                            <Form.Control as="select"
                                required
                                value={this.state.status}
                                onChange={this.requestChange}
                                className={"bg-dark text-white"}>
                                name={"status"}
                                aria-label="Выберите статус заявки..."
                                <option value="Выберите статус заявки">Выберите статус заявки...</option>
                                <option value="На осмотре">На осмотре</option>
                                <option value="2">Ожидает начала работ</option>
                                <option value="2">В работе</option>
                                <option value="3">Ожидает выдачи клиенту</option>
                                <option value="3">Передана клиенту</option>
                            </Form.Control>
                        </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridConsumables">
                            <Form.Label>Требуемые расходные материалы</Form.Label>
                            <Form.Control
                                type="text" name={"consumables"}
                                value={this.state.consumables}
                                onChange={this.requestChange}
                                className={"bg-dark text-white"}
                                placeholder="Введите перечень требуемых расходных материалов" />
                            <Form.Text className="text-muted">
                                В случае наличия всех требуемых материалов, оставить пустой
                            </Form.Text>
                        </Form.Group>
                        </Card.Body>
                            <Card.Footer style={{"textAlign":"right"}}>
                                <Button variant="success" type="submit">
                                    <FontAwesomeIcon icon={faSave} /> Добавить
                                </Button>
                            </Card.Footer>
                    </Form>
            </Card>
        );
    }
}