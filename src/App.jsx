import React,{useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Update from './Pages/Update';
import Create from './Pages/Create';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  const[id,setId]=useState(0)
  return (
    <div>
    <BrowserRouter>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path='/' element={<Home setId={setId} />} />
      <Route path='/update/:id' element={<Update id={id} />} />
      <Route path='/create' element={<Create />} />
    </Routes>
    <div>
      <Footer/>
    </div>
    </BrowserRouter>
    </div>
  );
};

export default App;