import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';

const App = () => {
  const productosDB = [
    {
      id: '1',
      name: 'Correa 1',
      description: 'LoremIpsumCorrea1',
      price: '10',
      stock: '10',
    },
    {
      id: '1',
      name: 'Correa 1',
      description: 'LoremIpsumCorrea1',
      price: '10',
      stock: '10',
    },
    {
      id: '1',
      name: 'Correa 1',
      description: 'LoremIpsumCorrea1',
      price: '10',
      stock: '10',
    },
    {
      id: '1',
      name: 'Correa 1',
      description: 'LoremIpsumCorrea1',
      price: '10',
      stock: '10',
    },
    {
      id: '1',
      name: 'Correa 1',
      description: 'LoremIpsumCorrea1',
      price: '10',
      stock: '10',
    },
    {
      id: '1',
      name: 'Correa 1',
      description: 'LoremIpsumCorrea1',
      price: '10',
      stock: '10',
    },
  ];
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    setProductos(productosDB);
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomePage productos={productos} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
