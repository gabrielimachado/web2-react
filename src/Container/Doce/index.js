import React, { Component } from 'react'
import Apis from '../Service/Api'
export default class Container extends Component {

    constructor(props) {
        super(props)

        this.state = {
            receitaDoce: [],
            isLoading: false
        }
        this.renderDoce = this.renderDoce.bind(this)
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        // setInterval(() => this.setState({ contador: this.state.contador + 1 }), 1000)
        Apis.receitasDoces().then((res) => {
            this.setState({ receitasDoces: res.data, isLoading: false })
        })
    }
    renderDoce(receitaDoce) {
        return (
            <li key={receitaDoce.id} className="list-group-item">
                <h3>{receitaDoce.titulo}</h3>
                <span>{receitaDoce.ingredientes}</span>
                <span>{receitaDoce.modoPreparo}</span>
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
                <section className='container py-5'>
                    <div className='container'>
                        {
                            this.state.isLoading &&
                            <span> Carregando livros...</span>
                        }
                        {
                            !this.state.isLoading &&
                            <ul className='list-group'>
                                {this.state.receitaDoce.map(this.renderDoce)}
                            </ul>
                        }
                    </div>
                </section>
            </>
        )
    }
}