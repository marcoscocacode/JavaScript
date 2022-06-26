// Uso de Array e Matrix

alunos = ['Gabriel', 'Vanessa', 'Felipe'];
notalAlunos = [[5,6,7,10], [10,9,8,7], [9,8,7,6]];

// Soma dentro do Array com o .reduce

const saldoContas = [100, 200, 300, 400, 500, 1.99, 1000];

const total = saldoContas.reduce((acumulador, valor) => acumulador + valor); 

console.log(total);

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

console.table(frutas);
console.log(frutas.length); // Retorna o tamanho do Array

// Usando o IndexOf e Includes para buscar elementos no Array

const redesSociais = [
    'Facebook','Twitter',
    'Instagram','Snapchat',
    'Whatsapp','Telegram',
    'Tiktok','YouTube',
    'Linkedin','Pinterest'
];

const tiktok = redesSociais.indexOf('Tiktok'); // Retorna o índice do elemento
console.log(tiktok);

console.log(redesSociais.includes('Tumblr')); // Retorna true ou false

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

console.table(aPagarEmDolar);
console.table(aPagarEmReais);

const aPagarVanessa = aPagarEmReais.filter(valor => valor > 50);
aPagarEmReais.find(valor => valor > 50); // Retorna o primeiro elemento que satisfaça a condição


console.table(aPagarVanessa);

const totalAPagar = aPagarEmReais.reduce( acumulador, valor => acumulador + valor); // Retorna o valor total
const contasBaixas = aPagarEmReais.every(valor => valor < 100); // Retorna true ou false
const contasAlta = aPagarEmReais.some(valor => valor > 100); // Retorna true ou false se apenas um valor satisfaz a condição

console.table(totalAPagar);

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

console.table(programador);
console.log(programador.nome); // Retorna o valor do atributo

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
        if (this.isEmpty()) return undefined; // Retorna undefined se o Array estiver vazio
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

console.table(fila.items);
console.log(fila.front())
console.log(fila.rear())

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
        if (this.isEmpty()) return undefined; // Retorna undefined se o Array estiver vazio
        return this.items.shift();
    }
    deleteLast(items){ // Remove o último elemento do Array
        if (this.isEmpty()) return undefined; // Retorna undefined se o Array estiver vazio
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