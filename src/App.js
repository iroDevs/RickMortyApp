import './App.css';


import { BrowserRouter , Switch , Route } from "react-router-dom";
import Home from './pages/Home'
import Favoritos from './pages/Favoritos';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/" render={(props)=> <Home {...props}  />} />
       <Route exact path="/favoritos" render={(props)=> <Favoritos {...props}  />} />


      </Switch>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
