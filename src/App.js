import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Categories from './pages/Categories';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  const productosDB = [
    {
      id: '1',
      image:
        'https://www.petco.com.mx/medias/?context=bWFzdGVyfGltYWdlc3wyMTIzOXxpbWFnZS9naWZ8aW1hZ2VzL2hlMy9oZGYvODg0ODg2MDgwNzE5OC5naWZ8MDE1ZGZkMmE3ZWNkYjkyNGZmOTk1YWNiMTdkZGM4NjM4OWIwZmRhMzI2MDJhODM0Yzk5ODA4OWUxZTg1ZmFjNA',
      name: 'Kurgo Correa',
      description: 'Kurgo Correa Quantum Azul Multiproposito 6 en 1 ',
      price: '485',
      stock: '10',
      category: 'correas',
    },
    {
      id: '2',
      image:
        'https://www.petco.com.mx/medias/?context=bWFzdGVyfGltYWdlc3w0MzU2NXxpbWFnZS9qcGVnfGltYWdlcy9oYzMvaGZjLzk1MjkyMjAyNjgwNjIuanBnfDQzMzVlMjc5Y2E0Y2JkMjNlMDQ2ZDUxMjAyYzJhZDAwYTVmMjEyMTU1MTA1M2I5Nzg0N2UwYzcxNGM3ZjVjMGY',
      name: 'Flexi Correa',
      description: 'Flexi Correa Retráctil color Amarillo Neón, Mediano',
      price: '599',
      stock: '10',
      category: 'correas',
    },
    {
      id: '3',
      image:
        'https://www.petco.com.mx/medias/138031.jpg-300ftw?context=bWFzdGVyfHJvb3R8NjgyNnxpbWFnZS9qcGVnfGg0MS9oM2QvMTAyNDAxMzA4MDk4ODYvMTM4MDMxLmpwZ18zMDBmdHd8ZjgzY2JiOGNlZmYzMGRmNTVhYzMyMTQ0ZjBiNTA5NzUyNWZmYTQ1Y2FhZWQzYmYxZmQwOTIxZDkxMmI0MzQ0NA',
      name: 'Youly Playera',
      description: 'Youly Playera con Estampado Floral para Perro, Mediano',
      price: '349',
      stock: '10',
      category: 'ropa',
    },
    {
      id: '4',
      image:
        'https://www.petco.com.mx/medias/138178.jpg-300ftw?context=bWFzdGVyfHJvb3R8NTEyOHxpbWFnZS9qcGVnfGgwNS9oNDgvMTAyNDA2MDMyOTE2NzgvMTM4MTc4LmpwZ18zMDBmdHd8MWYwZTdjMmM4NjQzNTgxMzcyN2MyM2Y3ZjgxYzBmYWY3ZTNhOThlNzMwODZiMDYwYjI0MWI2MDE5NDhmNDc0Mg',
      name: 'Reddy Sudadera',
      description: 'Reddy Sudadera Calmante con Capucha para Perro, Mediano',
      price: '599',
      stock: '10',
      category: 'ropa',
    },
    {
      id: '5',
      image:
        'https://www.petco.com.mx/medias/?context=bWFzdGVyfGltYWdlc3w3MzkyMXxpbWFnZS9qcGVnfGltYWdlcy9oYTUvaGVjLzkzMjI3OTcwNzI0MTQuanBnfDEwNzJiZTJkNTAzOGQzYjI0OTJlNWFjYjY0YTY0ZjZjZWY5OWQ4NDNkNWM3YzBiZDI3MTM5YzU2NmVhOGE1NTM',
      name: 'Kong Panal',
      description: 'Kong Panal de Caucho Clásico para Cachorros',
      price: '299',
      stock: '10',
      category: 'juguetes',
    },
    {
      id: '6',
      image:
        'https://www.petco.com.mx/medias/104312.jpg-300ftw?context=bWFzdGVyfHJvb3R8MTE4MzM1fGltYWdlL2pwZWd8aGYwL2hjZi8xMDAxNzA2MTczMjM4Mi8xMDQzMTIuanBnXzMwMGZ0d3xmM2NlMTMxZDdjMTY2YjRhODVhZmE1OWJhZDdhZmYxMTFmOGIzYzI4N2EzMTM0ZjlmMmIyZWZlODA4OTk0MzAy',
      name: 'Chuckit! Pelota',
      description: 'Chuckit! Pelota Ultra de Goma para Perro, Grande',
      price: '199',
      stock: '10',
      category: 'juguetes',
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
        <Route
          exact
          path='/category/:name'
          element={<Categories productos={productos} />}
        />
        <Route exact path='/product/:name' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
