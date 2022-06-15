/*var nome = Number.parseFloat(window.prompt('Qual o seu nome?'));
var n1 = Number.parseFloat(window.prompt('Insira um número:'));
var n2 = Number(window.prompt('Insira outro número:'));
var soma = n1 + n2;
window.alert('Soma: ' + soma);
window.alert(`Olá ${nome}`);*/

function carregar() {
    var boasVindas = document.getElementById('boas_vindas')
    var agora = new Date()
    var hora = agora.getHours()
    if(hora>=5 && hora<12) {
        boasVindas.innerText = 'Bom dia.';
    }else if(hora>=12 && hora<18) {
        boasVindas.innerText = 'Boa tarde.';
    }else if(hora>=18 && hora<00) {
        boasVindas.innerText = 'Boa noite.';
    }else{
        boasVindas.innerText = 'Boa madrugada.';
    }
}
var a = document.getElementById('click')
a.addEventListener('click', clicar)
a.addEventListener('mouseout', sair)
function clicar() {
    a.innerText = 'clicou'
    a.style.background = 'white'
    a.style.color = 'black'
}
function sair() {
    a.innerText = 'clique aqui'
    a.style.background = 'black'
    a.style.color = 'white'
}
function somar() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var res = document.getElementById('soma_result')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `${n1} + ${n2} = <strong>${s}</strong>`
}