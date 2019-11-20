import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Apis from '../Service/Api'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Redirect } from 'react-router-dom'
import FormCheck from 'react-bootstrap/FormCheck'


export default class index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            redirect: false
        }
        this.salvarReceita = this.salvarReceita.bind(this)
    }

    salvarReceita() {
        // alert(this.refs.nome.value)
        //  var doce = this.refs.doce.value
        // var salgado = this.refs.salgado.value


        // if (doce = true ){


        // }
        // else{


        // }
        var tipoReceita = this.refs.tipoReceita.id
        const novaReceita = {
            nomeR: this.refs.nomeR.value,
            ingredientes: this.refs.ingredientes.value,
            modoPreparo: this.refs.modoPreparo.value,


        }
        console.log(novaReceita)
        Apis.saveReceita(tipoReceita, novaReceita).then(() => { this.setState({ redirect: '/' }) })
    }

    render() {
        return (
            <div>
                <Container className='py-5'>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Nome da receita</Form.Label>
                            <Form.Control type="text" ref="nomeR" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Ingredientes</Form.Label>
                            <Form.Control as="textarea" ref="ingredientes" rows="3" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Modo de Preparo</Form.Label>
                            <Form.Control as="textarea" ref="modoPreparo" rows="3" />
                        </Form.Group>
                        <fieldset>
                            <Form.Group as={Row}>

                                <Form.Check
                                    type="radio"
                                    label="Receita Doce"
                                    name="formHorizontalRadios"
                                    id="receitasDoces"
                                    ref='tipoReceita'
                                />
                                <Form.Check
                                    type="radio"
                                    label="Receita Salgada"
                                    name="formHorizontalRadios"
                                    id="receitasSalgadas"
                                    ref='tipoReceita'
                                />
                            </Form.Group>
                        </fieldset>
                    </Form>

                    <Button type="button" onClick={this.salvarReceita}> Salvar nova receita </Button>
                </Container>
            </div>
        )
    }
}
