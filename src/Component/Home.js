import React, { useState, Component } from 'react';
import Head from '../Layouts/Header';
import Coach from './Davidcosta.jpg';
import moncss from './Home.css';
import Player from './builderplayer.jpg';
import David from './Davidcostaa.jpg';
import {FaRocketchat} from 'react-icons/fa';
import Homecomment from './Homecomment';
import Priest from './bodybuilding7.jpg';

const tabs=[
  {id:1,nomm :'kay',commentaire : 'Le sport le plus populaire du monde'},
  {id:2,nomm :'green',commentaire:'Mon sport préfére'}
]

class Home extends Component {
      constructor(){
        super();
        this.state={
          pseudo : '',
          commentaire : '',
          compteur : 0,
          EditMode : false,
          tabuser: tabs
        }
      }

    handleChangepseudo = (event) => {
        event.preventDefault();
        this.setState({
          pseudo : event.target.value
        })
    }
    
    handleChangecommentaire = (event) => {
      event.preventDefault();
      this.setState({
        commentaire : event.target.value,
        compteur : this.state.commentaire.length
      })
  }
    
    EditChange = () => {
       if(this.state.EditMode===false){
         this.setState({EditMode: true})
       }else {
         this.setState({EditMode:false})
       }
    }
    AddItem = (event) => {
      event.preventDefault();
      let newItem={id:3,nomm:this.state.pseudo,commentaire:this.state.commentaire};
      let tab=this.state.tabuser;
      tab.push(newItem);
      this.setState({
        tabuser: tab,
        pseudo : '',
        commentaire : ''
      })
    }
    DeleteItem = (todo) => {
        let newt=this.state.tabuser;
        let newtt=this.state.tabuser.indexOf(1);
        newt.splice(newtt);
        this.setState({
          tabuser : newt
        })
    }
    UpdateItem = (todo) => {
      let updatetab=this.state.tabuser.filter((item,index) => {
        if(item.id===index.id){
          item.commentaire=index.commentaire;
        }
        return item;
      } )
      this.setState({
        tabuser : updatetab
      })
    }
    
    
      


   
    
    

    render(){
    return(
        <div>
        <p>   
        <strong> Comment se forger un corps de body-builder ? </strong><br /> 
        Le culturisme est un vrai sport de passionnés à la quête d’un idéal physique, avec le constant souci du détail et de la perfection. 
        Un sport qu’admire d’ailleurs beaucoup notre coach sportif David Costa. Il l’associe ainsi volontiers à un art plastique où, tel le sculpteur, 
        le culturiste façonne son corps selon l’image qu’il veut atteindre.
        </p>
        <img src={Coach} />
        <p>
         <strong>      Le culturisme et son évolution </strong> <br />
        La visualisation des statues masculines de la mythologie grecque nous permet de voir la présence de l’esthétique dans la société grecque antique. On pourrait donc considérer Héraclès comme un ancêtre du culturisme.
        Apparition au 19ème siècle
        En France, le culturisme à pour ancêtre la « culture physique » et Hyppolyte Triat (1813-1881) en est l’instaurateur. Suite à la lecture du livre de Jérôme Mercurialis « Del arte gymnastica », il créa un gymnase à Paris en 1854 et inventa les appareils à poulies avec charges, les exercices avec haltères courts et barres longues et les principes de localisation musculaire. Par la suite, Georges Hébert, considéré comme le père de la culture physique en France et auteur de nombreux ouvrages, mais également Edmond Desbonnet, poursuivirent sur les voies de Triat.

        En Europe, l’athlète allemand Eugen Sandow, né en 1867, célèbre pour ses démonstrations esthétiques dans de nombreuses expositions ou des spectacles en France, en Grande-Bretagne et aux États-Unis diffusa le culte du de l’esthétique physique. Grâce à Eugène Sandow, les physiques plus « modernes »  et esthétiques que ceux des athlètes de force furent mis en avant.
        Les premiers concours
        Au début des années 1900, aux USA Bernard Mac Fadden publie de nombreux ouvrages sur la culture physique pour femmes et pour hommes en mettant davantage l'accent sur la santé – dans les magazines « Physical Culture » et « Beauty and health » notamment.

        Les premiers concours de culturisme débutèrent à Londres en 1902, en France en1935 et aux Etats-Unis en 1939. Puis, par la suite, Joe Weider, Larry Scott ou encore Arnold Schwarzenegger ont marqué l’histoire du culturisme.
        </p>
        <img src={Player} />
        <p>
        Pour se forger un corps de culturiste, il faut suivre un programme intense de développement musculaire ou encore d’hypertrophie. Celui-ci repose sur 3 principes fondamentaux :

        –    la musculation ciblée avec charges : le développement musculaire repose sur le phénomène de l’hypertrophie musculaire en réponse à une stimulation et des microlésions des fibres musculaires pour faire face à une certaine intensité de travail ;

        –    la nutrition : l’apport énergétique total doit être légèrement supérieur aux besoins de l’individu pour maintenir son poids afin de lui assurer suffisamment de macro-nutriments pour avoir de l’énergie lors des séances – glucides – mais aussi pour pouvoir récupérer et favoriser sa croissance musculaire – protéines, acide aminés. Les micros-nutriments, tout comme l’hydratation, joueront également un rôle un important dans l’assimilation des nutriments mais aussi dans les diverses réactions chimiques de l’organisme ;

        –    le repos, la récupération : lors des phases de récupération – sommeil –, les tissus musculaires se réparent et se développent. Il faut savoir que 60 à 90% de la production d'hormone de croissance se fait durant les 3 premières heures de sommeil, c’est-à-dire le sommeil profond.
        </p>
        <p>
        Culturisme et dopage
        Pour ensuite atteindre un niveau de développement musculaire hors normes, le recours au dopage avec l’utilisation d’anabolisants est nécessaire. Mais cela doit évidemment se faire en respectant certaines règles et en évitant tout abus.

        Enfin, le plus important peut-être reste de souligner qu’avec du travail, de la volonté et du temps, le développement musculaire naturel peut déjà donner un résultat fantastique. Pour cela n’hésitez pas à contacter David Costa, qui vous à optimiser ou développer votre physique !

        Et pour aller plus loin…
        </p>
        <img src={Priest} id="priest" />
        <p>
        Ces conseils ne tiennet pas compte des caractéristiques physiques de chacun. 
        Pour un programme complet et personnalisé, 
        David vous propose une méthode à distance qui vous permettra d'atteindre vos objectifs en un temps record.
        </p>
        <div className="chat">
        <strong> JOIN THE DISCUSSION <FaRocketchat /> </strong>
        <h3> New comment : </h3>
        <input type="text" placeholder="Name :" value={this.state.pseudo} onChange={this.handleChangepseudo}  /><br />
        <input type="text" placeholder="Comment :" value={this.state.commentaire} onChange={this.handleChangecommentaire} /><br />
         <p>{this.state.compteur} characters </p>
        <button  onClick={this.AddItem} > POST COMMENT  </button>      <button onClick={this.EditChange}> Show/hide </button>
        {
          this.state.EditMode ? this.state.tabuser.map(item => <Homecomment key={item.id} nomt={item.nomm} commentt={item.commentaire} todo={item} DeleteItem={this.DeleteItem} UpdateItem={this.UpdateItem}  />) : '' 
        }
        
        </div>
        </div>
    )
  }
}
export default Home;