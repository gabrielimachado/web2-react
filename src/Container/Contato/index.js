import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FigureCaption from 'react-bootstrap/FigureCaption'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

export default class Contato extends Component {
    render() {
        return (
            <div id="contato">
                <Container className="py-5">
                    <Row>
                        <Col sm>
                            <div className='offset-4'>
                                <Image width={150} height={150} src="/img/contato1.jpg" roundedCircle /></div>
                            <FigureCaption className="list-group-flush py-5">
                                <h5 className="text-center" style={{ color: 'rgb(218, 40, 78)' }}>Gabrieli Machado</h5>
                                <p className="text-center">RA: 2003260
                                <br />Dois Vizinhos - Paraná<br />
                                    Engenharia de Software - 5º periodo</p>
                            </FigureCaption>
                        </Col>
                        <Col sm>
                            <div className='offset-4'>
                                <Image width={150} height={150} src="/img/contato2.jpeg" roundedCircle /></div>
                            <FigureCaption className="list-group-flush py-5">
                                <h5 className="text-center" style={{ color: 'rgb(218, 40, 78)' }}>Yasmin Barbara Novello</h5>
                                <p className="text-center">RA: 1766406
                                <br />Dois Vizinhos - Paraná<br />
                                    Engenharia de Software - Todos os Periodos</p>
                            </FigureCaption>
                        </Col>
                    </Row>
                </Container>
                {/* <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" roundedCircle />
                </Col> */}
                <Container>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Mensagem: </Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                    </Form>
                    <Button variant="outline-dark" value="Enviar"  style={{ color: 'rgb(218, 40, 78)' }} className="botao" type="submit">Button</Button>
                </Container>
            </div>
        )
    }
}
