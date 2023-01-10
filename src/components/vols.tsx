import React, { useState} from "react"
import '../App.css';
import AirportItem from './details/volCard';
import { Vol } from "../types/typesVol"
import { Button, Form, Header, Row, Search, Wrapper } from './styled';
import axios from "axios";


const App: React.FC = () => {
  const [vols, setVol] = useState<Vol[]>([])
  const [searchOrigin, setSearchOrigin] = useState<string>("")
  const [searchDestination, setSearchDestination] = useState<string>("")
  const [searchDate, setSearchDate] = useState<string>("")



  const [error, setError] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    if(e.target.id === "1"){
        setSearchOrigin(e.target.value)
    }
    if(e.target.id === "2"){
        setSearchDestination(e.target.value)
    }
    if(e.target.id === "3"){
        setSearchDate(e.target.value)
    }



  }

  const getVol = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const options = {
    method: 'GET',
    url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
    params: {
        origin: `${searchOrigin}`,
        destination: `${searchDestination}`,
        date: `${searchDate}`,

        adults: '1',
        currency: 'USD',
        countryCode: 'US',
        market: 'en-US'
    },
    headers: {
        'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
        'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {
        const data = response.data;
        console.log(response.data);
        setVol(data.data);
    }).catch(function (error) {
        console.error(error);
    });
  }
  return (
    <div>
      <Wrapper>
        <Row>
          <Header >Trouver un Aeroport </Header>
        </Row>
        <Form onSubmit={getVol}>
          <Search
            type="text"
            id="1"
            placeholder='Départ'
            value={searchOrigin} 
            onChange={handleChange}/>
            
            <Search
            type="text"
            id="2"
            placeholder='Arrivée'
            value={searchDestination} 
            onChange={handleChange}/>

            <Search
            type="text"
            id="3"
            placeholder='Date (exemple : 2023-01-12)'
            value={searchDate} 
            onChange={handleChange}/>
            
            <Button type='submit'> Rechercher </Button>
        </Form>
        <div>
          { vols.length > 0 &&
            vols.map(vol => <AirportItem key={vol.legs[0].origin.name} vol={vol}/>)
          }
        </div>
      </Wrapper>
    </div>
  );
}

export default App;