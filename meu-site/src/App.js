import React, {Component} from 'react';


class App extends Component{
    constructor(props){
        super(props)
        this.state  = {
            name: '',
            email: '',
            password: '',
            error: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        const { name, email, password } = this.state

        if(name && email && password){
            alert(`Nome: ${name} \nEmail: ${email} \nPassword:${password}`)
            this.setState({error:''})
        }else{
            this.setState({error:'Ops algo errado!'})
        }
     
        e.preventDefault()
    }
    render(){
        return(
            <div>
                <h1>Novo Usuário</h1>
                {this.state.error && 
                <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    Nome: 
                    <input type="text" name="name" value={this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})}  /><br/>
                    E-mail: 
                    <input type="email" name="email" value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}  /><br/>
                    Senha:
                    <input type="password" name="password" value={this.state.password} 
                        onChange={(e) => this.setState({password: e.target.value})} /><br/>
                    <br/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        )
    }
}

export default App
