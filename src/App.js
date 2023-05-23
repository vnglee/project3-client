
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Posts from './pages/Posts';
import EditPosts from './pages/EditPosts';
import PostDetails from './pages/PostDetails';
import Recipes from './pages/Recipes';
import Reviews from './pages/Reviews';

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


    <Route element={<NotLoggedIn/>}>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
    </Route>

    <Route element={<LoggedIn />}>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/:id' element={<EditProfile/>}/>
        <Route path='/posts' element={<Posts/>} />
        <Route path='/posts/edit/:id' element={<EditPosts/>} />
        <Route path='/posts/details/:id' element={<PostDetails/>} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/reviews' element={<Reviews/>} />
    </Route>


  </Routes>


    </div>
  );
}

export default App;
