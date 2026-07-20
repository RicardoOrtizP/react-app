import { useState } from "react";
function Contador() {
	// useState nos da dos cosas: la variable con el valor actual, y una funcion para cambiar ese valor.
	const [cuenta, setCuenta] = useState(0); // El 0 es el valor inicial
	
	return (
		<div>
			<p>Has hecho clic {cuenta} veces</p>
			<button onClick={() => setCuenta(cuenta +1 )}>
				Hacer clic
			</button>
		</div>
	);
}

export default Contador;