import { Routes, Route } from 'react-router-dom'
// pages

// components
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import Categories from './components/Categories/Categories';
import Products from './pages/Products/Products';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Footer from './components/Footer/Footer';



import './App.scss'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<LandingPage />}/>
          <Route exact path='categories'  element={<Categories />}/>
          <Route exact path={'categories/:category'}  element={<Products />}/>
          <Route path={'categories/:category/:id'} element={<SingleProduct />} />
          <Route path={'cart'} element={<Cart />} />
          <Route path={'payment'} element={<Payment />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
