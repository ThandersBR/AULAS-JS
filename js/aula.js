/*
codigo 1

let nome = prompt("Insira seu nome");
alert(`Bem vindo ${nome}!!`)

Codigo 2

let nome = prompt("Insira seu nome");
let idade = prompt("Insira tua idade")

alert(`${nome}, você tem ${idade} anos.`)


exercicio 3

let popBr = prompt("Insira a população do Brasil")
let popCh = prompt("Insira a população da China")

parseFloat(popBr, popCh)

if(popCh >= popBr){
    alert('A China possui mais população.')
}else{
    alert('A população do Brasil é maior.')
}


Exercicio 4



let num = prompt("Insira o número para saber se ele é par ou ímpar.")

parseFloat(num);
 
num = num % 2;

if(num == 0){
    alert("seu número é par")
}else{
    alert("seu número é impar")
}

exercicio 5


let sal = prompt("Insira teu salário");

let des = prompt("Insira o teu desconto")

parseFloat(sal, des);

sal = sal - (sal *(des/100));

alert(`Teu salario com desconto é ${sal}`);

exercicio 6


let c = prompt('Insira o valor em Graus Celsius');

let f
    
parseFloat(f, c);

f = (c * (9/5)) + 32;

alert(`A temperatura ${c}°C, convertida para Fahrenheit é ${f}`);

exercicio 7



let n1 = prompt('Insira o numero 1')
let n2 = prompt('Insira o numero 2')
let n3 = prompt('Insira o numero 3')

parseFloat(n1, n2, n3);

if(n1 > n2 && n1 > n3){
    alert(n1)
}else if(n2 > n3 && n2 > n3){
    alert(n2)
}else if(n3 > n2 && n3 > n1){
    alert(n3)
}else{
    alert(`todos os seus valores são iguais e valem ${n1}`)
}

exercicio 8



let idade = prompt('Insira sua idade')
let ano = prompt('Qual ano nós estamos?')
let anonasc
parseFloat (idade, ano, anonasc);

anonasc = ano - idade;

alert(`Você nasceu no ano de ${anonasc}.`)

exercicio 9
*/

let altura = prompt("Insira sua altura em M")
let peso = prompt('Qual é o seu peso?')

let imc

parseFloat(imc,peso,altura);

imc = peso/ (altura ** 2);

if(imc <= 16.9){
    alert(`Muito abaixo do peso(IMC =  ${imc})`)
}else if(imc <=18.9){
    alert(`Abaixo do peso (IMC${imc})`)
}else if(imc <=26.9){
    alert(`Normal (IMC ${imc})`)
}else if (imc <= 31.9){
    alert(`Acima do peso (IMC ${imc})`)
}else{
    alert(`Obesidade (IMC ${imc})`)
}

