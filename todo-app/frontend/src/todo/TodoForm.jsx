import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

export default props => (
    <div className='todoForm row '>
        <Grid cols='12 9 10'>
            <input id="description" className="form-control" 
            placeholder='Adicione uma Tarefe'
            onChange = {props.handleChange}
            value={props.description} />
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton  styleButton='primary' icon='plus'
                onClick={props.handleAdd}></IconButton>
            <IconButton  styleButton='info' icon='search'
                onClick={props.handleSearch}></IconButton>
        </Grid>
    </div>
)