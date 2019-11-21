import React, { Component } from 'react'
import Apis from '../Service/Api'


export default class Container extends Component {

    constructor(props) {
        super(props)

        this.state = {
            receitasSalgadas: [],
            isLoading: false
        }
        
        this.renderSalgado = this.renderSalgado.bind(this)
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        // setInterval(() => this.setState({ contador: this.state.contador + 1 }), 1000)
        Apis.loadReceita(2).then((res) => {
            this.setState({ receitasSalgadas: res.data, isLoading: false })
        })
    }
    renderSalgado(receitaSalgada) {
        return (
            <li key={receitaSalgada.id} className="list-group-item">
                <h3>{receitaSalgada.nomeR}</h3>
                <h4>Ingredientes: </h4>
                <p>{receitaSalgada.ingredientes}</p>
                <h4>Modo de fazer: </h4>
                <p>{receitaSalgada.modoPreparo}</p>
            </li>
        )
    }
    render() {
        return (
            <>
                <section>
                    <div className='container '>
                        {
                            this.state.isLoading &&
                            <span> Carregando receitas salgadas...</span>
                        }
                        {
                            !this.state.isLoading &&
                            <ul className='list-group card'>
                               
                                {this.state.receitasSalgadas.map(this.renderSalgado)}

                            </ul>
                        }
                    </div>
                </section>
            </>
        )
    }
}
