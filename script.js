
import {produtos} from './src/models/models.js'

/** Abaixo se encontram os arrays com as informações de cada produto
 *  e a variável que representa a div da vitrine

let cards = []; //Irá armazenar objetos com alguns valores dos cards que serão mostrados no carrinho de compras

let precosCarrinho = []; //Armazena os preços de cada item que é adicionado ao carrinho

let produtosDoCarrinho = [];

*/


const vitrine = document.getElementById('vitrine');

const criarCardProduto = (produto) => {

    let div = document.createElement('div');
    div.className = 'card';

    let fig = document.createElement('figure');

    let img = document.createElement('img');
    img.src = produto.img;

    let figcaption = document.createElement('figcaption');
    figcaption.innerText = JSON.stringify(produto.caption);

    let tipo = document.createElement('p');
    tipo.className = 'tipo';
    tipo.innerText = produto.tipo;

    let h3 = document.createElement('h3');
    h3.innerText = produto.nome;

    let descricao = document.createElement('p');
    descricao.innerText = produto.descricao;

    let preco = document.createElement('p');
    preco.className = "preco";
    preco.innerText = `R$ ${produto.preco},00`

    let botao = document.createElement('a');
    botao.href = "#";
    botao.className = 'link';
    //botao.id = 'link'+(i+1);
    botao.innerText = "Adicionar ao carrinho";

    div.appendChild(fig);
    fig.appendChild(img);
    div.appendChild(figcaption);
    div.appendChild(tipo);
    div.appendChild(h3);
    div.appendChild(descricao);
    div.appendChild(preco);
    div.appendChild(botao);

    vitrine.appendChild(div);
    
}

const addCardsNaVitrine = (produtos) => {
    produtos.forEach((item) => {
        criarCardProduto(item);
    });
}

addCardsNaVitrine(produtos);


/** 

/**Duas variáveis que representam os links "Adicionar ao carrinho" 
 * e a div que irá armazenar os itens no carrinho 

const botoes = document.getElementsByClassName('link');

const itensCarrinho = document.getElementById('itens-carrinho');/*


//let obj = true;

/**Função que deixa invisível as tags de texto "Carrinho vazio" e "Adicione itens" 
function invisibleTags() {

    if(obj){
        let element = document.getElementById("texto-carrinho1");
        let element2 = document.getElementById("texto-carrinho2");
        element.id = 'out';
        element2.id = 'out';
    }
    
}*/

/**Variáveis para a div que terá a quantidade e o valor total da compra
 * e também para o texto que terá a quantidade e o outro, a linha.

let valorEQuantidade;
let quantidade;
let valorTotal;
let indices = [];*/

/**Função que cria e adiciona um item ao carrinho 
function addCarrinho(i){

    console.log("Entrou");

    let item = document.createElement('div');
    item.className = 'item-adc';

    let fig = document.createElement('figure');
    fig.className = 'mini-fig';

    let img = document.createElement('img');
    img.src = cards[i].image.src;
    img.className = 'mini-img';

    let h3 = document.createElement('h3');
    h3.innerText = cards[i].titulo.innerText;
    h3.className = 'nome-produto';

    let preco = document.createElement('p');
    preco.className = "preco";
    preco.innerText = cards[i].valor.innerText;

    let remover = document.createElement('a');
    remover.href = "#";
    remover.className = 'link-remover';
    remover.id = i;
    remover.innerText = "Remover produto";

    let lastChild = itensCarrinho.lastChild;
    itensCarrinho.insertBefore(item, lastChild);

    item.appendChild(fig);
    fig.appendChild(img);
    item.appendChild(h3);
    item.appendChild(preco);
    item.appendChild(remover);

    let valorSeparado = preco.innerText.split(' ');
    let valorReal = valorSeparado[1];

    console.log('Add Carinho');

    produtosDoCarrinho.push({
        'preco': parseInt(valorReal),
        'id': cards[i].id,
        'counter': 1
    })
    indices.push(cards[i].id);

}*/

/**Variáveis para contar a quantidade de produtos no carrinho e valor total da Compra
let valorCompra = 0;
let cont = 0;
let price = 0;*/

/**Função que realiza a subtração no valor total da compra assim como
 * a da contagem de itens no carrinho
 

const botoesRemover = document.getElementsByClassName('link-remover');

function removerItems(id){

    const newCar = produtosDoCarrinho.filter((item) => item.id != parseInt(id));
    console.log(newCar);
    const somaTotal = newCar.reduce((ac, next) => { return next.preco + ac}, 0);
    somaEContagem(newCar);
    console.log("Removeu");
    produtosDoCarrinho = newCar;
    return newCar;

}*/

