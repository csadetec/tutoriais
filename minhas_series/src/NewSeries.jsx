import React, {Component} from 'react'
import api from './Api'
import { Redirect }  from 'react-router-dom'


const statuses = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch':'Assitir'
}

class NewSeries extends Component{
    constructor(props){
        super(props)
  
        this.state = {
          genres: [],
          isLoading: false,
          redirect: false
        }
        this.saveSeries = this.saveSeries.bind(this)
    }

    componentDidMount(){
        this.setState({isLoading:true})
        api.loadGenres()
            .then((res)=>{
            this.setState({
                isLoading: false,
                genres: res.data
            })
        })
    }

    saveSeries(e){
        //alert(this.refs.name.value)
        e.preventDefault()
        const newSeries = {
            name: this.refs.name.value,
            status: this.refs.status.value,
            genre: this.refs.genre.value,
            comments: this.refs.comments.value
        }
        //    console.log(newSeries)
        
        api.saveSeries(newSeries)
            .then((res)=>{
                this.setState({
                    redirect: '/series/'+this.refs.genre.value
                })
            })
        /** */
        //return false
    }

    render(){
        return(
            <section className="intro-section">
                {this.state.redirect && 
                    <Redirect to = {this.state.redirect} />
                }
                <h1>Nova Série</h1>
                <form onSubmit={this.saveSeries}>
                    Nome: <input ref="name" type="text" className="form-control"/><br/>

                    Status:
                    <select ref="status"  className="form-control">
                        {Object.keys(statuses).map(
                            key => 
                            <option key = {key} value = {key}>{statuses[key]}</option>
                        )}
                    </select> <br/>

                    Genero:
                    <select ref="genre" className="form-control">
                        {this.state.genres.map(
                            key => 
                            <option key = {key} value = {key}>{key}</option>
                        )}
                    </select><br/>

                    Comentários : <textarea ref="comments" className="form-control"></textarea><br/>
                    <button >Salvar</button>

                </form>
            </section>
        )
    }
}

export default NewSeries