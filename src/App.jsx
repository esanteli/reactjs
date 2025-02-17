import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Importa el componente NavBar
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importamos React Router
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* Aquí agregamos el componente NavBar */}
      <NavBar />
      
      {/* Rutas */}
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Welcome to Like10's Store!" />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/blog" element={<h1>Blog Page</h1>} />
      </Routes>

      {/* Botón para mostrar el conteo */}
      <div>
        <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      </div>
    </Router>
  );
}

export default App;

