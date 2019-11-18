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
        Apis.loadSalgadas().then((res) => {
            this.setState({ receitasSalgadas: res.data, isLoading: false })
        })
    }
    renderSalgado(receitaSalgada) {
        return (
            <li key={receitaSalgada.id} className="list-group-item">
                <h3>{receitaSalgada.titulo}</h3>
                <p>{receitaSalgada.ingredientes}</p>
                <p>{receitaSalgada.modoPreparo}</p>
            </li>
        )
    }
    render() {
        return (
            <>
                <section>
                    <div className='container'>
                        {
                            this.state.isLoading &&
                            <span> Carregando receitas salgadas...</span>
                        }
                        {
                            !this.state.isLoading &&
                            <ul className='list-group'>
                                {this.state.receitasSalgadas.map(this.renderSalgado)}
                            </ul>
                        }
                    </div>
                </section>
            </>
        )
    }
}
