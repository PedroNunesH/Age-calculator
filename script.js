function calcular () {

var dia_ins = document.getElementById('txt1') 
var mes_ins = document.getElementById('txt2')
var ano_ins = document.getElementById('txt3')

var data = new Date()
var dia_atual = data.getDate()
var mes_atual = data.getMonth() + 1
var ano_atual = data.getFullYear()

var idade = ano_atual - Number(ano_ins.value)

if ( Number(dia_ins.value) > 31 || Number(mes_ins.value) > 12 || Number(ano_ins.value) > ano_atual ||  Number(dia_ins.value, mes_ins.value, ano_ins.value) == 0 || Number(ano_ins.value) < 1905 ){
    res.innerHTML ='Dados incorretos'
    
} else if ( Number(mes_ins. value) > mes_atual ) {
    res.innerHTML = ` ${idade - 1} anos`
} else if ( Number(dia_ins.value) > dia_atual ) {
        res.innerHTML = ` ${idade - 1} anos`
} else {
        res.innerHTML = ` ${idade} anos`
}
    
}

function mudar (){
    var btn = document.getElementById('btn')
    btn.style.backgroundColor = 'yellow';
    btn.style.font = 'white' 
    btn.style.cursor = 'pointer'
}

function sair() {
    var sair = document.getElementById('btn')
    btn.style.backgroundColor = 'white';
}
