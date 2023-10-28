// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';
// Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

for (let i = 0; i < 1000; i++) {
    for (let i = 0; i < 1000; i++) {
        let nome = prompt("Digite seu nome: ")
        if (nome.length <= 3) {
            alert("Nome invalido!")
        } else {
            alert("Nome válido!")
            break
        }
    }

    for (let i = 0; i < 1000; i++) {
        let idade = Number(prompt("Digite sua idade: "))
        if (idade >= 0 && idade <= 150) {
            alert("Idade válida")
        } else {
            alert("Idade invalida")
            break
        }
    }
    
    for (let i = 0; i < array.length; i++) {
        let idade = Number(prompt("Digite sua idade: "))
        if (idade >= 0 && idade <= 150) {
            alert("Idade válida")
        } else {
            alert("Idade invalida")
            break
        }
        
    }

    for (let i = 0; i < array.length; i++) {
        let salario = Number(prompt("Digite seu salário: "))
        if (salario > 0) {
            alert("Salário válido")
        } else {
            alert("Salário invalido")
            break
        }
    }
    
    for (let i = 0; i < array.length; i++) {
        let sexo = prompt("Digite seu sexo: ")
        if (sexo === "feminino" && sexo === "masculino") {
            alert("Sexo válido")
        } else {
            alert("Sexo invalido")
            break
        }
    }
    
    for (let i = 0; i < array.length; i++) {
        let estadoCivil = prompt("Qual seu estado civil? Escolha entre s = solteiro, c = casado, v = viúvo, d = divorciado")
        if(estadoCivil === "s" || estadoCivil === "c" || estadoCivil === "v" || estadoCivil === "d" ){
            alert("Estado Civil válido")
        } else {
            alert("Estado Civil invalido")
            break
        }
    }
}



