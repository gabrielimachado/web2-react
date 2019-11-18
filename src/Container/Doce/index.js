import React, { Component } from 'react'
import Apis from '../Service/Api'

export default class Container extends Component {

    constructor(props) {
        super(props)

        this.state = {
            receitasDoces: [],
            isLoading: false
        }
        
        this.renderDoce = this.renderDoce.bind(this)
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        // setInterval(() => this.setState({ contador: this.state.contador + 1 }), 1000)
        Apis.loadDoces().then((res) => {
            this.setState({ receitasDoces: res.data, isLoading: false })
        })
    }
    renderDoce(receitaDoce) {
        return (
            <li key={receitaDoce.id} className="list-group-item">
                <h3>{receitaDoce.titulo}</h3>
                <p>{receitaDoce.ingredientes}</p>
                <p>{receitaDoce.modoPreparo}</p>
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
                            <span> Carregando receitas doces...</span>
                        }
                        {
                            !this.state.isLoading &&
                            <ul className='list-group'>
                                {this.state.receitasDoces.map(this.renderDoce)}
                            </ul>
                        }
                    </div>
                </section>
            </>
        )
    }
}
