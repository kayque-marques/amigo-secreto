let listaAmigos = []; //variável global que guarda os nomes dos amigos adicionados.

function adicionar() { //Pega o valor do campo de texto.
    let nomeAmigo = document.getElementById("nome-amigo");
    let amigosIncluidos = document.getElementById("lista-amigos");
    let nome = nomeAmigo.value.trim(); //trim - remove espaços antes/depois do nome.

    if (nome === "") return; //evita adicionar nomes vazios.

    if (listaAmigos.includes(nome)) { //includes - Verifica se o nome já existe na lista.
        alert("Este nome já foi adicionado!");
    } else {
        listaAmigos.push(nome);
        amigosIncluidos.textContent = listaAmigos.join(', ');//join - se o nome não existir, adiciona na lista.
    }

    nomeAmigo.value = "";//limpa o campo de entrada após adicionar o nome.
}

function sortear() {
    if (listaAmigos.length < 2) {//verifica se há pelo menos 2 amigos para realizar o sorteio
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    let sorteio = [];//guarda os pares sorteados
    let amigosDisponiveis = [...listaAmigos];//evita nomes repetidos no sorteio

    for (let i = 0; i < listaAmigos.length; i++) {//para cada amigo, sorteia alguem DIFERENTE dele da lista de disponíveis.
        let amigoAtual = listaAmigos[i];
        let possiveis = amigosDisponiveis.filter(a => a !== amigoAtual);

        if (possiveis.length === 0) {//caso não tenha como sortear (o ultimo amigo sobrou sozinho), o sorteio falha
            alert("Sorteio falhou, tente novamente.");
            return;
        }

        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];//sorteia um amigo e remove ele da lista de disponíveis
        sorteio.push(`${amigoAtual} ➡️ ${sorteado}`);
        amigosDisponiveis = amigosDisponiveis.filter(a => a !== sorteado);
    }

    document.getElementById("lista-sorteio").innerHTML = sorteio.join('<br>');//exibe os pares sorteados com quebra de linha
}

function reiniciar() {//limpa todos os campos
    listaAmigos = [];
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";
}
