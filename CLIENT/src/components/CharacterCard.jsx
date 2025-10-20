import React, { useState } from 'react';
import Button from './Button';

const CharacterCard = ({ producto, onAgregar }) => {
  const [cantidad, setCantidad] = useState(1);
  const [expanded, setExpanded] = useState(false);

  const incrementar = () => setCantidad(c => Math.min(c + 1, producto.stock));
  const decrementar = () => setCantidad(c => Math.max(1, c - 1));

  const toggleExpand = () => setExpanded(e => !e);

  return (
    <div className={`card ${expanded ? 'card--expanded' : ''}`}>
      <div className="card__img">
        <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
      </div>
      <div className="card__body">
        <h3 className="card__title">{producto.nombre}</h3>
        <p className={`card__desc ${expanded ? 'expanded' : ''}`}>
          {producto.descripcion}
        </p>
        {!expanded && producto.descripcion.length > 100 && (
          <button className="link small" onClick={toggleExpand}>Ver más</button>
        )}
        {expanded && (
          <button className="link small" onClick={toggleExpand}>Ver menos</button>
        )}

        <div className="card__meta">
          <span className="badge">Stock: {producto.stock}</span>
          <span className="price">$ {producto.precio.toLocaleString()}</span>
        </div>

        <div className="card__actions">
          <div className="stepper">
            <button onClick={decrementar} className="stepper__btn">-</button>
            <span className="stepper__value">{cantidad}</span>
            <button onClick={incrementar} className="stepper__btn">+</button>
          </div>
          <Button onClick={() => onAgregar(producto, cantidad)} />
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
