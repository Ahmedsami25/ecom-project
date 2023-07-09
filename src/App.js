import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { Cart } from './pages/Cart';
import { Products } from './pages/Products';
import { Singlep } from './pages/Singlep';
import { Login } from './pages/Login';
import { Footer } from './pages/Footer';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Nav/>
     
      {/* <Products/> */}
      {/* <Products /> */}
      <Routes>
        {/* <Route path='/' element={<Nav />} /> */}

        <Route path='/' element={<Products />} />

        <Route path='products' element={<Products/>} />
        <Route path='products/:id' element={<Singlep/>} />

        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login />} />

        {/* <Route path='' element={} /> */}

      </Routes>
      <br></br>
      <Footer/>
    </div>
  );
}

export default App;
