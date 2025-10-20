import React from 'react';

const Banners = () => {
  return (
    <div className="banners">
      <div className="banner banner--left">
        <img src="http://img.freepik.com/fotos-premium/20-ciento-descuento-promocion_2227-144.jpg" alt="Oferta Gamer" />
        <div className="banner__text">
          <h3>🔥 20% OFF en periféricos</h3>
          <p>Solo por esta semana</p>
        </div>
      </div>
      <div className="banner banner--right">
        <img src="https://gztienda.com.ar/img/Public/1116-producto-amd-ryzen-9-5900x-review41-1575.jpg" alt="Hardware Destacado" />
        <div className="banner__text">
          <h3>Nuevo Ryzen 9 5900X</h3>
          <p>Potencia sin límites</p>
        </div>
      </div>
    </div>
  );
};

export default Banners;
