
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
import AddPage from './Pages/AddPage';
import Details from './Pages/Details';
import Basket from './Pages/Basket';
import Wishlist from './Pages/Wishlist';
import {  HelmetProvider } from 'react-helmet-async';
const helmetContext = {};


function App() {

  return ( 
  <HelmetProvider context={helmetContext}>
    <BrowserRouter>
     <Routes>
     <Route path='/' element={<Layout/>}>
<Route path='/' element={<HomePage/>}/>
<Route path='/add' element={<AddPage/>}/>
<Route path='/:id' element={<Details/>}/>
<Route path='/basket' element={<Basket/>}/>
<Route path='/wish' element={<Wishlist/>}/>
     </Route>
     </Routes>
    </BrowserRouter> 
     </HelmetProvider>
  )
}

export default App
