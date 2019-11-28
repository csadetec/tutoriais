import React, {Component} from 'react'

class Feed extends Component{
    render(){
        return(
            <div key={this.props.id}>
                <h3>{this.props.username}</h3>
                <a>{this.props.likes > 1 ? this.props.likes +' curtidas'
                :
                '1 curtida'} / </a>
                <a>{this.props.comments} comentários</a>
            </div>
        )
    }
}

export default Feed