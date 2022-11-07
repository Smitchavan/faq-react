
import React, { Component } from 'react'
import Contact from './components/contact'
import Faq from './components/faq'
import Navbar from "./components/Navbar/Nav"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import data from './data/faq.json'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Faq data={data}></Faq>}></Route>
      <Route path='contact' element={<Contact></Contact>}></Route>
      </Routes>
      </BrowserRouter>
    )
     
  }
}

