import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Apis from '../Service/Api'


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
        const novaReceita = {
            nomeR: this.refs.nomeR.value,
            ingredientes: this.refs.ingredientes.value,
            modoPreparo: this.refs.modoPreparo.value

        }
        console.log(novaReceita)
        Apis.saveReceita(novaReceita).then(() => { this.setState({ redirect: '/' }) })
    }

    render() {
        return (
            <div>
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
                </Form>
                    <Button type="button" onClick={this.salvarReceita}> Salvar nova receita </Button>
            </div>
        )
    }
}
