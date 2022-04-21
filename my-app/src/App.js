import logo from './logo.svg';
import './App.scss';
import Navbar from './navigation/Navbar';
import Slider from './slider/Slider';
import Categories from './categories/Categories';
import Recipes from './Recipes/Recipes';
import Kitchen from './Kitchen/Kitchen';
import Instagram from './Instagram/Instagram';
import DiffRecipes from './diffRecipes/DiffRecipes';
import Subscribe from './Subscribe/Subscribe';
import Footer from './Footer/Footer';


function App() {
  return (
   <>
   <Navbar/>
   <Slider/>
   <Categories/>
   <Recipes/>
   <Kitchen/>
   <Instagram/>
   <DiffRecipes/>
   <Subscribe/>
   <Footer/>
   </>
  );
}

export default App;
