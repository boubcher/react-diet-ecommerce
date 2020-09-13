import React, { useState, Component } from 'react';
import moncss from './Homecomment.css';
import Logo from './logo.jpg';

class CommentHome extends Component {
    constructor(props){
        super(props);
        this.state={
            todo : this.props.todo,
            Edit : false,
            commentaire : this.props.commentt
        }
    }

     DeleteItem = (todo) => {
        this.props.DeleteItem(this.props.todo);
    }
    UpdateItem = (todo) => {
        this.props.UpdateItem(this.props.todo);
        this.setState({Edit: false})
    }
    EditMode = () => {
        if(this.state.Edit===false){
            this.setState({Edit : true})
        }else {
            this.setState({Edit: false})
        }
    }
    render(){
    return(
        <div className="container">
        <img src={Logo} id="logouser"/><p className="prg">{this.props.nomt} </p><br />
        <div className="tabdiv">
        <p className="prg"> {this.state.commentaire} </p> 
        </div>
        <button onClick={this.DeleteItem}> Delete </button>
        <button onClick={this.EditMode}> Editer  </button>
        {
            this.state.Edit ? <input type="text" value={this.state.commentaire} onChange={(event)=>{this.setState({commentaire: event.target.value})}} /> : ''
        }
        <button onClick={this.UpdateItem}> Update </button>
        </div>
    )
}
}
export default CommentHome;