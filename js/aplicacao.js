const form = window.document.querySelector("form")
form.addEventListener('submit',function(e){
    let kilos = window.document.querySelector('#kilos')
    let metro = window.document.querySelector('#metro')
    let centimetro = window.document.querySelector('#centimetro')

    const resultado = window.document.querySelector('#resultado')

    e.preventDefault()
    
    kilos = parseInt(kilos.value)
    metro = parseInt(metro.value)
    centimetro = parseInt(centimetro.value)

    var altura = (metro*100+centimetro)/100
    var imc = kilos/(altura*altura)
    var imc = imc.toFixed(0)

    if(isNaN(kilos) || isNaN(metro) || isNaN(centimetro)){
        resultado.textContent = "Por favor, digite somente números"
    }else if (kilos == 0){
        resultado.textContent = "Por favor, digite um número maior que 0"
    }else if(metro < 0 || metro > 2){
        resultado.textContent = "Por favor, digite números até 2 metros"
    }else if(centimetro < 0 || centimetro > 100){
        resultado.textContent = "Por favor, digite números até 100 centimetros"
    }else if(imc < 17){
        resultado.innerHTML = `Seu IMC é = ${imc}<br>Você está muito abaixo do seu peso ideal`
    }else if((imc >= 17) && (imc <= 18.49)){
        resultado.innerHTML = `Seu IMC é = ${imc}<br>Você está um pouco abaixo do seu peso ideal`
    }else if((imc >= 18.50) && (imc <= 24.99)){
        resultado.innerHTML = `Seu IMC é = ${imc}<br>Você está no seu peso ideal`
    }else if((imc >= 25) && (imc <= 29.99)){
        resultado.innerHTML = `Seu IMC é = ${imc}<br>Você está um pouco acima do seu peso ideal`
    }else if((imc >= 30) && (imc <= 34.99)){
        resultado.innerHTML = `Seu IMC é = ${imc}<br>Você está a cima do seu peso ideal`
    }else if((imc >= 35) && (imc <= 39.99)){
        resultado.innerHTML = `Seu IMC é = ${imc}<br>Você está muito acima do seu peso ideal`
    }else{
        resultado.innerHTML = `Seu IMC é = ${imc}<br>Você está extremamente acima do seu peso ideal`
    }

})

form.addEventListener('reset',function limpar(){
    document.getElementById("resultado").innerHTML = ""
})
