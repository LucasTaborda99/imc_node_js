// SELETORES
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const button = document.querySelector('#button')
const resultado = document.querySelector('#resultado')

// FUNÇÕES
const calculate = () => {

    if (altura.value !== '' && peso.value !== '' && altura.value > 0 && peso.value > 0) {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    
    let classificacao = ''

    if (imc < 18.5) {
        classificacao = ('Abaixo do peso')
    } else if (imc <= 24.9) {
        classificacao = ('Peso normal')
    } else if (imc <= 29.9) {
        classificacao = ('Acima do peso')
    } else if (imc <= 34.9) {
        classificacao = ('Obesidade Grau I')
    } else if (imc <= 39.9) {
        classificacao = ('Obesidade Grau II')
    } else {
        classificacao = ('Obesidade Grau III')
    }

    resultado.innerHTML = `IMC: ${imc}, Classificação: (${classificacao})`

    } else {
        resultado.innerHTML = 'Preencha os campos corretamente'
    }
}

// EVENT LISTENERS
button.addEventListener('click', calculate)