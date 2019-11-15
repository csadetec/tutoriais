import React from 'react'
import If from './If'

import './IconButton.css'


export default props => (
    <If test={!props.hide}>
        <button className={'btn  btn-' + props.styleButton +' mt-0' } onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </If>
)