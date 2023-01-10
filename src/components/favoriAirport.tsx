
import React, { useState, useEffect} from "react"
import '../App.css';
import AirportItem from './details/airportCard';
import { Airport } from "../types/typesAirport"
import { Button, Form, Header, Row, Search, Wrapper } from './styled';
import axios from "axios";


const App: React.FC = () => {
  const [airports, setAirport] = useState<Airport[]>([])
  const [tab, setTab] = useState<string | null >("")
  const [final, setFinal] = useState<string[]>([])
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
    useEffect(() => {
      setTab(fetchFavAer);
      // console.log(tab);
      if(tab != null){
        let a = tab.replace('[', '');
        // console.log(a);
        let b = a.replace(']', '');
        // console.log(b);
        let c = b.split(',');
        // console.log(c);
        setFinal(c);

          console.log(final);

        
      }
  }, [tab]);   


    const options = {
      method: 'GET',
      url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchAirport',
      params: {query: 'london'},
      headers: {
        'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
        'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        // console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });



  return (
    <div>
      <Wrapper>
        <Row>
          <Header >Mes aeroports favoris </Header>
        </Row>

        <div>
          <p>Compte tenu des crash fréquent de l'api sur les "flights", j'ai appliquer le système d'ajout de favori sur les aeroports 
            qui eux ne tombaient pas down. Je n'ai pas eu le temps de faire un affichage correct mais je récupère ci dessous les "GeoId" 
            de chaque aeroport ajouté en favori (localStorage) :

          </p>
          { final }
        </div>
      </Wrapper>
    </div>
  );
}

export default App;