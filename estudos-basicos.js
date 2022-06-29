// Uso de Array e Matrix

alunos = ['Gabriel', 'Vanessa', 'Felipe'];
notalAlunos = [[5,6,7,10], [10,9,8,7], [9,8,7,6]];

// Soma dentro do Array com o .reduce

const saldoContas = [100, 200, 300, 400, 500, 1.99, 1000];

const total = saldoContas.reduce((acumulador, valor) => acumulador + valor); 

//console.log(total);

// Definindo Bandeiras e suas cores em um Array
// Uma matrix de 3 dimensões

const Bandeiras = [
['Brasil', ['Verde', 'Amarelo', 'Azul', 'Branco']],
['Canada', ['Vermelho', 'Branco']],
['México', ['Verde', 'Branco', 'Vermelho']],
['EUA'], ['Azul', 'Branco', 'Vermelho']
];

// Adicionar e remover elementos em um Array

let frutas = ['Banana', 'Abacaxi', 'Morango', 'Abacate'];

frutas.push('Uva') // Adiciona um elemento no final do Array
frutas.unshift('Manga') // Adiciona um elemento no início do Array

frutas.pop(); // Remove o último elemento do Array
frutas.shift(); // Remove o primeiro elemento do Array
frutas.splice(2, 1); // Remove um elemento do Array
frutas.splice(2, 1, 'Caquí'); // Substitui um elemento no Array

//console.table(frutas);
//console.log(frutas.length); // Retorna o tamanho do Array

// Usando o IndexOf e Includes para buscar elementos no Array

const redesSociais = [
    'Facebook','Twitter',
    'Instagram','Snapchat',
    'Whatsapp','Telegram',
    'Tiktok','YouTube',
    'Linkedin','Pinterest'
];

const tiktok = redesSociais.indexOf('Tiktok'); // Retorna o índice do elemento
//console.log(tiktok);

//console.log(redesSociais.includes('Tumblr')); // Retorna true ou false

// Laços de repetição

for (let i = 0; i < redesSociais.length; i++) { // Laço de repetição para percorrer o Array
    console.log(redesSociais[i]) // Retorna o elemento do índice
};

for (const i in redesSociais) { 
    console.log(`${i}${redesSociais[i]}`) // Retorna o índice e o elemento
};

for (const valor of redesSociais) {
    console.log(valor) // Retorna o elemento
}

redesSociais.forEach((valor, indice, redes) =>{ // Retorna o elemento, índice e o Array
    console.log(valor);
    console.log(indice);
    console.log(redes);
});

let i = 0;

while (i < redesSociais.length) { // Laço de repetição para percorrer o Array
    console.log(redesSociais[i]) // Retorna o elemento do índice
    i++;
}

do { 
    console.log(redesSociais[i]) 
    i++;
} while (i < redesSociais.length); 

// Usando Callbacks

const aPagarEmReais = [10, 20, 40, 100]
const cotacaoDolar = 5;
const aPagarEmDolar = aPagarEmReais.map(valor => valor * cotacaoDolar); // Retorna um novo Array

//console.table(aPagarEmDolar);
//console.table(aPagarEmReais);

const aPagarVanessa = aPagarEmReais.filter(valor => valor > 50);
aPagarEmReais.find(valor => valor > 50); // Retorna o primeiro elemento que satisfaça a condição


//console.table(aPagarVanessa);

const totalAPagar = aPagarEmReais.reduce((acumulador, valor) => acumulador + valor); // Retorna o valor total
const contasBaixas = aPagarEmReais.every(valor => valor < 100); // Retorna true ou false
const contasAlta = aPagarEmReais.some(valor => valor > 100); // Retorna true ou false se apenas um valor satisfaz a condição

//console.table(totalAPagar);

// Fazendo a ordenagem do Array

const clientes = ['Gabriel', 'Vanessa', 'Felipe', 'João', 'Maria', 'José'];
console.table(clientes);
clientes.sort(); // Ordena o Array em ordem alfabética
console.table(clientes);

const numeros = [1, 98, 26, 43, 782, 52, 234, 74, 93, 10];
numeros.sort((a, b) => a - b); // Ordena o Array em ordem crescente
numeros.sort((a, b) => b - a); // Ordena o Array em ordem decrescente

// Objetos e JSON

