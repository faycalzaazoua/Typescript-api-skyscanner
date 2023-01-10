import React from "react";
import jokesImg from '../images/geste.jpeg';
import { Image } from './styled';


export default function Home() {
    
    return(
        <div>
            <h1 id="title"> Bienvenue sur la page d'accueil</h1>
            <div id="geste">
                <h3>
                    Les gestes barrières covid dans l'aeroport
                </h3>
                <pre>
                Le port du masque dans les situations à risque agit comme une barrière <br />
                physique contre les projections de particules virales dans l’air lorsqu’il est correctement utilisé. <br />
                L’hygiène des mains avec un lavage régulier à l’eau et au savon pendant 30 secondes, reste essentielle. <br />
                Le fait d’éviter de se toucher le visage, en particulier le nez, la bouche et les yeux, de se couvrir <br />
                systématiquement le nez et la bouche en toussant ou en éternuant dans son coude, et de recourir à des mouchoirs <br />
                à usage unique est fortement recommandé.
                Au contact des autres, il est vivement recommandé d’aérer régulièrement <br />
                la pièce (10 minutes toutes les heures si possible), de se saluer sans se serrer la main et d’éviter les embrassades.
                </pre>


            </div>
        </div>
        
    )
}