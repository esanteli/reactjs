import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container text-center mt-5">
      <h2>{greeting}</h2>
      <p>Welcome to our store!</p>
    </div>
  );
}

export default ItemListContainer;
