import { Routes, Route } from 'react-router-dom'
// pages

// components
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import Categories from './components/Categories/Categories';
import ProductsList from './pages/ProductsList/ProductsList';
import SingleProduct from './pages/SingleProduct/SingleProduct';


import './App.scss'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<LandingPage />}/>
          <Route path='categories'  element={<Categories />}/>
          <Route path='products-list'  element={<ProductsList />}/>
          <Route path='categories/categoryname/item-id' element={<SingleProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
