import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequirAuth from './Pages/Login/RequirAuth/RequirAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

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
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singup' element={<Register></Register>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
