import React from 'react';
import moncss from './Header.css';
import Logo from './Bodylogo.png';
import Home from '../Component/Home';
import Picture from '../Component/Picture';
import Subscribe from '../Component/Subscribelogin';
import Videos from '../Component/Video';
import Footer from './Footer';
import {FaDumbbell} from 'react-icons/fa';
import Builderdata from '../Component/Bodybuilderformdata';
import Propsbuildedata from '../Component/propsdataform';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

const Header = () => {
   return(
       <div>
       <nav>
       <img src={Logo} id="logo" />
       <Router>
       <ul type="none">
       <li><Link to="/Home" >    Home  </Link></li>
       <li><Link to="/Picture"> Picture </Link> </li>
       <li> <Link to="/Videos">Videos </Link> </li>
       <li><Link to="/Auth"> Subscribe & Login </Link> </li> 
       </ul>
       <Switch>
      
       <Route path="/Home">
        <Home />
       </Route>
       <Route path="/Picture">
         <Picture />  
       </Route>
       <Route path="/Videos">
        <Videos />   
       </Route>
       <Route path="/Auth">
         <Subscribe />  
       </Route>
       <Route path="/Builderdata">
         <Builderdata />  
       </Route>
       <Route path="/Builderdataprops">
         <Propsbuildedata />  
       </Route>
       </Switch>
       </Router>
       

       </nav>
       <h1> <FaDumbbell /> Bodybuilding <FaDumbbell />   </h1>
       <hr/>
       <p>
       Le culturisme1, en anglais bodybuilding2,3, est une discipline et un art de la performance qui consiste principalement à développer sa masse musculaire (hypertrophie) dans un but esthétique puis à l'exhiber en exécutant des poses plastiques codifiées, isolément ou enchaînées dans une chorégraphie.

       La préparation du culturiste pour une compétition se compose principalement d'un entraînement de musculation, de repos, et d'un contrôle strict de l'alimentation (régime généralement riche en protéines et nutriments essentiels, avec un apport calorique très variable selon les phases de la préparation).

       Les culturistes professionnels exposent le fruit de leur travail lors de compétitions pendant lesquelles ils doivent défiler devant un jury qui évalue leur développement musculaire, leur définition, leur harmonie générale, et les classe selon un barème.

       Sport uniquement pratiqué par des hommes à l'origine, des femmes ont commencé à prendre part à des compétitions distinctes au cours des années 1980.

       Le culturisme ne doit pas être confondu avec la musculation, méthode d'entraînement principale du culturiste mais pouvant être pratiquée pour d'autres motifs. Il ne faut pas le confondre non plus avec les compétitions de sport de force et de force athlétique, où c'est la force pure qui est recherchée, ni avec l'haltérophilie où l'on accorde autant d'attention à la force physique qu'à la technique. Bien qu'il y ait des similitudes entre ces disciplines, le culturisme implique des différences majeures au niveau des objectifs (avant tout d'ordre esthétique), du type d'entraînement et du régime alimentaire.

       </p>
       
       </div>
   )
}
export default Header;