import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Router, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import CreatePost from './components/CreatePost/CreatePost';
import Explore from './components/Explore/Explore';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Messenger from './components/Messenger/Messenger';
import Notifications from './components/Notifications/Notifications';
import Profile from './components/Profile/Profile';
import UniqItem from './components/UniqItem/UniqItem';
import HomeWrapper from './pages/HomeWrapper';
import { selectUsers } from './store/slices/users/usersSlice';

function App() {
  const {currentUser} = useSelector(selectUsers)
  const {pathname} = useLocation()
  const navigate = useNavigate()

  useEffect(()=> {
      if (!currentUser && pathname !== '/login') {
          navigate('/login')
      }
  },[pathname,currentUser])

  return (
    <div className="App">
        <Routes>
          <Route  path='/' element={<HomeWrapper/>}>
          <Route index element={<Main/>}/>
          <Route path=':id/uniq' element={<UniqItem />} />
          <Route path='messenger' element={<Messenger />} />
          <Route path='notification' element={<Notifications />} />
          <Route path='explore' element={<Explore />} />
          <Route path='profile' element={<Profile />} />
          <Route path='create' element={<CreatePost />} />
         </Route>
         <Route  path='/login' element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
