import './App.css';
import { Navbar2 } from './components/navBar/navbar';
import { CardProducts } from './components/cardProducts/CardProducts';
import imgBuzoCeleste from './assets/img/buzoCeleste.jpg'
import imgBuzoNaranja from './assets/img/buzoNaranja.jpg'
import imgBuzoVioleta from './assets/img/buzoVioleta.jpg'

function App() {
  return (
    <div>
        <Navbar2></Navbar2>
      <main>
        <CardProducts nombre="Buzo Hoodie Classic" img={imgBuzoNaranja} tipo="buzo" stock={5} precio="$4000" color="Naranja"></CardProducts>
        <CardProducts nombre="Buzo Hoodie Classic" img={imgBuzoCeleste} tipo="buzo" stock={3} precio="$3500" color="Celeste"></CardProducts>
        <CardProducts nombre="Buzo Hoodie Classic" img={imgBuzoVioleta} tipo="buzo" stock={4} precio="$3500" color="Violeta"></CardProducts>
      </main>
    </div>
  );
}

export default App;