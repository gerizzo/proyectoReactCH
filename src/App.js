import './App.css';
import { Navbar2 } from './components/navBar/navbar';

import { ItemListContainer } from './containers/ItemListContainer';

function App() {
  return (
    <div>
        <Navbar2></Navbar2>
      <main>
        <ItemListContainer></ItemListContainer>
      </main>
    </div>
  );
}

export default App;


