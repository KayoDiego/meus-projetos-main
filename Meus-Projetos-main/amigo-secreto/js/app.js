let amigos = [];

function adicionar() {
    let amigo = document.getElementById("nome-amigo").value;
    if (amigo.value == '') {
        alert("Informe o nome do Amigo!");
        return;
    }
    
    
    let lista = document.getElementById("lista-amigos");
    amigos.push(amigo);
    if (lista.textContent == '') {
        lista.textContent = amigo;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo;
    }
    document.getElementById("nome-amigo").value = '';
}

function sortear() {
    embaralha(amigos);
    let sorteio = document.getElementById("lista-sorteio");
    sorteio.innerHTML = '';
    for (let i = 0; i < amigos.length - 1; i++) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + " --> " + amigos[i + 1] + "<br>";
    }
    sorteio.innerHTML = sorteio.innerHTML + amigos[amigos.length - 1] + " --> " + amigos[0] + "<br>";
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}