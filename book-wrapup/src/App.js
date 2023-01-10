import './App.css';
import Header from "./Components/Header"
import TopFiveBooks from './Components/TopFiveBooks';
import YearlyFavorites from './Components/YearlyFavorites';
import Footer from "./Components/Footer"

function App() {
  return (
    <div>
      <Header></Header>
      <TopFiveBooks></TopFiveBooks>
      <YearlyFavorites></YearlyFavorites>
      <Footer></Footer>
    </div>
  );
}

export default App;