/**Função que cria a barra de quantidades e preço apenas uma vez e
 * exibe em tela os valores
 

function addPrecos(cont, valorCompra){

    if(obj){
        valorEQuantidade = document.createElement('div');
        valorEQuantidade.id = 'valores';

        quantidade = document.createElement('p');
        quantidade.innerText = 'Quantidade:     ';
        quantidade.className = 'content-valores'

        valorTotal = document.createElement('p');
        valorTotal.innerHTML = 'Total:       R$ ';
        valorTotal.className = 'content-valores';

        itensCarrinho.appendChild(valorEQuantidade);
        valorEQuantidade.appendChild(quantidade);
        valorEQuantidade.appendChild(valorTotal);
        obj = false;
    }

    quantidade.innerText =  `Quantidade:    ${cont}`

    valorTotal.innerText = `Total:   R$ ${valorCompra},00`

}*/

/**Função que realiza a adição de um item ao carrinho quando o link é clicado
function allButtons(){

    for(let i = 0; i < botoes.length; i++){
        botoes[i].addEventListener('click', function (){
            addCarrinho(i)
            }, false);
    }

}

function somaEContagem(produtosDoCarrinho){

    let valoresDeCompra = 0;

    for(let i = 0; i < produtosDoCarrinho.length; i++){
        valoresDeCompra = valoresDeCompra + produtosDoCarrinho[i]['preco'];
    }

    addPrecos(produtosDoCarrinho.length, valoresDeCompra);

} */

/**Função que verifica se algum item foi adicionado ao carrinho e, caso sim, adiciona a tag de
 * preços e quantidades, bem como deixa invisível os textos de quando o carrinho está vazio


function iniciarListaEContagem(){

    for(let i = 0; i < botoes.length; i++){

        botoes[i].addEventListener('click', invisibleTags);
        botoes[i].addEventListener('click', function (){
            somaEContagem(produtosDoCarrinho);
        }, false);
    }
    
}*/


/**Função que identifica quando um link de remover é clicado 

function identificaItem(event){
    const link = event.target;
    console.log(link.id);
    if(link.className === "link-remover"){
        removerDoCarrinho(link);
    }
}*/

/**Remove o item clicado do elemento pai 

function removerDoCarrinho(item){
    item.parentElement.remove();
    removerItems(item.id);
}*/

/**Variáveis que representam a lista dos botoes de pesquisa por categoria e
 * os cards das vitrines
 

const botoesPesquisa = document.getElementsByClassName('link-pesquisa');

const cardsVitrine = document.getElementsByClassName('card');*/

/**Função que exibe os itens por categoria de acordo com os botões do header 
function exibirHeader(){

    for(let i = 0; i < botoesPesquisa.length; i++){
        botoesPesquisa[i].addEventListener('click', function (){
            for(let j = 0; j < cardsVitrine.length; j++){
                if(botoesPesquisa[i].innerText !== tipos[j]){
                    cardsVitrine[j].id = 'out';
                } else {
                    cardsVitrine[j].id = 'show';
                }
                if(botoesPesquisa[i].innerText === 'Todos'){
                    cardsVitrine[j].id = 'show';
                }
            }       
        })
       
    }

}*/

/**Variáveis para o input de pesquisa e o botão pesquisar respectivamente 

const entrada = document.getElementById('insere-pesquisa');
const botaoDePesquisa = document.getElementById('botao-pesquisa');*/

/**Função que adiciona um listener para o botão de pesquisa e verifica,
 * cada vez que é clicado, se a palavra no input de texto 
 * se encontra nos nomes dos produtos
 * 
function pesquisaEscrita(){
    botaoDePesquisa.addEventListener('click', function(event) {
        event.preventDefault();
        for(let i = 0; i < cardsVitrine.length; i++){
            let search = entrada.value.toLowerCase();
            if(!produtos[i].toLowerCase().includes(search)){
                cardsVitrine[i].id = 'out';
            } else {
                cardsVitrine[i].id = 'show';
            }
        }
    })
}*/

/*
allButtons();
iniciarListaEContagem();
itensCarrinho.addEventListener('click', identificaItem);
exibirHeader();
pesquisaEscrita();*/
