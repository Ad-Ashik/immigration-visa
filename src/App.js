import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './Pages/CheckOut/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/checkout/:checkoutId' element={<CheckOut></CheckOut>}></Route>
        <Route path='/singup' element={<Register></Register>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
