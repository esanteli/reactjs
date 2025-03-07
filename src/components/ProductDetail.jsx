import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { itemId } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    // Simular una llamada a una API para obtener detalles del producto
    const fetchProductDetail = async () => {
      // Aquí podrías hacer una llamada a una API real
      const mockProductDetails = {
        'producto-1': 'Detalles del Producto 1',
        'producto-2': 'Detalles del Producto 2',
        // Agrega más productos según sea necesario
      };
      setProductDetail(mockProductDetails[itemId] || 'Detalles no disponibles');
    };

    fetchProductDetail();
  }, [itemId]);

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <p>{productDetail}</p>
    </div>
  );
}

export default ProductDetail; 