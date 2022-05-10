import './App.css';
import { Navbar2 } from './components/navBar/navbar';
import { ItemListContainer } from './containers/itemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemDetailContainer} from './containers/itemDetailContainer/ItemDetailContainer'
import { Cart } from './components/cart/Cart'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar2></Navbar2>
        <Routes>
          <Route exact path="/" element={<main><ItemListContainer/></main>}/>
          <Route path="/detalles/:id" element={ <ItemDetailContainer/> }/>
          <Route path="/cart" element={ <Cart></Cart> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


