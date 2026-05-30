//  SELECTORES DEL DOM
const inputGrados = document.querySelector('#inputGrados');
const selectTipo = document.querySelector('#selectTipo');
const inputResultado = document.querySelector('#inputResultado');
const btnConvertir = document.querySelector('#btnConvertir');

// FUNCIÓN FLECHA PURA (Sigue exactamente la lógica de tu ejemplo)

const miFuncion = (grados, unidad) => {
    let resultadoCalculado = 0;
    
    if (unidad === "C") {

        // Convierte de Celsius a Fahrenheit
        resultadoCalculado = (grados * 9) / 5 + 32;

        // Si da decimales, los acorta a un máximo de 2. Si es entero, lo deja entero.

        return Number.isInteger(resultadoCalculado) ? `${resultadoCalculado}°F` : `${resultadoCalculado.toFixed(2)}°F`;
    } else if (unidad === "F") {
        
        // Convierte de Fahrenheit a Celsius
        resultadoCalculado = ((grados - 32) * 5) / 9;
        return Number.isInteger(resultadoCalculado) ? `${resultadoCalculado}°C` : `${resultadoCalculado.toFixed(2)}°C`;
    }
    
    return "Unidad no válida";
};

const procesarConversion = () => {
    const valorGrados = parseFloat(inputGrados.value);
    const unidadOrigen = selectTipo.value;

    // Validación de seguridad
    if (isNaN(valorGrados)) {
        alert("Por favor, introduce un valor numérico válido.");
        return;
    }

    // Invoca la función exacta y pasa los dos parámetros tal como en tu ejemplo
    const respuestaFinal = miFuncion(valorGrados, unidadOrigen);

    // Muestra la respuesta en el formulario de salida
    inputResultado.value = respuestaFinal;
};

// Ejecuta el cálculo únicamente al hacer clic en el botón inferior
btnConvertir.addEventListener('click', procesarConversion);

