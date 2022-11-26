import { Request } from "@adonisjs/core/build/standalone"

export default class ExerciciosController {
ex1 ({request}) {
    const dados = request.body()
    const salario = dados.salario*1
    let reajuste 
    if(salario <= 2000){
        reajuste = salario * 0.5 
    }
    else{
        reajuste = salario * 0.3 
    }
    const salarioReajuste = salario + reajuste
    return {salarioReajuste}
    }
ex2 ({request}){
    const dados =  request.body()
    const n1 = dados.n1 *1
    const n2 = dados.n2 *1      
    const n3 = dados.n3 *1
    
    let maior 
    if(n1 > n2 && n1 > n3){
        return n1
    }
    else if(n2 > n1 && n2 > n3)
        return n2
    else{
        return n3
    }
}
ex3 ({request}){
    const dados = request.body()
    const qtdChopp = dados.qtdChopp *1
    const qtdPizza = dados.qtdPizza *1
    const qtdCobertura = dados.qtdCobertura *1
    const qtdPessoas = dados.qtdPessoas*1
    
    const valorChopp = qtdChopp *4.80
    const valorPizza = qtdPizza *17
    const valorcobertura = qtdCobertura *1.50


    const conta = (valorChopp + valorPizza + valorcobertura)/qtdPessoas 
    const gorjetaGarcom  = conta * 0.1
    const contaIndividual = conta + gorjetaGarcom
    
    return{contaIndividual}
}
ex4 ({request}){
    const dados = request.body()
    const salarioMinimo = dados.salarioMinimo *1
    const horasTrabalhadas = dados.horasTrabalhadas *1
    const dependente = dados.dependentes *1
    const horasExtras = dados.horasExtras *1

    const valorHora = salarioMinimo *0.2
    const salarioMes = horasTrabalhadas * dados.valorHora
    const acrescimoDependente = dependente * 32
    const valorHoraExtra = horasExtras * (valorHora * 0.5 + valorHora)
    const salarioBruto = salarioMes + acrescimoDependente + valorHora 

    let imposto  
    if (salarioBruto < 2000){
        imposto = 0
    }
    else if(salarioBruto <= 5000) {
        imposto = salarioBruto * 0.10
    }
    else if(salarioBruto > 5000){
        imposto = salarioBruto * 0.20
    }
    const salarioLiquido = salarioBruto - imposto

    let gratificacao
    if (salarioLiquido <= 3500){
        gratificacao = 1000
    }
    else{
        gratificacao = 500
    }
    const salarioReceber = salarioLiquido + gratificacao

    return{salarioReceber}
}
ex5 ({request}){
    const dados = request.body()
    const numeroIdentifacao = dados.numeroIdentifacao
    const p1 = dados.p1 *1
    const p2 = dados.p2 *1
    const p3 = dados.p3 *1
    const mediaE = dados.mediaE *1

    const mediaAproveitamento = (p1 + p2 *2 + p3 *3 + mediaE)/7
    let mensagem
    let conceito
    if(mediaAproveitamento >= 9){
         conceito = 'A'
         mensagem = 'Aprovado'    
    }
    else if(mediaAproveitamento >= 7.5 && mediaAproveitamento < 9){
        conceito = 'B'
        mensagem = 'Aprovado'    
    }
    else if(mediaAproveitamento >= 6 && mediaAproveitamento < 7.5){
        conceito = 'C'
        mensagem = 'Aprovado'    
    }
    else if(mediaAproveitamento >= 4 && mediaAproveitamento < 6){
        conceito = 'D'
        mensagem = 'Reprovado'    
    }
    else {
        conceito = 'E'
        mensagem = 'Reprovado'    
    }  
    return{numeroIdentifacao,p1,p2,p3,mediaE,mediaAproveitamento,conceito,mensagem}
}
ex6 ({request}){
    const dados = request.body()
    const altura = dados.altura*1
    const sexo = dados.sexo 
    let pesoIdeal
    if (sexo === 'M' || sexo === 'm' ){
        pesoIdeal = (72.7 *altura) -58
    }
    else if (sexo === 'F' || sexo === 'f'){
        pesoIdeal = (62.1 *altura) -44.7
    }
    else{
        
    }
    return{pesoIdeal}
}
ex7 ({request}){
    const dados = request.body()
    const valor1 = dados.valor1 *1
    const valor2 = dados.valor2 *1
    const valor3 = dados.valor3 *1

        if(valor1 > valor2 && valor2 > valor3 && valor1 > valor3){
        let maiores = valor1 + valor2
        return {maiores}
    }
    else if(valor2 > valor1 && valor3 > valor1 && valor2 > valor3 ){
        let maiores = valor2 + valor3
        return{maiores}
    }
    else if(valor3 > valor2 && valor1 > valor2 && valor3 > valor1){
        let maiores = valor3 + valor1
        return{maiores}
    }
    else if(valor1 > valor2 && valor3 > valor2 && valor1 > valor3){
        let maiores = valor1 + valor3
        return{maiores}
    }
    else if(valor3 > valor1 && valor2 > valor1 && valor3 > valor2){
        let maiores = valor2 + valor3
        return{maiores}
    }
    else if(valor2 > valor1 && valor2 > valor3 && valor1 > valor3){
        let maiores = valor2 + valor1
        return{maiores}
    }
    else{
        let mensagem = 'Numeros iguais!'
        return{mensagem}
    }
}
ex8 ({request}){
    const dados = request.body()
    const salario = dados.salario *1
    const codigo = dados.codigo *1

    let novoSalario
    if(codigo === 101){
        novoSalario = salario +(salario * 0.05)
        let diferenca = novoSalario - salario
        return{salario, novoSalario, diferenca}
    }
    else if(codigo === 102){
        novoSalario = salario +(salario * 0.075)
        let diferenca = novoSalario - salario
        return{salario, novoSalario, diferenca}
    }
    else if(codigo === 103){
        novoSalario = salario +(salario * 0.1)
        let diferenca = novoSalario - salario
        return{salario, novoSalario, diferenca}    
}
    else{
        novoSalario = salario +(salario * 0.15)
        let diferenca = novoSalario - salario
        return{salario, novoSalario, diferenca}
    }
}
}
