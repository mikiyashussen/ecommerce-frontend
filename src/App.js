import logo from './logo.svg';
import './App.css';

// pages

// components
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import Categories from './components/Categories/Categories';
import ProductsList from './pages/ProductsList/ProductsList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <Categories />
      <ProductsList />
    </div>
  );
}

export default App;
