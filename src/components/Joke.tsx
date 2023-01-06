import { Airport } from "../types/types2";
import { CardBottom, CardTop, CardWrapper, Delivery, Setup } from "./styled";

interface AirportProps{
    airport: Airport;
}

const AirportItem: React.FC<AirportProps> = ({airport}) =>{
   
    return(
        <CardWrapper>
            <CardTop>
                {
                    <>
                    <Setup>{airport.PlaceName}</Setup>
                    <Delivery> {airport.CityName}</Delivery>
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