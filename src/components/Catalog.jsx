import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Catalog() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simular una llamada a una API para obtener productos por categoría
    const fetchProducts = async () => {
      // Aquí podrías hacer una llamada a una API real
      const mockProducts = {
        'modelado-3d': ['Producto 1', 'Producto 2'],
        'desarrollo-web': ['Producto 3', 'Producto 4'],
        'diseño-de-proyectos': ['Producto 5', 'Producto 6'],
        'branding': ['Producto 7', 'Producto 8'],
        'ilustracion': ['Producto 9', 'Producto 10']
      };
      setProducts(mockProducts[categoryId] || []);
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <h2>Catálogo de {categoryId ? categoryId.replace(/-/g, ' ') : 'Todos'}</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link to={`/product/${product.toLowerCase().replace(/ /g, '-')}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog; 