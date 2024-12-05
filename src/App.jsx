import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Siparis from './pages/siparis'
import Sonuc from './pages/sonuc'
import { Switch, Route } from "react-router-dom"
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

function  App() {

  return (
    <>
    <Switch>
      <Route  path="/">
       <Home/>
      </Route>
    
      <Route  path="/siparis">
       <Siparis/>
      </Route>

      <Route   path="/sonuc">
       <Sonuc/>
      </Route>
    </Switch>
    </>
  )
}

export default App
