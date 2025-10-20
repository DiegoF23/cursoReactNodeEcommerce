// /components/SideBanners.jsx
import React from 'react';

const BannerCard = ({ img, title, subtitle, href = '#', tint = 'dark' }) => (
  <a className={`side-banner__card tint-${tint}`} href={href} target="_blank" rel="noreferrer">
    <img src={img} alt={title} />
    <div className="side-banner__text">
      <h4>{title}</h4>
      {subtitle && <p>{subtitle}</p>}
    </div>
  </a>
);

const SideBanners = () => {
  return (
    <aside className="side-banner" aria-label="Promociones">
      <BannerCard
        img="https://img.pccomponentes.com/pcblog/5971/mejores-teclados-mecanicos.jpg"
        title="🔥 30% OFF en Teclados"
        subtitle="Solo esta semana"
        href="#"
        tint="dark"
      />
      <BannerCard
        img="https://i.ytimg.com/vi/k07Cmn-Ia_M/sddefault.jpg"
        title="Ryzen Days"
        subtitle="Precios especiales en CPUs"
        href="#"
        tint="violet"
      />
      <BannerCard
        img="https://sillagamer.com.co/wp-content/uploads/2024/02/ugkjhl.png"
        title="Sillas Gamer"
        subtitle="12 cuotas sin interés"
        href="#"
        tint="dark"
      />
    </aside>
  );
};

export default SideBanners;
