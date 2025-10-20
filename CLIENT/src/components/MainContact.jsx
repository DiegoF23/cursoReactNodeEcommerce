import React from 'react';

const MainContact = () => {
  return (
    <section className="section">
      <div className="section__inner">
        <h2>Contacto</h2>
        <p className="muted">Dejanos tu mensaje y te respondemos a la brevedad.</p>
        <form className="contact-form">
          <div className="grid-2">
            <input className="input" type="text" placeholder="Nombre" />
            <input className="input" type="email" placeholder="Email" />
          </div>
          <textarea className="input" rows="5" placeholder="Tu mensaje..." />
          <button className="btn">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default MainContact;
