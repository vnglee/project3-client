
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Posts from './pages/Posts';

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
    {/* <h1 className="text-3xl font-bold">Hello world!</h1>
      <p className="mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam qui
        minima autem nobis animi perspiciatis deleniti quaerat, recusandae
        officiis ea totam quisquam repellat quidem perferendis ad! Vel officia
        voluptatibus ipsam.
      </p>
      <button className="bg-indigo-600 hover:bg-indigo-800 mt-4 py-2 px-4 rounded">
        Click Me
      </button> */}
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
        <Route path='/posts' element={<Posts/>} />
    </Route>


  </Routes>


    </div>
  );
}

export default App;
