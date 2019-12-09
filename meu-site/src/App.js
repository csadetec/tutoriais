import React, {Component} from 'react';

import './App.css'

class App extends Component{
    constructor(props){
        super(props)
        this.state  = {
            textPhrase: ''

        }
        this.phrases = [
                'Siga os bons e aprenda com eles.',
                'O bom-senso vale mais do que muito',
                'A maior barreira para o sucesso é o medo do fracasso',
                'Acredite em milagres, mas não dependa deles'
            ]

        this.brokeCookie = this.brokeCookie.bind(this)
      
    }

    brokeCookie(){
        //let state = this.state;
        let random = Math.floor(Math.random() * this.phrases.length)
       //console.log(random)
        this.setState({textPhrase: `" ${this.phrases[random]} "`})
    }

    render(){
        return(
            <div className="container">
                <img alt="Of a cookie"
                 src={"http://1.bp.blogspot.com/-734LuPB5HwE/UNMc6ENnliI/AAAAAAAADIE/6VBCFUYESbU/s1600/Fortune-cookie550.jpg"} />
                 <Button name = "Abrir Biscoito" anction={this.brokeCookie} />
                 <h3 className="textPhrase">{this.state.textPhrase}</h3>
            </div>
        )
    }
}

class Button extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.anction}>{this.props.name}</button>
            </div>
        )
    }
}

export default App
