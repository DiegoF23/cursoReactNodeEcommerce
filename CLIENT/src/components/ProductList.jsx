import React from "react";
import CharacterCard from "./CharacterCard";

const ProductList = ({ productos, onAgregar }) => {
  if (!productos || productos.length === 0) {
    return (
      <div className="empty">
        <p>No hay productos para mostrar.</p>
      </div>
    );
  }

  return (
    <div className="grid">
      {productos.map((producto) => (
        <CharacterCard
          key={producto.id}
          producto={producto}
          onAgregar={onAgregar}
        />
      ))}
    </div>
  );
};

export default ProductList;
