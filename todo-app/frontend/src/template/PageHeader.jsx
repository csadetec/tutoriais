import React from 'react'

export default props => (
    <header className="mb-3 pb-2 border-bottom">
        <h2>{props.name} <small>{props.small}</small> </h2>
    </header>
)