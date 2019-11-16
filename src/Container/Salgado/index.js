import React, { Component } from 'react'
import Apis from '../Service/Api'
export default class Container extends Component {

    constructor(props) {
        super(props)

        this.state = {
            receitaSalgada: [],
            isLoading: false
        }
        this.renderSalgado = this.renderSalgado.bind(this)
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        // setInterval(() => this.setState({ contador: this.state.contador + 1 }), 1000)
        Apis.receitasSalgadas().then((res) => {
            this.setState({ receitasSalgadas: res.data, isLoading: false })
        })
    }
    renderSalgado(receitaSalgada) {
        return (
            <li key={receitaSalgada.id} className="list-group-item">
                <h3>{receitaSalgada.titulo}</h3>
                <p>{receitaSalgada.ingredientes}</p>
                <p>{receitaSalgada.modoPreparo}</p>
                {/* <div>
                    <button type="button" className="btn btn-danger" onClick={() => this.deleteLivro(livro)}>Delete</button>
                </div> */}
            </li>
        )
    }
    render() {
        return (
            <>
            
                {/* <section id="intro" className="intro-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1><img src="images/logo.png" /></h1>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section>
                    <div className='container'>
                        {
                            this.state.isLoading &&
                            <span> Carregando Receitas Salgadas...</span>
                        }
                        {
                            !this.state.isLoading &&
                            <ul className='list-group'>
                                {this.state.receitaSalgada.map(this.renderSalgado)}
                            </ul>
                        }
                    </div>
                </section>
            </>
        )
    }
}