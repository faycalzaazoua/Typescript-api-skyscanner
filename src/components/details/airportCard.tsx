import { Airport } from "../../types/typesAirport";
import { CardBottom, CardTop, CardWrapper, Delivery, Setup } from "../styled";
import {Link , useParams} from "react-router-dom"



interface AirportProps{
    airport: Airport;
}

const AirportItem: React.FC<AirportProps> = ({airport}) =>{

    const handleFavoriteClick = () => {
        let stringifiedFavoriteIds = localStorage.getItem("favoriteIds");
        let favoriteIds = [];
    
        if (stringifiedFavoriteIds) {
          favoriteIds = JSON.parse(stringifiedFavoriteIds);
        }
    
        if (!favoriteIds.includes(airport.GeoId)) {
          favoriteIds.push(airport.ResultingPhrase);
          stringifiedFavoriteIds = JSON.stringify(favoriteIds);
          localStorage.setItem("favoriteIds", stringifiedFavoriteIds);
        }
      };



    return(
        <CardWrapper>
            <CardTop>
                {
                    <>
                    <Setup>{airport.PlaceName}</Setup>
                    <Delivery> {airport.CityName}</Delivery>
                    <button onClick={handleFavoriteClick}>Ajouter au favoris</button>
                    </>
                }
        
            </CardTop>
            <CardBottom>
                <p>{airport.GeoId}</p>
            </CardBottom>
        </CardWrapper>

    )
}

export default AirportItem