import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutMe = () => {
  return (
    <div>
      <Header />
      <section className="section">
        <div className="section__inner">
          <h2>Sobre mí</h2>
          <p className="muted">
            Esta app de ecommerce fue construida para mostrar habilidades en React, manejo de estado,
            UI y UX (búsqueda, cards y carrito en modal con notificaciones).
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutMe;
