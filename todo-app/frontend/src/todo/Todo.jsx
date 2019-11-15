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
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPeding = this.handleMarkAsPeding.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.refresh()
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/`: ''
        axios.get(`${baseUrl}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleSearch(){
        console.log('teste')
        this.refresh(this.state.description)

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
            .then(resp => this.refresh(this.state.description))

    }

    handleMarkAsDone(todo){
        axios.put(`${baseUrl}/${todo._id}`, {...todo, done:true})
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPeding(todo){
        
        axios.put(`${baseUrl}/${todo._id}`, {...todo, done:false})
            .then(resp => this.refresh(this.state.description))
    }

    handleClear(){
        this.refresh()
    }

    render(){
        return (
            <div className="container">
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm 
                    description={this.state.description}
                    handleChange = {this.handleChange}
                    handleAdd={this.handleAdd} 
                    handleSearch = {this.handleSearch}
                    handleClear = {this.handleClear}
                    
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
