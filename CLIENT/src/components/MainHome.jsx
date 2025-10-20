import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { useSnackbar } from "notistack";
import Banners from './Banners';
import SideBanners from './SideBanners';

const MainHome = () => {
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [carrito, setCarrito] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  // Recuperar carrito
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  // Productos
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/productos");
        setProductos(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        enqueueSnackbar("No se pudieron cargar los productos", { variant: "error" });
      }
    };
    fetchProductos();
  }, [enqueueSnackbar]);

  // Persistir carrito
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const handleSearch = (event) => setSearchTerm(event.target.value);

  const filteredProductos = productos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const agregarCarrito = (producto, cantidad) => {
    const exist = carrito.find((item) => item.producto.id === producto.id);
    if (exist) {
      setCarrito(
        carrito.map((item) =>
          item.producto.id === producto.id
            ? { ...item, cantidad: Math.min(item.cantidad + cantidad, producto.stock) }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { producto, cantidad }]);
    }
    enqueueSnackbar('Se agregó el producto al carrito', { variant: 'success' });
  };

  const actualizarCantidad = (id, cantidad) => {
    setCarrito(carrito.map((it) =>
      it.producto.id === id ? { ...it, cantidad } : it
    ));
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((it) => it.producto.id !== id));
  };

  const handlePago = async () => {
    try {
      await axios.post("http://localhost:3000/api/pago", { productos: carrito });
      enqueueSnackbar('Pago procesado con éxito', { variant: 'success' });
      localStorage.removeItem("carrito");
      setCarrito([]);
      setCartOpen(false); // cerrar modal
    } catch (error) {
      console.error("Error al procesar el pago", error);
      enqueueSnackbar('❌ Error al procesar el pago', { variant: 'error' });
    }
  };

  return (
     <>
    <section className="hero">
      <h1>Bienvenidos a nuestra tienda</h1>
      <Banners />
      <div className="searchbar">
        <input
          id="search"
          type="text"
          placeholder="Buscar productos..."
          onChange={handleSearch}
          value={searchTerm}
          className="input input--xl"
        />
      </div>
    </section>

    {/* Layout con sidebanners */}
    <div className="layout">
      <div className="layout__left"><SideBanners /></div>

      <main className="layout__main">
        <ProductList productos={filteredProductos} onAgregar={agregarCarrito} />
      </main>

      <div className="layout__right"><SideBanners /></div>
    </div>

    {/* FAB y Modal: igual que ya tenés */}
    <button
      className="cart-fab"
      onClick={() => setCartOpen(true)}
      aria-label="Abrir carrito"
      title="Abrir carrito"
    >
      🛒
      {carrito.length > 0 && <span className="cart-fab__badge">{carrito.length}</span>}
    </button>

    {cartOpen && (
      <div className="modal show" role="dialog" aria-modal="true" onClick={() => setCartOpen(false)}>
        <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
          <Cart
            carrito={carrito}
            onActualizarCantidad={actualizarCantidad}
            onEliminar={eliminarDelCarrito}
            onPagar={handlePago}
            onClose={() => setCartOpen(false)}
          />
        </div>
      </div>
    )}
  </>
  );
};

export default MainHome;
