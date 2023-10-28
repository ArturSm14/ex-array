// Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.


for (let i = 0; i < 1000; i++) {
   let nota = Number(prompt("diga uma nota entre 0 e 10: "))
   
   if(nota < 0 && nota > 10 ) {
        alert("Informe uma nota valida")
   } else {
        alert("Nota armazenada")
        break
   }
    
}