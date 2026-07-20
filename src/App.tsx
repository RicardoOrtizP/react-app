import TarjetaUsuario from './components/TarjetaUsuario'
import { useEffect, useState } from 'react'

const USUARIOS_INICIALES = [
  { id: 1, nombre: 'Ana Gomez', profesion: "Desarrolladora Web"},
  { id: 2, nombre: 'Hugo Sanchez', profesion: "Diseñador UI"},
  { id: 3, nombre: 'Elena Rivas', profesion: "Cientifico de Datos"},
];
function App() {
  const [busqueda, setBusqueda] = useState("");
  // const [usuariosFiltrados, setUsuariosFiltrados] = useState(USUARIOS_INICIALES);
  const [terminoDebounced, setTerminoDebounced] = useState("");

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setTerminoDebounced(busqueda);
    }, 500);
    return () => clearTimeout(temporizador);
  }, [busqueda]);

    const usuariosFiltrados = USUARIOS_INICIALES.filter(usuario => usuario.nombre.toLocaleLowerCase().includes(terminoDebounced.toLowerCase()));

  return (
    <>
     <div className="app">
      <h1>Buscador de Equipo</h1>
      <input type="text" placeholder="Buscar por nombre..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />

      <div className="contenedor-tarjetas">
        { usuariosFiltrados.map((user) => (
          <TarjetaUsuario nombre={user.nombre} profesion={user.profesion} key={user.id} />
        ))}
      </div>
     </div>
    </>
  )
}

export default App
