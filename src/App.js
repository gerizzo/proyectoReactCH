import './App.css';
import { Navbar2 } from './components/navBar/navbar';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar2></Navbar2>
      <ItemListContainer estado="EN MANTENIMIENTO"></ItemListContainer>
    </div>
  );
}

export default App;