import React, { Component } from 'react';
import LogoUser from './logouser.png';
import mncss from './Picture.css';

class PictureComment extends Component {
    constructor(props){
        super(props);
        this.state={
            todos : this.props.todo,
            nom : this.props.namm,
            EditMode : false,
            commentTD : this.props.namm
        }

    }
    DeleteItem = (todo) => {
     this.props.DeleteItem(this.props.todo);
    }
    UpdateItem = (todo) => {
        this.props.UpdateItem(this.props.todo);
        this.setState({
            EditMode : false
        })
    }
    ChangerMode = () => {
        if(this.state.EditMode===false){
            this.setState({
                EditMode : true
            })
        }else {
            this.setState({
                EditMode : false
            })
        }
    }
    render(){
        return(
            <div>
             <img src={LogoUser} id="logo" /><p> {this.state.todos.nom}  </p><br />
             <p className="text">  {this.state.commentTD}  </p><button onClick={this.DeleteItem}> Delete </button><button onClick={this.ChangerMode}> Edit </button>
             
              {
                  this.state.EditMode ? <input type="text" value={this.state.commentTD} onChange= {(event)=> {this.setState({ commentTD: event.target.value})} } /> : ''
              }
              <button onClick={this.UpdateItem}> Update  </button>
            </div>
        )
    }
}
export default PictureComment