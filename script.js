const formatarDigito = (digito) => `0${digito}`.slice(-2);


const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');// Se algum elemento não existir no HTML, interrompe para evitar erros
    if (!segundos || !minutos || !horas || !dias) return;

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
};


const contagemRegressiva = (tempo) => {
    const contar = () => {
        if (tempo <= 0) {
            atualizar(0);
            clearInterval(id);
            return;
        }

        atualizar(tempo);
        tempo--;
    };

    
    contar();
    const id = setInterval(contar, 1000);
};


const tempoRestante = () => {
    const dataEvento = new Date('2026-10-09T12:00:00');
    const hoje = Date.now();

    const diferencaEmSegundos = Math.floor((dataEvento - hoje) / 1000);
    return diferencaEmSegundos > 0 ? diferencaEmSegundos : 0;
};


document.addEventListener('DOMContentLoaded', () => {
    const elementoContador = document.getElementById('dias');

    if (elementoContador) {
        contagemRegressiva(tempoRestante());
    }
});