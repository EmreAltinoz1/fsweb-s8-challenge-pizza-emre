import { useState } from 'react'
import workintech from '/workintech.svg'
import './App.css'
import Home from './pages/home'
import Siparis from './pages/siparis'
import Sonuc from './pages/sonuc'
import { Switch, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Switch>
      <Route exact path="/">
       <Home/>
      </Route>
    
      <Route exact path="/siparis">
       <Siparis/>
      </Route>

      <Route exact  path="/sonuc">
       <Sonuc/>
      </Route>
    </Switch>
    </>
  )
}

export default App
