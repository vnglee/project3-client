
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

    <Navbar/>

  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>


    </div>
  );
}

export default App;
