import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { Route,Switch } from 'react-router'
import Home from "./components/Home"
import ShowProduct from "./components/ShowProduct"
import Privacy from "./components/Privacy"
import TermsAndCond from "./components/TermsAndCond"
export default function App() {
  return (
    <>
        <Switch>
            <Route path="/" exact>
              <Home/>
            </Route> 
            <Route path="/view/:id" exact >
              <ShowProduct/>
            </Route> 
            <Route path="/privacy" exact>
              <Privacy/>
            </Route> 
            <Route path="/terms-and-conditions" exact>
              <TermsAndCond/>
            </Route> 

          </Switch>
    </>
  )
}
