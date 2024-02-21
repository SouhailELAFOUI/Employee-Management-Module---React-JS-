import { useState } from 'react'

import './App.css'
import ListEmployeesComponent from './components/ListEmployeesComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'
function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
          <Routes>
            {/* Routes for http:localhost:3000/ and http:localhost:3000/employees */}
            <Route path='/' element ={<ListEmployeesComponent />}> </Route>
            <Route path='/employees' element ={<ListEmployeesComponent />}> </Route>
            <Route path='/add-employee' element ={<EmployeeComponent />}> </Route>
            {/* Upsate employee  */}
            <Route path='/update-employee/:id' element ={<EmployeeComponent />}> </Route>
          </Routes>
      <FooterComponent />
     </BrowserRouter>    

    </>
  )
}

export default App
