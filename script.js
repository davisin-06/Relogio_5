const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const milissegundos = document.getElementById('milissegundos');
const ano = document.getElementById('ano')

const relogio = setInterval(function time() {
    debugger
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let d = dateToday.getDay();
    let m = dateToday.getMonth();
    let dm = dateToday.getDate();
    let ml = dateToday.getMilliseconds();
    let a = dateToday.getFullYear();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    if (ml < 10) ml = '0' + ml;

    if (d == 0) d = 'Domingo ' + 'dia ' + dm;

    if (d == 1) d = 'Segunda-feira ' + 'dia ' + dm;

    if (d == 2) d = 'Terça-feira ' + 'dia ' + dm;

    if (d == 3) d = 'Quarta-feira ' + 'dia ' + dm;

    if (d == 4) d = 'Quinta-feira ' + 'dia ' + dm;

    if (d == 5) d = 'Sexta-feira ' + 'dia ' + dm;

    if (d == 6) d = 'Sábado ' + 'dia ' + dm;

    if (m == 0) m = 'Janeiro';

    if (m == 1) m = 'Fevereiro';

    if (m == 2) m = 'Março';

    if (m == 3) m = 'Abril';

    if (m == 4) m = 'Maio';

    if (m == 5) m = 'Junho';

    if (m == 6) m = 'Julho';

    if (m == 7) m = 'Agosto';

    if (m == 8) m = 'Setembro';

    if (m == 9) m = 'Outubro';

    if (m == 10) m = 'Novembro';

    if (m == 11) m = 'Dezembro';

    if (hr == '13' && min == '30' || hr == '15' && min == '00' || hr == '06' && min == '10') {
        m = 'VAI ORAR DAVI'

    }
    if (hr == '22' && min == '00') {
        m = 'VAI DORMIR GURI'

    }
    if (hr == '18' && min == '00' && d == 'Domingo' || hr == '18' && min == '00' && d == 'Segunda-feira' || hr == '18' && min == '00' && d == "Terça-feira" || hr == '18' && min == '00' && d == 'Quarta-feira' || hr == '18' && min == '00' && d == 'Quinta-feira') {
        m = 'VAI SE ARRUMAR PARA IR PARA IGREJA'

    }

    if (hr == '06' && min == '25') {
    m = 'VAI PARA A ESCOLA'
    }

    if (dia.textContent != d || mes.textContent != m) {
        dia.textContent = d;
        mes.textContent = m;
    }

    if (ano.textContent != a) {
        ano.textContent = a;
    }


    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    milissegundos.textContent = ml;

}
)
