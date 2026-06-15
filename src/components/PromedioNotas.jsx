import { useState } from "react";

function PromedioNotas() {
  const [promedio, setPromedio] = useState("");

  const nota = parseFloat(promedio);

  return (
    <div className="contenedor">
      <h1>Promedio de notas</h1>

      <input
        type="number"
        step="0.1"
        placeholder="Ingresa tu promedio"
        value={promedio}
        onChange={(e) => setPromedio(e.target.value)}
      />

      {promedio !== "" && nota >= 4.0 && nota <= 7.0 && (
        <p className="mensaje aprobado">
          Felicitaciones, tu promedio es {nota.toFixed(1)}
        </p>
      )}

      {promedio !== "" && nota >= 1.0 && nota < 4.0 && (
        <p className="mensaje reprobado">
          Lo lamento, debes seguir mejorando. Tu promedio es {nota.toFixed(1)}
        </p>
      )}

      {promedio !== "" && (nota < 1.0 || nota > 7.0) && (
        <p className="mensaje advertencia">
          Ingresa un promedio válido entre 1.0 y 7.0
        </p>
      )}
    </div>
  );
}

export default PromedioNotas;