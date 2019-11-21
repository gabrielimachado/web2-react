import React, { Component } from 'react'
// import Img from 'react-image'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Apis from '../Service/Api'
import Container from 'react-bootstrap/Container'
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
        var tipoReceita = this.refs.tipoReceita.id
        const novaReceita = {
            nomeR: this.refs.nomeR.value,
            imagem: this.refs.imagemR
            ingredientes: this.refs.ingredientes.value,
            modoPreparo: this.refs.modoPreparo.value

        }
        console.log(novaReceita)
        alert(tipoReceita)
        Apis.saveReceita(tipoReceita,novaReceita).then(() => { this.setState({ redirect: '/' }) })
    }
    // selectImage = evt => {
    //     var files = evt.target.files;
    //     for (var i = 0, f; f = files[i]; i++) {
    //         if (!f.type.match('image.*')) {
    //             continue;
    //         }
    //         var reader = new FileReader();
    //         reader.onload = (function (theFile) {
    //             return function (e) {
    //                 console.log(e.target.result);
    //                 this.setState({ src: e.target.result, name: escape(theFile.name) });
    //             };
    //         })(f).bind(this);
    //         reader.readAsDataURL(f);
    //     }

    // }

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
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Adicione os ingredientes: </Form.Label>
                            <Form.Control as="textarea" ref="ingredientes" rows="3" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Adicione o modo de Preparo:</Form.Label>
                            <Form.Control as="textarea" ref="modoPreparo" rows="3" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label as="legend" column sm={2}>
                            </Form.Label>
                            <Form.Check
                                type="radio"
                                label="Receita doce"
                                name="doce"
                                id="receitasDoces"
                                ref="tipoReceita"
                            />
                            <Form.Check
                                type="radio"
                                label="Receita salgada"
                                name="salgado"
                                id="receitasSalgadas"
                                ref="tipoReceita"
                            />
                        </Form.Group>
                    </Form>
                    {/* <label className="" id="upload_btn">Add image<img className="" id="" src="" />
                            <input id="upload_file" type="file" accept="image/" ref="image" onChange={this.selectImage} className="form-control" /> <br />
                            <img className="" src={this.state.src} title={this.state.name} /> */}

                        <Button variant="outline-dark"  style={{ color: 'rgb(218, 40, 78)' }} type="button" onClick={this.salvarReceita}> Salvar receita </Button>
                </Container>
            </div>

                )   
            } 
        
        }
