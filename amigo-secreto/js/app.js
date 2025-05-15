let listaAmigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo");
    let amigosIncluidos = document.getElementById("lista-amigos");
    let nome = nomeAmigo.value.trim();

    if (nome === "") return;

    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
    } else {
        listaAmigos.push(nome);
        amigosIncluidos.textContent = listaAmigos.join(', ');
    }

    nomeAmigo.value = "";
}

function sortear() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    let sorteio = [];
    let amigosDisponiveis = [...listaAmigos];

    for (let i = 0; i < listaAmigos.length; i++) {
        let amigoAtual = listaAmigos[i];
        let possiveis = amigosDisponiveis.filter(a => a !== amigoAtual);

        if (possiveis.length === 0) {
            alert("Sorteio falhou, tente novamente.");
            return;
        }

        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        sorteio.push(`${amigoAtual} ➡️ ${sorteado}`);
        amigosDisponiveis = amigosDisponiveis.filter(a => a !== sorteado);
    }

    document.getElementById("lista-sorteio").innerHTML = sorteio.join('<br>');
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";
}
