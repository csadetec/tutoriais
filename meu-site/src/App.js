import React, {Component} from 'react';

import './App.css'

class App extends Component{
    constructor(props){
        super(props)
        this.state  = {
            phrases:[
                'Siga os bons e aprenda com eles.',
                 'O bom-senso vale mais do que muito',
                 'A maior barreira para o sucesso é o medo do fracasso'
            ]

        }

        this.brokeCookie = this.brokeCookie.bind(this)
      
    }

    brokeCookie(){
        alert('quebrou')
    }

    render(){
        return(
            <div className="container">
                <img alt="Of a cookie"
                 src={"http://1.bp.blogspot.com/-734LuPB5HwE/UNMc6ENnliI/AAAAAAAADIE/6VBCFUYESbU/s1600/Fortune-cookie550.jpg"} />
                 <Button name = "Abrir Biscoito" anction={this.brokeCookie} />
                 <h3 className="textPhrase">Frase</h3>
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
