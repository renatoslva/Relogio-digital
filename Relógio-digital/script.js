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

    
   // Crie um novo objeto Date para a data atual
    const currentDate = new Date();
     
    // Obtenha o dia, mês e ano atuais
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    // Display the current day, month, and year
    document.getElementById("currentDay").textContent = currentDay;
    document.getElementById("currentMonth").textContent = currentMonth + 1;
    document.getElementById("currentYear").textContent = currentYear;
})





