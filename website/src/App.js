import React, { useReducer } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Pages/Home'
import Mapi from './components/Mapi'
import Pm10 from './components/Pages/Pm10'

const initialParameter={
  pollutant:'pm35',
  city:'Delhi',
  country:'IN'

}

const initialData={}

export const ParamContext=React.createContext();

const reducer =(Parameter,action)=>{
  switch(action){
    case 'pm10':
      return (Parameter={...Parameter,
        pollutant:'pm10'})
    case 'pm25':
      return (Parameter={...Parameter,
        pollutant:'pm25'})
    case 'no2':
      return (Parameter={...Parameter,
        pollutant:'no2'})
    case 'so2':
      return (Parameter={...Parameter,
        pollutant:'so2'})
    default:
    return ({...Parameter})

  }
  
}
function App() {
const [parameter,dispatch]=useReducer(reducer,initialParameter)
  return (
    <div className="App">
      <ParamContext.Provider value={{ParamState:parameter, ParamDispatch:dispatch}}>
      <Router>
        <Navbar/>
        <Mapi/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/pm10' exact component={Pm10}/>
        </Switch>
      </Router>
      </ParamContext.Provider>
    </div>
  );
}

export default App;
