const inserirAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos'); 


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