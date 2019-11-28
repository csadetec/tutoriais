import React, {Component} from 'react';


class App extends Component{
    constructor(props){
        super(props)
        this.state  = {
            email: '',
            password: '',
            genre: 'MASCULINO'

        }
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeGenre = this.changeGenre.bind(this)
    }

    changeEmail(e){
        this.setState({email: e.target.value})
    }
    changePassword(e){
        //console.log(e.target.value)
        this.setState({password: e.target.value})
    }
    changeGenre(e){
        this.setState({genre: e.target.value})
    }
    render(){
        return(
            <div>
                Email: 
                <input type="email" name="email" value={this.state.email} onChange={this.changeEmail}  /><br/>
                Senha:
                <input type="text" name="password" value={this.state.password} onChange={this.changePassword} /><br/>
                <br/>
                <select value={this.state.genre} onChange={this.changeGenre}>
                    <option value="MASCULINO">MASCULINO</option>
                    <option value="FEMININO">FEMININO</option>
                </select>
                
                <h3>{this.state.email}</h3>
                <h3>{this.state.password}</h3>
                <h3>{this.state.genre}</h3>

            </div>
        )
    }
}

export default App
