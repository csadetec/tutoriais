import React, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props)
        this.state  = {
            status: false
        }
        this.login = this.login.bind(this) 
        this.logout = this.logout.bind(this)
    }

    login(){
        this.setState({status:true})
    }
    logout(){
        this.setState({status:false})
    }
    render(){
        return(
            <div>
                {this.state.status ?
                <div>
                    <h2>Bem-vindo ao Sistema</h2> 
                    <button onClick={this.logout}>Sair do Sistema</button>
                </div> 
                : 
                <div>
                    <h2>Olá visitante, faça o login!</h2>
                    <button onClick={this.login}>Entrar no Sistema</button>
                </div>
                }
            </div>
        )
    }
}




//import Member from './Components/Members'
/*
function App37Events() {
  return (
    <div>
        <Member name="Visitante"/>
    </div>
  );
}
/** */
export default App
