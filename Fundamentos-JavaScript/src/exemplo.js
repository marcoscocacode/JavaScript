const chalk = require('chalk');

const main = () => {
    console.log(chalk.blue("Hello world!"));
    
    const preco = Number("1.99") + 10.50;
    console.log(preco);
    console.log(typeof preco);

    console.log(descricaoPreco(50, 10.01));

    const pessoas = [
        { 
        nome: "João",
        sobrenome: "Silva",
        nomeCompleto: function() {
            return `${this.nome} ${this.sobrenome}`; // 'this' tem o comportamento de apontar para o objeto atual
        },    
        idade: 10 
        },
        {
        nome: "Maria",
        sobrenome: "Souza",
        idade: 25
        },
        {
        nome: "José",
        sobrenome: "Pereira",
        idade: 12
        }
    ];

    let idadeMax = 0;
    pessoas.forEach(pessoa => {
        idadeMax = Math.max(idadeMax, pessoa.idade);
    })
    console.log(idadeMax);

    const nomes = pessoas.map(pessoa => `${pessoa.nome} ${pessoa.sobrenome}`);

    console.log(nomes);

    const adultos = pessoas.filter(pessoa => pessoa.idade >= 18); // Retorna um novo array
    adultos.forEach(adulto => console.log(adulto.nome)); // Imprime o nome de cada adulto
    imprimeDados(pessoas[0]);

    let divisor;
    try { // Tentar executar o código abaixo
        if(!isNaN(divisor)) { // Se o divisor for um número
            console.log(10 / divisor); 
        }else {
            throw new Error("Divisor inválido"); // Lançar um erro
        }
    } catch(error) { // Se ocorrer um erro
        console.log(error) // Imprimir o erro
    } finally { // Sempre executar o código abaixo
        console.log("Fim"); 
    }

    imprimeMin([45, 4, 335, 6, 56]);
}

const imprimeMin = (lista) => { // Recebe um array como parâmetro
    let min = Number.MAX_VALUE; // Inicializa o valor máximo
    for ( let i = 0; i < lista.length; i++) { 
        let mensagem = "Menor valor: ";
        //var mensagem = "Menor valor: "; // 'var' faz com que a váriavel seja global
        min = Math.min(lista[i], min); // Atualiza o valor mínimo
        console.log(`${mensagem} ${min}`);  
    }

    console.log(`O resultado do ${mensagem} ${min}`);
}

const descricaoPreco = (preco, desconto) => {
    //return "O Valor total é de R$ " + preco + ", mas você paga apenas R$ " + (preco - desconto);
    return `O Valor total é de R$ ${preco}, mas você paga apenas R$ ${preco - desconto}`;
}

const imprimeDados = ({ nome, sobrenome, idade }) => { // Passando um objeto como parâmetro
    //const nome = pessoas.nome;
    //const sobrenome = pessoas.sobrenome;
    //const idade = pessoas.idade;

    //const { nome, sobrenome, idade } = pessoas;

    console.log(`Nome: ${nome} ${sobrenome}`); 
    console.log(`Idade: ${idade}`); 
}

module.exports = {main};