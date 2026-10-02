console.log("Hola mundo");

//CAPTURANDO EL ELEMENTO HTML
const emailInput = document.getElementById("email");
const contraseniaInput = document.getElementById("contrasenia");

//paso el EVENTO POR DEFECTO del elemento como parámetro
const datosFormularios = (event) => {
    //MÉTODO QUE PREVIENE POR DEFECTO EL EVENTO QUE TIENE EL ELEMENTO HTML
    event.preventDefault()

    const emailValue = emailInput.value;
    console.log("EMAIL:", emailValue)
}

const borrarDatoLocal = () => {
    localStorage.clear()
}