const programador = { // Cria um objeto
    nome: 'Gabriel',
    nascimento: '01/01/1990',
    casado: true,
    linguagensFavoritas: ['JavaScript', 'Python', 'C#'],
    trabalhoDesde: '01/01/2020'
}

//console.table(programador);
//console.log(programador.nome); // Retorna o valor do atributo

// Classes

class Programador { // Cria uma classe
    constructor(nome, nascimento, casado, linguagensFavoritas, trabalhoDesde) { // Construtor
        this.nome = nome; // Atributo
        this.nascimento = nascimento;
        this.casado = casado;
        this.linguagensFavoritas = linguagensFavoritas;
        this.trabalhoDesde = trabalhoDesde;
    }
}

const gabriel = new Programador('Gabriel', '01/01/1990', true, 
    ['JavaScript', 'Python', 'C#'], '01/01/2020'); // Cria um novo objeto
const vanessa = new Programador('Vanessa', '01/01/1990', true,
    ['JavaScript', 'Python', 'C#'], '01/01/2020'); // Cria um novo objeto

for (const propriedade in vanessa) { // Percorre o objeto
    console.log(`${propriedade}: ${vanessa[propriedade]}`);
}

// Conceito de Pilhas/Stacks

// Principio LIFO - Last In First Out

class pilha { // Métodos
    constructor() { 
        this.items = []; // Array
    }
    push(item) {
        this.items.push(item); // Adiciona um elemento no final do Array
    }
    pop() {
        return this.items.pop(); // Remove o último elemento do Array
    }
    peek() {
        return this.items[this.items.length - 1]; // Retorna o último elemento do Array
    }
    isEmpty() {
        return this.items.length === 0; // Retorna true ou false
    }
}

// Filas

// Principio FIFO - First In First Out

class Fila {
    constructor() {
        this.items = [];
    }
    enqueue(item) { // Adiciona um elemento no final do Array
        this.items.push(item);
    }
    dequeue() { // Remove o primeiro elemento do Array
        if (this.items) return undefined; // Retorna undefined se o Array estiver vazio
        return this.items.shift(); // Retorna o primeiro elemento do Array
    }
    peek() { // Retorna o primeiro elemento do Array
        return this.items[0];
    }
    front() { // Retorna o primeiro elemento do Array
        return this.items[0]; 
    }
    rear() { // Retorna o último elemento do Array
        return this.items[this.items.length - 1]; // Retorna o último elemento do Array
    }
    isEmpty() { // Retorna true ou false
        return this.items.length === 0;
    }
}

const fila = new Fila();
fila.enqueue('Ferrari');
fila.enqueue('BMW');
fila.enqueue('Audi');
fila.enqueue('Mercedes');
fila.enqueue('Volkswagen');

// console.table(fila.items);
// console.log(fila.front())
// console.log(fila.rear())

// Deques (Deck)

class Deque {
    constructor() {
        this.items = [];
    }
    insertFront(items){ // Adiciona um elemento no início do Array
        this.items.unshift(items); 
    }
    insertLast(items){ // Adiciona um elemento no final do Array
        return this.items.push(items);
    }
    deleteFront(items){ // Remove o primeiro elemento do Array
        if (this.items) return undefined; // Retorna undefined se o Array estiver vazio
        return this.items.shift();
    }
    deleteLast(items){ // Remove o último elemento do Array
        if (this.items) return undefined; // Retorna undefined se o Array estiver vazio
        return this.items.pop();
    }
}

const deque = new Deque();
deque.insertFront('Ferrari');
deque.insertFront('BMW');
deque.insertFront('Audi');
deque.insertLast('Mercedes');
deque.insertLast('Volkswagen');

deque.deleteFront();
deque.deleteLast();

console.table(deque.items);

// Listas Encadeadas

class No {
    constructor(elemento) {
        this.elemento = elemento;
        this.proximo = null;
    }
}

