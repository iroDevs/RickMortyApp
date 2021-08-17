import React, { Component } from 'react';
import * as api from '../services/api';
import Favoritos from '../pages/Favoritos';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/HomeStyle.css'

import { Link } from 'react-router-dom';



export default class Home extends Component {
  constructor(props){
    super(props)
   
   
    this.state = {
      ListaInfo: [],
      loading: true,
      favoritos:[],
    }
    this.ClickButton = this.ClickButton.bind(this);
  }

componentDidMount(){
  this.info();
}

 organizaArray(a){
    
  let jaVisto = {};
    return a.filter(function(item) {
        return jaVisto.hasOwnProperty(item) ? false : (jaVisto[item] = true);
    });


 }

 ClickButton(event){
   console.log(event.target.value);
   const ID = event.target.value;
   localStorage.setItem('favortitos'+ID,ID);

  
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
    
    const {ListaInfo , loading} = this.state;
    


    if(loading === false){

    return (
     <div>
       <Link to="/favoritos">Favoritos</Link>
        <p>Home</p>
      <div className='H-container'>
      {
        ListaInfo.map((obj)=>{
          
          
        return (
          <ol>
              <li>
                  <Card border='success' key={obj.id} text='light' bg='dark' style={{ width: '18rem', height: '520px' }}>
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
                  <Button variant="success" value={obj.id} onClick={this.ClickButton}>Favorito</Button>
                </Card.Body>
               </Card>
            </li>
        </ol>
        
          );
        })
      }

 
       </div>
      </div>
    )
     }
     return (
    <p>Carregando...</p>
  )
  }

  

}
