import './App.css';
import Navbar from './components/Navbar';
import './components/Navbar/navbar.css';
import ItemListContainer from './components/Container/itemlistcontainer';


const App = () => {

  const persona = { nombre: "JR", proyecto: "JR Shoes" };

  return (
    <div className="App">
    
    <ItemListContainer greeting="LIFE IN SHOES"/>
    <Navbar/>
     
      <header className="App-header">
       <p>
          Bievenidos a {persona.proyecto}
        </p>
      </header>
    </div>
  );
}
export default App;