import React, {Component} from 'react'

import  './Table.css'
export default class Table extends Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.arrayCarros.map(
                    row =>
                    <tr key = {row.id} >
                        <th>{row.id}</th>
                        <th>{row.marca}</th>
                        <th>{row.modelo}</th>
                        <th>{row.ano}</th>
                    </tr>
                    )}
                </tbody>
                
            </table>
        )
    }
}