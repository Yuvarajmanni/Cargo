import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Addcontainer from './pages/Addcontainer';
import Deletecontainer from './pages/Deletecontainer';
import Updatecontainer from './pages/Updatecontainer'
import Navbar from './components/Navbar';
import TitleBar from './components/TitleBar';
import './App.css';
function App()
{
  return(
    <BrowserRouter>
    <TitleBar />
    <Navbar />
    <div className="content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Addcontainer/>} />
            <Route path="/delete" element={<Deletecontainer/>} />
            <Route path="/update" element={<Updatecontainer/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;