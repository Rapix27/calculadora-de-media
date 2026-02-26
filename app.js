const numero1 =  document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const button =  document.getElementById("button")

function calculaMedia(){
    const nota1 = Number(numero1.value) 
    const nota2 = Number(numero2.value)

    console.log(nota1 + nota2)
}

button.addEventListener("click", calculaMedia)