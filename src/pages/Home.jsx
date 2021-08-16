import React, { Component } from 'react';
import * as api from '../services/api';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Home extends Component {
  constructor(props){
    super(props)
   
   
    this.state = {
      ListaInfo: [],
      loading: true,
    }
  }

componentDidMount(){
  this.info();
}

  async info() {
  const personagens = await api.getInfoByApi('character');

    this.setState(({
      ListaInfo: [...personagens.results],
      loading: false,
    }))
 

  return personagens;

}
  
  render() {
    
    const {ListaInfo} = this.state;
    console.log(ListaInfo);
    


    return (
     <div>
        <p>Home</p>
      
      {
        ListaInfo.map((obj)=>{
          
          
          return (
            <ol>
              <li>
             <Card style={{ width: '18rem' }}>

            <Card.Img variant="top" src={obj.image} />

          <Card.Body>
              <Card.Title>{obj.name}</Card.Title>
          <Card.Text>
            <ul>
              <li>Genero:{obj.gender} </li>
               <li>Localização:{obj.location.name} </li>
                <li>Especie:{obj.species} </li>


              

            </ul>
          </Card.Text>

          <Button variant="primary">Favorito</Button>
        </Card.Body>
      </Card>
</li>
</ol>



          );
        })
      }

 
       
      </div>
    )
  }
}
