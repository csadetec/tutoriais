import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: '0'
        }
    }

    render(){
        return(
            <div className="container">
                <img src="http://10.20.0.26/arquivos/img/cronometro.png" alt="cronometro"/>
                <h2>{this.state.time}</h2>
                <div className="areaBtn">
                    <button>Vai</button>
                    <button>Limpar</button>
                </div> 
            </div>
        )
    }
}
export default App;
