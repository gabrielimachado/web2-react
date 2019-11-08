import React, { Component } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';

import { FaFacebookSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPhone} from "react-icons/md";

export default class index extends Component {
    render() {
        return (
            <footer className="page-footer special-color-dark py-4">
                <div className="container">
                    <div className="row py-5">
                        {/* <div className="col-sm-12 py-5">
                            <p className="copyright text-center" id="copyright">Copyright &copy; </p>
                        </div> */}
                        <div className="col-md-4">
                            <p className="copyright">Copyright &copy; Gabrieli Machado e Yasmin Novello</p>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="#">
                                    <FaFacebookSquare className="fa-5x"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="localhost:3000/"><IoIosMail/></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"><MdPhone/></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline quicklinks">
                                <li className="list-inline-item">
                                    <a href="#">UTFPR - Campus Dois Vizinhos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
