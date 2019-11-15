import React, { Component } from 'react'
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import axios from  'axios'
import baseUrl from '../services/api' 
export default class Todo extends Component {

    constructor(props){
        super(props)

        this.state = { description:'', list:[] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPeding = this.handleMarkAsPeding.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.refresh()
    }

    refresh(description = ''){
        //const searh = description ? sdfdsfscd
        
  //      sdafalsdfa
//        asdfasdf
        
        axios.get(`${baseUrl}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }
    handleChange(e){
        this.setState({...this.state, description: e.target.value })
    }

    handleAdd(){
        //console.log(this.state.description)
        const description = this.state.description
        axios.post(baseUrl, {description})
            .then(resp => this.refresh())
    }

    handleRemove(todo){
        axios.delete(`${baseUrl}/${todo._id}`)
            .then(resp => this.refresh())

    }

    handleMarkAsDone(todo){
        axios.put(`${baseUrl}/${todo._id}`, {...todo, done:true})
            .then(resp => this.refresh())
    }
    handleTeste(todo){
        console.log('teste')
    }
    handleMarkAsPeding(todo){
        
        axios.put(`${baseUrl}/${todo._id}`, {...todo, done:false})
            .then(resp => this.refresh())
   
        //console.log('teste')
    }

    render(){
        return (
            <div className="container">
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm 
                    description={this.state.description}
                    handleChange = {this.handleChange}
                    handleAdd={this.handleAdd} 
                     />
                <TodoList 
                    list={this.state.list}
                    handleMarkAsDone = {this.handleMarkAsDone}
                    handleMarkAsPeding = {this.handleMarkAsPeding}
                    handleRemove={this.handleRemove}

                />
            </div>
        )
    }
}
