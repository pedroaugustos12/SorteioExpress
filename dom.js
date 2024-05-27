function sortearNumero() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    mostrarResultado(resultado);
}

function sortearNome() {
    const nomes = document.getElementById('nomes').value.split(',');
    const resultado = nomes[Math.floor(Math.random() * nomes.length)];
    mostrarResultado(resultado.trim());
}

function mostrarResultado(resultado) {
    const divResultado = document.getElementById('result');
    const divHistorico = document.getElementById('historico');
    const dataHora = new Date().toLocaleString();
    divResultado.innerHTML = `Sorteado: ${resultado} (${dataHora})`;
    const novoHistorico = document.createElement('div');
    novoHistorico.textContent = `${resultado} (${dataHora})`;
    divHistorico.prepend(novoHistorico);
    novoHistorico.classList.add('historico-item', 'fadeIn');
    setTimeout(() => {
        novoHistorico.classList.remove('fadeIn');
    }, 1000);
}
function sortearNumero() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    mostrarResultado(resultado);
}

function sortearNome() {
    const nomes = document.getElementById('nomes').value.split(',');
    const resultado = nomes[Math.floor(Math.random() * nomes.length)];
    mostrarResultado(resultado.trim());
}

function mostrarResultado(resultado) {
    const divResultado = document.getElementById('result');
    const divHistorico = document.getElementById('historico');
    const dataHora = new Date().toLocaleString();
    divResultado.innerHTML = `Sorteado: ${resultado} (${dataHora})`;
    const novoHistorico = document.createElement('div');
    novoHistorico.textContent = `${resultado} (${dataHora})`;
    divHistorico.prepend(novoHistorico);
    novoHistorico.classList.add('historico-item', 'fadeIn');
    setTimeout(() => {
        novoHistorico.classList.remove('fadeIn');
    }, 1000);
}
