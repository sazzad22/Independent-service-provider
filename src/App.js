import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home'
import Header from './Pages/Home/Header/Header'
import Footer from './Pages/Home/Footer/Footer'
import AboutMe from './Pages/AboutMe/AboutMe'
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import NotAvailable from './Pages/NotAvailable/NotAvailable';





function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
        <Route path='*' element={<NotAvailable></NotAvailable>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
