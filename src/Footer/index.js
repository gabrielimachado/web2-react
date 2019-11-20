import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import Container from 'react-bootstrap/Container';

export default class index extends Component {
    render() {
        return (
            <footer className="page-footer special-color-dark ">
                <Container>
                    <Row className='justify-content-between'>
                        {/* <div className="col-sm-12 py-5">
                            <p className="copyright text-center" id="copyright">Copyright &copy; </p>
                        </div> */}
                        {/* <div className="col-md-6  align-middle">
                          
                        </div> */}
                        <div>
                            <ul className=" social-buttons list-unstyled">
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
                        </div>
                        <div>
                            <p className="copyright align-middle">Copyright &copy; Gabrieli Machado e Yasmin Novello</p>
                        </div>
                    </Row>
                </Container>
            </footer>
        )
    }
}
