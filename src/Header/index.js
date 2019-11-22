import React, { Component } from 'react'
import { FaPepperHot } from "react-icons/fa";
import {Link} from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <div>
                <nav className="" role="navigation">
                    <div className="container">
                        <div className="">
                            <header className="w3-container w3-center w3-padding-32">
                                <h1><b>Cumtumpero</b></h1>
                                <p>Bem vindo ao blog <span className="w3-tag">Cumtumpero <FaPepperHot /></span></p>
                                <div className="w3-top w3-hide-small">
                                    <div className="w3-bar w3-xlarge w3-black w3-opacity navbar" id="myNavbar">
                                        <Link to="/" className="w3-bar-item w3-button">Home</Link>
                                        <Link to="/doce" className="w3-bar-item w3-button">Receitas Doces</Link>
                                        <Link to="/salgado" className="w3-bar-item w3-button">Receitas Salgadas</Link>
                                        <Link to="/contato" className="w3-bar-item w3-button">Contato</Link>
                                        <Link to="/novaReceita" className="w3-bar-item w3-button">Adicionar Receitas</Link>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
