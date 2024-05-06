const horas = document.getElementById ('horas');
const minutos = document.getElementById ('minutos');
const segundos = document.getElementById ('segundos');






const relogio = setInterval(function time(){

    let datetody = new Date();
    let hr = datetody.getHours();
    let min = datetody.getMinutes();
    let s = datetody.getSeconds();

    if (hr < 10) hr = '0' + hr;  
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;
    

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})

let date = new Data();
let diaSemana = date.getDay();
let dia = date.getDate();
let mes = date.getMonth();
let ano = date.getFullYear();
