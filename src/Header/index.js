import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
                
                <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div className="container">
                        
                        <div className="navbar-header page-scroll">
                            <a className="navbar-brand page-scroll" href="#page-top">
                                {/* <img src="images/logo.png" height="30" /> */}
                                <header class="w3-container w3-center w3-padding-32">
                                    <h1><b>Cumtumpero</b></h1>
                                    <p>Bem vindo ao blog <span class="w3-tag">Cumtumpero E></span></p>
                                    <div class="w3-top w3-hide-small">
                                        
                                        <div class="w3-bar w3-xlarge w3-black w3-opacity w3-hover-opacity-off" id="myNavbar">
                                            <a href="" class="w3-bar-item w3-button">HOME</a>
                                            <a href="" class="w3-bar-item w3-button">MENU</a>
                                            <a href="" class="w3-bar-item w3-button">ABOUT</a>
                                            <a href="" class="w3-bar-item w3-button">CONTACT</a>
                                        </div>
                                    </div>
                                </header>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
