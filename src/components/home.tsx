import React from "react";
import jokesImg from '../images/geste.jpeg';
import { Image } from './styled';


export default function Home() {
    
    return(
        <div>
            <h1 id="title"> Bienvenue sur la page d'accueil</h1>
            <div id="geste">
                
        <div id="task">
                <h3>Fait :  </h3>
                <h4>- Pouvoir rechercher un aeroport par localité</h4>
                <h4>- Pouvoir ajouter un de ces aeroports à une liste de favori (j'ai effectué l'ajout de favori sur les aeroport plutot
                    que sur les vols car la parti vol est constamment down donc très compliqué de bosser dessus + de 5min)</h4>
                <h4>- Afficher ma liste d'aeroports favori via une page dédié à ca "Mes favoris airport"</h4>
                <h4>- Pouvoir rechercher un vol en indiquant departure, destination et une date depuis une page dédié "Les vols"</h4>
                <h4>- Avoir accès à une page de détail pour chacun des vols - redirection vers une page detail/id_du_vol - Non finalisé 
                    par manque de temps et de possibilité de faire des tests
                </h4>
                </div>
                <div id="notask">
                <h3>Non Fait :  </h3>
                <h4>- Apporter du style à la plateforme</h4>
                <h4>- gestion des vols retours</h4>
                <h4>- Pouvoir supprimer un favoris</h4>
                <h4>- Finaliser la vue détail</h4>

                </div>

                <p>Mardi10/01 à 23h54</p>
        

            </div>
        </div>
        
    )
}