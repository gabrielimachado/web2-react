import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Apis from '../Service/Api'
import Container from 'react-bootstrap/Container'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            src: '',
            name: '',
        }
        this.salvarReceita = this.salvarReceita.bind(this)
    }
    salvarReceita() {
        const novaReceita = {
            nomeR: this.refs.nomeR.value,
            imagem: this.state.src,
            ingredientes: this.refs.ingredientes.value,
            modoPreparo: this.refs.modoPreparo.value,
            tipo: this.refs.tipo.value
        }
        console.log(novaReceita)
        Apis.saveReceita(novaReceita).then(() => { this.setState({ redirect: '/' }) })
    }
    selecionarImagem = evt => {
        var file = evt.target.files[0];
        var reader = new FileReader();
        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                console.log(e.target.result)
                this.setState({ src: e.target.result, name: escape(theFile.name) });
            };
        })(file).bind(this);

        reader.readAsDataURL(file);
    }


    render() {

        return (
            <div>
                {
                    this.state.redirect &&
                    <Redirect to={this.state.redirect} />
                }
                <Container className='py-5'>
                    <Col className="text-center pb-3">
                        <h3>Envie a sua receita</h3>
                    </Col>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Nome da receita: </Form.Label>
                            <Form.Control type="text" ref="nomeR" placeholder="" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="" id="upload_btn">Imagem da Receita: </Form.Label>
                            <Form.Control id="upload_file" type="file" accept="image/" ref="image" onChange={this.selecionarImagem} className="form-control" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Adicione os ingredientes: </Form.Label>
                            <Form.Control as="textarea" ref="ingredientes" rows="3" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Adicione o modo de Preparo: </Form.Label>
                            <Form.Control as="textarea" ref="modoPreparo" rows="3" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="select" ref="tipo">
                                <option value="0" defaultValue>Selecione</option>
                                <option value="2">Salgado</option>
                                <option value="1">Doce</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <Col className="col-2 offset-10">
                        <Button variant="outline-dark" style={{ color: 'rgb(218, 40, 78)' }} type="button" onClick={this.salvarReceita}> Salvar receita </Button>
                    </Col>
                </Container>
            </div>
        )
    }
}
