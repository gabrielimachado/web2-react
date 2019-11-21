import React, { Component } from 'react'
// import Img from 'react-image'
import {Redirect} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Apis from '../Service/Api'
import Container from 'react-bootstrap/Container'
import FormCheck from 'react-bootstrap/FormCheck'


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
        // var tipoReceita = this.refs.tipoReceita.id
        const novaReceita = {
            nomeR: this.refs.nomeR.value,
            imagem: this.state.src,
            ingredientes: this.refs.ingredientes.value,
            modoPreparo: this.refs.modoPreparo.value,
            tipo: this.refs.tipo.value
        }
        console.log(novaReceita)
        // alert(tipoReceita)
        Apis.saveReceita(novaReceita);
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
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Nome da receita: </Form.Label>
                            <Form.Control type="text" ref="nomeR" placeholder="" />
                        </Form.Group>
                        <label className="" id="upload_btn">Add image</label>
                     <input id="upload_file" type="file" accept="image/" ref="image" onChange={this.selecionarImagem} className="form-control" />
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Adicione os ingredientes: </Form.Label>
                            <Form.Control as="textarea" ref="ingredientes" rows="3" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Adicione o modo de Preparo:</Form.Label>
                            <Form.Control as="textarea" ref="modoPreparo" rows="3" />
                        </Form.Group>

                        <Form.Group>
                            <select ref="tipo">
                                <option value="0" defaultValue>Selecione</option>
                                <option value="2">Salgado</option>
                                <option value="1">Doce</option>
                            </select>
                        </Form.Group>
                    </Form>
                   
                    {/* <img className="" src={this.state.src} title={this.state.name} /> */}
                        <Button variant="outline-dark"  style={{ color: 'rgb(218, 40, 78)' }} type="button" onClick={this.salvarReceita}> Salvar receita </Button>
                </Container>
            </div>
                )   
            } 
        }
