import React from 'react';
import Button from './Button';

const Cart = ({ carrito, onActualizarCantidad, onEliminar, onPagar, onClose }) => {
  const total = carrito.reduce((acc, it) => acc + it.producto.precio * it.cantidad, 0);

  const stepDown = (id, cantidad) => {
    if (cantidad > 1) onActualizarCantidad(id, cantidad - 1);
  };

  const stepUp = (id, cantidad, stock) => {
    if (cantidad < stock) onActualizarCantidad(id, cantidad + 1);
  };

  return (
    <div className="cart">
      <div className="cart__header">
        <h2>Carrito de Compras</h2>
        <button className="icon-btn" onClick={onClose} aria-label="Cerrar">✕</button>
      </div>

      {carrito.length === 0 ? (
        <div className="empty">
          <p>No hay productos en el carrito</p>
        </div>
      ) : (
        <ul className="cart__list">
          {carrito.map(({ producto, cantidad }) => (
            <li key={producto.id} className="cart__item">
              <img src={producto.imagen} alt={producto.nombre} />
              <div className="cart__item-info">
                <h4>{producto.nombre}</h4>
                <p className="muted">Stock: {producto.stock}</p>
                <div className="qty">
                  <button className="qty__btn" onClick={() => stepDown(producto.id, cantidad)}>-</button>
                  <span className="qty__value">{cantidad}</span>
                  <button className="qty__btn" onClick={() => stepUp(producto.id, cantidad, producto.stock)}>+</button>
                </div>
              </div>
              <div className="cart__item-right">
                <span className="price">$ {producto.precio.toLocaleString()}</span>
                <button className="link danger" onClick={() => onEliminar(producto.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="cart__footer">
        <div className="cart__total">
          <span>Total</span>
          <strong>$ {total.toLocaleString()}</strong>
        </div>
        <div className="cart__actions">
          <Button variant="ghost" onClick={onClose}>Seguir comprando</Button>
          <Button onClick={onPagar} disabled={carrito.length === 0}>Pagar</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
