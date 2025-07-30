//Declare três variáveis utilizando os tipos primitivos do TypeScript:

//Uma variável para o seu nome (tipo `string`)
let nome = "Yasmim";

//- Uma variável para a sua idade (tipo `number`)
let idade = 19;
//- Uma variável que indique se você está estudando Angular (tipo `boolean`)
let estudandoAngular = true;

//Exiba os valores no console
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Estudando Angular?", estudandoAngular);


//Crie uma função que receba dois números como parâmetros e retorne a soma entre eles. Tipar corretamente os parâmetros e o retorno da função.
//Em seguida, chame essa função com dois números à sua escolha e mostre o resultado no console.

function somar(a: number, b: number): number {
    return a + b;
}

const resultado = somar(10, 25);
console.log("Resultado da soma:", resultado);
 

//Crie um `enum` que represente os dias da semana (de segunda a domingo).

enum diasDaSemana {
    Segunda = "Segunda-feira",
    Terca = "Terça-feira",
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = "Sexta-feira",
    Sabado = "Sábado",
    Domingo = "Domingo"
}

//Depois, crie uma função que receba um dos dias como parâmetro e retorne uma mensagem no formato:
function mensagemDia(dia: diasDaSemana): String {
//`"Hoje é [dia], tenha um bom dia!"`
    return `Hoje é ${dia}, tenha um bom dia!`;
}

//Chame a função com algum dia do enum e exiba a mensagem no console.
const mensagem = mensagemDia(diasDaSemana.Quarta);
console.log(mensagem);

// Crie uma classe chamada `Aluno`, com os seguintes atributos:

//- `nome` (string)
//- `nota` (number)

//A classe deve ter um método que verifique se o aluno está aprovado (nota maior ou igual a 7).

//Crie um objeto da classe e mostre no console se o aluno foi aprovado.

class Aluno {
    nome : string;
    nota : number;

    constructor(nome: string, nota: number) {
        this.nome = nome;
        this.nota = nota;
    }

      // Método para verificar se o aluno está aprovado

    estaAprovado(): boolean {
        return this.nota >= 7;
    }
}

// Criação de um objeto da classe Aluno
const aluno1 = new Aluno("João", 8);

// Verificação se o aluno foi aprovado
if (aluno1.estaAprovado()) {
    console.log(`${aluno1.nome} foi aprovado!`);
} else {
    console.log(`${aluno1.nome} foi reprovado.`);
}