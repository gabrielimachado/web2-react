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
                                        <h3 className="text-center">Pizza doce</h3>
                                        <p>Pizza de chocolate com morango</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width={120} height={500} className="d-block w-100" src='../img/background.png' alt="Second slide" />
                                    <Carousel.Caption>
                                        <h3>Pizza de calabresa acebolada</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width={120} height={500} className="d-block w-100" src='../img/background8.png' alt="Third slide" />
                                    <Carousel.Caption>
                                        <h3>Receitas de massas</h3>
                                        <p>Aprenda a criar sua própria massa rápida</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            <div className="py-5 col-lg-12 sobre " align="center">
                                <h3><b>Sobre</b></h3>
                                <p>O site foi desenvolvido para facilitar a vida das pessoas, com receitas prontas contendo o modo de preparo e os ingredientes necessários tanto para refeições complexas e especial, quanto para refeições rápidas e deliciosas. Adicione sua receita, e compartilhe felicidade e praticidade com outras pessoas!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}