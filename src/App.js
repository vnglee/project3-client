
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Post from './pages/Post';

function App() {

  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to='/' />
  }

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet/> : <Navigate to='/' />
  }

  return (
    <div className="App">

    <Navbar/>
    
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/profile' element={<Profile/>} />

    <Route element={<NotLoggedIn/>}>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
    </Route>

    <Route element={<LoggedIn />}>
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/:id' element={<EditProfile/>}/>
        <Route path='/posts' element={<Post/>} />
    </Route>


  </Routes>


    </div>
  );
}

export default App;
