import React , { Component } from 'react';

class Member extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.name
        }
        this.login = this.login.bind(this)
    }

    login(){
        //alert('clicou')
        this.setState({
            name: 'Mathues'
        })
    }

    render(){
        return(
            <div>
                <h2>Bem-vindo(a) {this.state.name} </h2>
                <button onClick={this.login}>
                    Entrar como Matheus
                </button>
                <button onClick={ () => this.setState({name:''})}>
                    Sair
                </button>
            </div>
        )
    }
}

export default Member