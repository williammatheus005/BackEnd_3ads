function meuSalario(salario) {
    const contaLuz = 145.0
    const aluguel = 1350.0
    const restoSalario = salario - (contaLuz + aluguel)
    //console.log(restoSalario) // não serve para usuário
    return `o resto do seu salario é R$ ${restoSalario.toFixed(2).replace(".",",")}`
}
const resto = meuSalario(7000.0)
console.log(resto)