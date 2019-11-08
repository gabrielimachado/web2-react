import React, { Component } from 'react'
// import Apis from '../Service/Api'

export default class Container extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         isLoading: false
    //     }
    // }

    componentDidMount() {
        this.setState({ isLoading: true })
    }

    render() {
        return (
            <>
            
                <section id="intro" className="intro-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1><img src="images/logo.png" /></h1>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}