import React from 'react'
import IconButton from '../template/IconButton'

export default props => {
    
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo =>(
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>
                    {todo.description}
                </td>
                <td>
                    <IconButton styleButton='success' icon='check' hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}></IconButton>
                    <IconButton styleButton='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.handleMarkAsPeding(todo)}></IconButton>
                    <IconButton styleButton='danger' icon='trash-alt' hide={!todo.done}
                        onClick={() => props.handleRemove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}