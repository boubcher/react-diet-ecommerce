import React, { Component } from 'react';
import imageun from './bodybuilding1.jpg';
import imagedeux from './bodybuilding2.jpg';
import imagetrois from './bodybuilding3.jpg';
import imagequtre from './ronniecoleman.png';
import imagecinq from './bodybuilding4.jpg';
import imagesix from './bodybuilding5.jpg';
import imagesept from './bodybuilding6.jpg';
import imagehuit from './bodybuilding7.jpg';
import {FaCommentDots} from 'react-icons/fa';
import mncss from './Picture.css';
import PictureComment from './PictureComment';

const tabcomment = [
    {id:1,nom:'chris',commentaire:'great guys'},
    {id:2,nom:'robert',commentaire:'monsters'}
]

class Picture extends Component {
    constructor () {
        super();
        this.state={
            nom : '',
            commentaire : '',
            Items : tabcomment,
            EditMode: true
        }
    }
    handleChangenom = (event) => {
        this.setState({
          nom : event.target.value
        })
    }
    handleChangecomment = (event) => {
        this.setState({
          commentaire : event.target.value
        })
    }
    AddItem = (event) => {
      event.preventDefault();
      let newItem={id:3,nom:this.state.nom,commentaire:this.state.commentaire};
      let tabc=this.state.Items;
      tabc.push(newItem);
      this.setState({
          Items : tabc,
          nom : '',
          commentaire : ''
      })
    }
    ChangerMode = () => {
        if( this.state.EditMode) {
            this.setState({
                EditMode : false
            })
        }else {
            this.setState({
                EditMode : true
            })
        }
    }
    DeleteItem = (todo) => {
        let tab=this.state.Items;
        let tabsupp=this.state.Items.indexOf(1);
        tab.splice(tabsupp);
        this.setState({
            Items : tab
        })
    }
    UpdateItem = (todo) => {
        let ta=this.state.Items.filter((item,index)=> {
            if(item.id===index.id){
                item.commentaire=index.commentaire;
            }
            return item;
        })
        this.setState({
            Items : ta
        })
    }
    render(){
    return(
        <div>
            <ul>
             <li><img src={imageun} className="picture" /></li>
             <li><img src={imagedeux} className="picture" /></li>
             <li><img src={imagetrois} className="picture"/></li>
             <li><img src={imagequtre}  className="picture"/></li><br /><br />
             <li><img src={imagecinq}  className="picture"/></li>
             <li><img src={imagesix}  className="picture"/></li>
             <li><img src={imagesept}  className="picture"/></li>
             <li><img src={imagehuit}  className="picture"/></li>
            </ul>
            <div className="chat">
             <h1> Join The discusion <FaCommentDots /> </h1>
             <h1>  New Comment : </h1>
             <label> Pseudo : </label><input type="text" placeholder="name" value={this.state.nom} onChange={this.handleChangenom} /><br/>
             <label> Commentaire : </label><input type="text" placeholder=" comment" value={this.state.commentaire} onChange={this.handleChangecomment} /><br/>
             <button onClick={this.AddItem}> POST COMMENT  </button>   <button onClick={this.ChangerMode}> Show/Hide </button>
             {
                !this.state.EditMode ? this.state.Items.map(item => <PictureComment key={item.id} todo={item} namm={item.commentaire} DeleteItem={this.DeleteItem} UpdateItem={this.UpdateItem} />) : ''
             }
            </div>
        </div>
    )
}
}
export default Picture;