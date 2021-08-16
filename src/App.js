import './App.css';


import { BrowserRouter , Switch , Route } from "react-router-dom";
import Home from './pages/Home'



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/" render={(props)=> <Home {...props}  />} />


      </Switch>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
