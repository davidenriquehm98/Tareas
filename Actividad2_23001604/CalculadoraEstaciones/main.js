function error () {
  alert('Valor invalido')
}

function runProgram () {
  // Realice una lectura de datos del usuario con el mensaje “Ingrese el número de un mes”.
  //Guarde este valor en una variable llamada mes.
  var mes = prompt('Ingrese el número de un mes')
  // Verifique si el valor está entre 1 y 12
  // de no estarlo muestre una alerta que diga “Valor invalido” y finalice el programa.
  if (mes == null || !mes || mes.length > 2) {
    error()
  // Si el valor ingresado es correcto, tiene que mostrar la estación a la que
  // pertenece el mes con las siguientes condiciones:
  // ○ Diciembre, Enero y Febrero pertenecen a invierno
  } else if (mes === '12' || mes === '1' || mes === '01' || mes === '2' || mes === '02') {
    alert('Es Invierno')
  // ○ Marzo, Abril y Mayo pertenecen a Primavera
  } else if (mes === '3' || mes === '03' || mes === '4' || mes === '04' || mes === '5' || mes === '05') {
    alert('Es Primavera')
  // ○ Junio, Julio y Agosto pertenecen a Verano
  } else if (mes === '6' || mes === '06' || mes === '7' || mes === '07' || mes === '8' || mes === '08') {
    alert('Es Verano')
  // ○ Septiembre, Octubre y Noviembre pertenecen a Otoño
  } else if (mes === '9' || mes === '09' || mes === '10' || mes === '11') {
    alert('Es Otoño')
  } else {
    error()
  }
  alert(`
    David Enrique Hernández Macajola
    CARNE: 23001604
  `)
}

function setEvent () {
  var buttonElement = document.getElementById('actionButton')
  if (buttonElement != null) {
    buttonElement.onclick = runProgram
  }
}

setEvent()