import React, {Component} from 'react'

//35 Ciclo de vido do componente
export default class App35 extends Component{
    constructor(props){
        super(props)
        this.state = {
            hour: '00:00:00'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({hour: new Date().toLocaleTimeString()})
        }, 1000)
    }

    componentDidUpdate(){
        console.log('Update!')
    }

    render(){
        return(
            <div>
                <h1>Meu Projeto {this.state.hour}</h1>
            </div>
        )
    }
}



class App34 extends Component{
    constructor(props){
        super(props)
        this.state = {
            nome: 'Mateus',
            contador: 0
        }
        this.aumentar = this.aumentar.bind(this)
        this.diminuir = this.diminuir.bind(this)
    }


    diminuir(){
        let state = this.state
        if(state.contador === 0){
            alert('Chegou a zero!')
            return; 
        }
        state.contador -= 1
        this.setState(state)
    }
    aumentar(){
        let state = this.state
        state.contador += 1
        state.nome = 'Pedro'
        this.setState(state)
    }
    render(){
        return(
            <div>
                <h1>Contador</h1>
                {this.state.nome}
                <h3>
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
              
            </div>

        )
    }
}
