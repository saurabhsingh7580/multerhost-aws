import React from "react";
import {Routes,Route} from  "react-router-dom"
import AddUserData from './components/AddUserData';
import ShowData from './components/ShowData';
import Navbars from './components/Navbar';
import Table from "./components/TablePdf";


function App() {
  return (
    <div className="App">
      <Navbars/>
      <Routes>
        <Route path='/adduser' element={<AddUserData />}/>
        <Route path='/viewuser' element={<ShowData />}/>
        <Route path='/table' element={<Table />}/>
      </Routes>
    </div>
  );
}

export default App;
