import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import About from './Pages/Home/About/About';
import Blogs from './Pages/Home/Blogs/Blogs';
import Country from './Pages/Home/Country/Country';
import Home from './Pages/Home/Home/Home';
import Visa from './Pages/Home/Visa/Visa';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequirAuth from './Pages/Login/RequirAuth/RequirAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout/:checkoutId' element={
          <RequirAuth>
            <CheckOut></CheckOut>
          </RequirAuth>
        }></Route>
        <Route path='/visa' element={<Visa></Visa>}></Route>
        <Route path='/country' element={<Country></Country>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