class ListaEncadeada{
    constructor(){ 
        this.head = undefined  // Cabeça da lista
    }
    insertFirst(elemento){
        const novoNo = new No(elemento); // Cria um novo nó
        let atual 

        if(!this.head){ // Se a lista estiver vazia
            this.head = novoNo;
        } else {
            atual = this.head // Atual recebe a cabeça da lista
            novoNo.proximo = atual
            this.head = novoNo
        }
        return elemento;
    }
    insertLast (elemento){
        const novoNo = new No(elemento); // Cria um novo nó
        let atual 

        if(!this.head){ // Se a lista estiver vazia
            this.head = novoNo;
        } else {
            atual = this.head // Atual recebe a cabeça da lista
            while(atual.proximo){
                atual = atual.proximo
            }
            atual.proximo = novoNo
        }
        return elemento;
    }
    searchAt(posicao){ // Retorna o elemento na posição especificada
        let atual = this.head;
        for (let i = 0; i < posicao && atual; i++) { // Percorre a lista
            atual = atual.proximo;
        }
        return atual;
    }
    insertAt (elemento, posicao){ // Adiciona um elemento na posição especificada
        const novoNo = new No(elemento)
        if (posicao == 0){ // Se a posição for 0
            this.insertFirst(elemento)
        } else { // Se não for 0
            const anterior = this.searchAt(posicao - 1) // Busca o nó anterior
            const atual = anterior.proximo // Atual recebe o próximo do nó anterior
            novoNo.proximo = atual // O próximo do novo nó recebe o próximo do nó atual
            anterior.proximo = novoNo // O próximo do nó anterior recebe o novo nó
        }
        return elemento;
    }
    traversal(){
        if(!this.head){ // Se a lista estiver vazia
            return undefined;
        } else {
            let atual = this.head; // Atual recebe a cabeça da lista
            let elementosLista = []; // Array para armazenar os elementos da lista
            while(atual){ // Enquanto atual for diferente de undefined
                elementosLista.push(atual.elemento); // Adiciona o elemento do nó atual no array
                atual = atual.proximo; // Atual recebe o próximo nó
            }
            return elementosLista;
        }         
    }
}

const trem = new ListaEncadeada();
trem.insertFirst('Locomotiva');
trem.insertLast('Vagão 1');
trem.insertLast('Vagão 2');
trem.insertLast('Vagão 3');

console.log(trem.head);
console.log(trem.searchAt(2));
console.table(trem.traversal());

// Conjunto (Sets)

const meuConjunto = new Set();

const times = ['São Paulo', 'Palmeiras', 'Corinthians', 'Santos', 'São Paulo'];
const meuCampeonato = new Set(times);

console.table(meuCampeonato);

const valoresConjunto =  meuCampeonato.values();
console.table(valoresConjunto.next().value); 

for ( let valor of valoresConjunto) { 
    console.log(valor);
}

const entradas =  meuCampeonato.entries(); // Retorna um iterador

for ( let entrada of entradas) {
    console.log(entradas);
}

// Dicionários (Maps)

const meuDicionario = new Map();

meuDicionario.set('oi', 'Oi tudo bem?');
meuDicionario.set('blz', 'Beleza');
meuDicionario.set('vc', 'Você');

console.table(meuDicionario);

const palavra = meuDicionario.get('oi');
console.log(palavra);

// Tabelas Hash (Hash Tables)

class HashTable {
    constructor(){
        this.table = new Array(127);
        this.size = 0;
    }

    _hash(key){ // Função de hash
        let hash = 0; 
        for (let i = 0; i < key.length; i++) { // Percorre a string
            hash += key.charCodeAt(i); // Adiciona o código ASCII do caractere na hash 
        }
        return hash % this.table.length; // Retorna o resto da divisão da hash pelo tamanho do array
    }
    put(key, value){
        const index = this._hash(key) // Calcula o índice da tabela
        this.table[index] = [key, value]; // Adiciona o valor na tabela
        this.size++; // Incrementa o tamanho da tabela
    }
    get(key){
        const index = this._hash(key) // Calcula o índice da tabela
        return this.table[index]; // Retorna o valor da tabela
    }
    delete(key){
        const index = this._hash(key)
        if (this.table[index] && this.table[index].length){ // Se o índice não estiver vazio
            this.table[index] = undefined; // Deleta o valor do índice
            this.size--; // Decrementa o tamanho da tabela
            return true
        } else return false;
    }
    clear(key){
        this.table = []
        this.size = 0
    }    
}

const meusContatos = new HashTable(); 
meusContatos.put('Marcos', '4844864646')
meusContatos.put('João', '48444544646')
meusContatos.put('Maria', '5444694646')

console.table(meusContatos.table);