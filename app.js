const inserirAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos'); 
const sorteado = document.getElementById('resultado'); 

const nomes = [];

function adicionarAmigo() {
    const nome = inserirAmigo.value.trim();
    if (nome === '') {
        alert('Por favor, digite um nome.'); 
        return;
    }

    nomes.push(nome);
        const itemLista = document.createElement('li');
        itemLista.textContent = nome; 
        listaAmigos.appendChild(itemLista); 
    
       
        inserirAmigo.value = '';
        inserirAmigo.focus();
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert('Por favor, insira nomes na lista');
        return;
    }
    const indice = Math.floor(Math.random() * nomes.length);
    const amigoSorteado = nomes[indice];

    sorteado.textContent = `Seu amigo secreto é: ${amigoSorteado}`;
}