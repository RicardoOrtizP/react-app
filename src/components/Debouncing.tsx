import { useEffect, useState } from "react";

function BuscadorConDebounce() {
    const [busqueda, setBusqueda] = useState("");
    const [terminoDebounced, setTerminoDebounced] = useState("");

    useEffect(() => {
        // 1. Programamos la ejecucion después de 500ms
        const temporizador = setTimeout(() => {
            setTerminoDebounced(busqueda);
        }, 500);
        // 2. Función de limpieza: si "busqueda" cambia anstes de 500ms,
        // React ejecuta esto y cancela el temporizador anterior.
        return () => clearTimeout(temporizador);
    }, [busqueda]); // se ejecuta cada vez que el usuario escribe

    useEffect(() => {
        if (terminoDebounced) {
            console.log(`Haciendo peticion API para ${terminoDebounced}`);
            // Aquí iría tu fetch() o axios.get()
        }
    }, [terminoDebounced]); // Solo se ejecuta cuando el término ya se estabilizó

    return (
        <input type="text" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar..." />
    );
}

export default BuscadorConDebounce;