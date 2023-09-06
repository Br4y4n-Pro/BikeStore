//regex de muchas cosas

const regexCorreoElectronico = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const regexNombre = /^[A-Za-z\s']+$/;
// Debe tener al menos 8 caracteres de longitud.
//Puede contener letras mayúsculas y minúsculas.
//Debe contener al menos un dígito (0-9).
//Puede contener caracteres especiales como !@#$%^&*()_+{}[]|<>?
const regexContrasena = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const regexTelefonoMovil = /^(3(0[0-5]|[7-9][0-9])|[4-7]\d{2})\d{6}$/;
const regexCedula = /^\d{6,11}$/;
const regexDireccionColombia = /^[A-Za-z0-9\s#\-,.]+$/;

////Ejemplos////
//direccion1 = "Calle 123 #45-67";
//direccion2 = "Av. Principal, Edificio ABC";
//direccion3 = "Carrera 89, Calle 34 - Piso 3";

const valiNombre =(value)=>{
    if(regexNombre.test(value)){
        console.log("El formato del nombre es válido.");
    }else{
        console.log("El formato del nombre es invalido.")
    }
}