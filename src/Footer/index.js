import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaFacebookSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPhone } from "react-icons/md";

export default class index extends Component {
    render() {
        return (
            <footer className="page-footer special-color-dark">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-sm-12 py-5">
                            <p className="copyright text-center" id="copyright">Copyright &copy; </p>
                        </div> */}
                        {/* <div className="col-md-6  align-middle">
                          
                        </div> */}
                        <div className="col-md-12 py-4">
                            <ul className=" social-buttons">
                                <li className=" ">
                                    <a href="#">
                                        <FaFacebookSquare className="fa-5x" /> Cumtumpero Official
                                    </a>
                                </li>
                                <li className=" ">
                                    <a href="localhost:3000/"><IoIosMail />contato@cumtumpero.com</a>
                                </li>
                                <li className=" ">
                                    <a href="#"><MdPhone />+55 (46) 99999-9999</a>
                                </li>
                            </ul>
                            <p className="copyright align-middle">Copyright &copy; Gabrieli Machado e Yasmin Novello</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
