
import React, { useState, useEffect} from "react"
import '../App.css';
import AirportItem from './details/airportCard';
import { Airport } from "../types/typesAirport"
import { Button, Form, Header, Row, Search, Wrapper } from './styled';
import { CardBottom, CardTop, CardWrapper, Delivery, Setup } from "./styled";

import axios from "axios";


const App: React.FC = () => {
  const [airports, setAirport] = useState<Airport[]>([])
  const [tab, setTab] = useState<string | null >("")
  const [final, setFinal] = useState<string[]>([])
  const [GTF, setGTF] = useState<Airport[]>([])
  const [GTFA, setGTFA] = useState<String[]>([])


  const [error, setError] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")

    const [aerFav,setAerFav] = useState([]);
    useEffect(() => {
        fetchFavAer();
    }, []);
    const fetchFavAer = () => {
        const stringifiedFavoriteIds = localStorage.getItem("favoriteIds");
        // const favoriteIds = JSON.parse("stringifiedFavoriteIds");
        //   setTab(stringifiedFavoriteIds);
        // setTimeout(() => { 
         
        // },10000);

   return stringifiedFavoriteIds;
        
    }
    useEffect( () => {
      setTab(fetchFavAer);
      // console.log(tab);
      if(tab != null){
        let a = tab.replace('["', '');
        // console.log(a);
        let b = a.replace('"]', '');
        // console.log(b);
        let c = b.split('","');
        // console.log(c);
        setFinal(c);

        setGTFA(c);

        let GT :Airport[] = [];
        
        for(let i = 0; i < c.length ; i++){

        
          // console.log(c);
          const options = {
            method: 'GET',
            url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchAirport',
            params: {query: c[i]},
            headers: {
              'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
              'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            const data = response.data;
            // console.log(response.data);
            setAirport(data.data)
            GT.push(data.data);
            // console.log(data.data);

          }).catch(function (error) {
            console.error(error);
          });


        }
            setGTF(GT);

        
      }
  }, [tab]);  
  
  
  
  // console.log(GTFA);

  

// GTF.map(
//   (fav :Airport) => 
//   console.log(fav.CityName)

// )
   



  return (
    <div>
      <Wrapper>
        <Row>
          <Header >Mes aeroports favoris </Header>
        </Row>

        <div>
          <p>Voici les lieux Aeroport mis en favoris :

          </p>
          { GTFA.map( (fav ) =>
         
            <CardWrapper>
            <CardTop>
                {
                    <>
                    <Setup>{fav}</Setup>
                    <button >Supprimer</button>
                    </>
                }
        
            </CardTop>
            <CardBottom>
                <p></p>
            </CardBottom>
        </CardWrapper>
          ) } 
        </div>
      </Wrapper>
    </div>
  );
}

export default App;