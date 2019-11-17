import React, {Component} from 'react';
import Table from './Table'
import './App.css';

export default  class App extends Component{

  constructor(){
    super()
    this.state = ({
      db:[]
    })
    this.exibirCarros()
  }

  exibirCarros(){
    fetch('http://localhost/tutoriais/integrando_react_php_mysql/backend/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          db:responseJson
        })
        //console.log(this.state.db)
      })
  }

  render(){
    return(
      <div>
        <Table arrayCarros={this.state.db} />
      </div>
    )
  }
}

