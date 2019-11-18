import React, { Component } from 'react'
import 'pure-react-carousel/dist/react-carousel.es.css';
import Carousel from 'react-bootstrap/Carousel';

// import Apis from '../Service/Api'

export default class Container extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         isLoading: false
    //     }
    // }

    // componentDidMount() {
    //     this.setState({ isLoading: true })
    // }

    render() {

        return (
            <>
                <section id="intro" className="intro-section">
                    <div className="container">
                        <div className="row">
                            <Carousel className="py-5 col-lg-12 ">
                                <Carousel.Item>
                                    <img width={120} height={500} className="d-block w-100" src='/img/background_doce.jpg' alt="First slide" />
                                    <Carousel.Caption>
                                        <h3 className="text-center">First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width={120} height={500} className="d-block w-100" src='../img/background.png' alt="Second slide" />
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width={120} height={500} className="d-block w-100" src='../img/background8.png' alt="Third slide" />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            <div className="py-5 col-lg-12">
                                descrição do site, mais alguns links para receitas(fake)
                            </div>

                        </div>
                    </div>
                </section>
            </>
        )
    }
}