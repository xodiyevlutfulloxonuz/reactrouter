import {BrowserRouter, Routes, Route, Redirect, Navigate} from 'react-router-dom'
import Home from './components/home'
import Profile  from './components/profile'
import NotFound from './components/notfound'
import Posts from './components/posts'
import PostItem from './components/postItem'
import Header from './components/header'
import './components/Style.css'


function App() {
  return (
    <BrowserRouter>
   <Header/>
     <div className="container">
     <Routes>
     <Route path="/"  element={<Home/>}/>
     <Route path="/profile" element={<Navigate replace to="/"/>}/>
     <Route path="/posts/:id" element={<PostItem/>}/>
     <Route path="/posts" element={<Posts/>}/>
     <Route path="*" element={<NotFound/>}/>
     </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
