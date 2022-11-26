// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class Lista1sController {
    ex1({request}){
        const dados = request.body()

        const estoqueMedio = (dados.qtdMinima*1 + dados.qtdMaxima*1) / 2

        return {estoqueMedio}
    }

    ex2({request}){
        const nome = request.body()

        const salarioBruto = (nome.valorPorHora *1)  * (nome.horasTrabalhadas * 1)

        const porcentagem = (3 * (nome.numeroDeFilhos * 1)) / 100

        const salarioTotal = (porcentagem * salarioBruto) + salarioBruto

        return {salarioTotal}
    }

    ex3({request}){
        const idade = request.body()
        
        const dia = (idade.dia * 1)
        const mes = (idade.mes * 1) * 30
        const ano = (idade.ano * 1) * 365 

        const calculo = dia + mes + ano
        const resultado = `Você tem ${calculo} dias de vida`

        return{resultado}
    }

    ex4({request}){
        const idade = request.body()
        
        const ano = (idade.dia * 1) / 365 
        const mes = ano / 12
        const dia = mes / 30

        const resultado = `Você tem ${ano} anos, ${mes} meses e ${dia} dias.`

        return{resultado}
    }

    ex5({request}){
        const notas = request.body()
        
        const peso1 = ((notas.p1*1) * 0.2)
        const peso2 = ((notas.p2*1) * 0.3)
        const peso3 = ((notas.p3*1) * 0.5)
        const media = (peso1 + peso2 + peso3)

        const resultado = `A média do aluno é: ${media}.`

        return(resultado)
    }

    ex6({request}){
        const duracao = request.body()
        
        const segundos = (duracao.segundos * 1) 
        const minutos = (segundos * 1) / 60 
        const horas = (minutos / 60)

        const resultado = `O evento vai durar ${horas} horas, ${minutos} minutos e ${segundos} segundos.`

        return{resultado}
    }

    ex7({request}){
        const vendedor = request.body()
        
        const nome = vendedor.nome
        const salarioFixo = vendedor.sFixo
        const comissao = vendedor.totalVendas * (vendedor.percentual / 100) 
        const resultado = salarioFixo + comissao

        const mensagem =`O vendedor ${nome} recebe ${resultado}`

        return(mensagem)
    }

    ex8({request}){
        const piloto = request.body()

        const nome = piloto.nome
        const velocidadeMedia = (piloto.distancia * 1) / (piloto.tempo * 1)

        const mensagem = `A velocidade média do ${nome} foi ${velocidadeMedia}`

        return{mensagem}
    }

    ex9({request}){
        const empresa = request.body()

        const resultado = empresa.salario
        const response = {
            resultado
        } 

        if (empresa.salario < 1000){
           response.resultado =  (empresa.salario * 0.3) + empresa.salario * 1 
        }
        else{
            response.resultado =  `Você não tem direito a um aumento`
        }
        return response
    }

    
}
   
