// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ListasController 
{
    ex1({request}){
        const dados = request.body()
       
        const tipoPessoa = (dados.tipoPessoa)
        const cpf = Number(dados.cpf)
        const cnpj = Number(dados.cnpj)
        const nome = (dados.nome)
        const sexo = (dados.sexo)
        const cargo = (dados.cargo)
        const salario = Number(dados.salario)

        

        const salarioReajustadoEstagiario = ((salario * 100) / 100) + salario

        const salarioReajustadoTecnicoM = ((salario * 60) / 100) + salario

        const salarioReajustadoTecnicoF = ((salario * 70) / 100) + salario

        const salarioReajustadoGerenteM = ((salario * 30) / 100) + salario

        const salarioReajustadoGerenteF = ((salario * 40) / 100) + salario

        const salarioReajustadoDiretorM = ((salario * 20) / 100) + salario

        const salarioReajustadoDiretorF = ((salario * 30) / 100) + salario

        const salarioReajustadoPresidenteM = ((salario * 10) / 100) + salario

        const salarioReajustadoPresidenteF = ((salario * 20) / 100) + salario
        
        let mensagem;
    

            if(tipoPessoa === 'pf' && !cpf ){
                mensagem = 'CPF não informado'
            }
            else if(tipoPessoa === 'pj' && !cnpj){
                mensagem = "CNPJ não informado"
            }
            else if(tipoPessoa === 'pj' && !!sexo ) {
                mensagem = ("O campo sexo só é permitido para Pessoa Física")
            }
            else if( tipoPessoa === 'pj' && cargo !== undefined){
                mensagem = "O campo cargo só é permitido para Pessoa Física"
            }
            else if(cpf > 0 && cnpj > 0){
                mensagem = "Favor informar somente uma opção, CPF ou CNPJ, de acordo com o Tipo de Pessoa"
            }
            else if(cargo === 'estagiario'){
                mensagem =`O salário original do ${nome} é ${salario}, agora reajustado ele(a) vai receber ${salarioReajustadoEstagiario}`
            }
            else if(cargo === 'tecnico' && sexo === 'm'){
                mensagem = `O salário original do ${nome} é ${salario}, agora reajustado ele(a) vai receber ${salarioReajustadoTecnicoM}`
            }
            else if(cargo === 'tecnico' && sexo === 'f'){
                mensagem =`O salário original do ${nome} é ${salario}, agora reajustado ele(a) vai receber ${salarioReajustadoTecnicoF}`
            }
            else if(cargo === 'tecnico' && sexo === 'm'){   
                mensagem = `O salário original do ${nome} é ${salario}, agora reajustado ele(a) vai receber ${salarioReajustadoTecnicoM}`
            }
            else if(cargo === 'gerente' && sexo === 'm'){
                mensagem = `O salário original do ${nome} é ${salario}, agora reajustado ele(a) vai receber ${salarioReajustadoGerenteM}` 
            } 
            else if(cargo === 'gerente' && sexo === 'f'){
                mensagem = `O salário original do ${nome} é ${salario}, agora reajustado ele(a) vai receber ${salarioReajustadoGerenteF}`
            }
            else if(cargo === 'diretor' && sexo === 'm'){
                mensagem `O salário original do ${nome} é ${salario}, agora reajustado ele(a) vai receber ${salarioReajustadoDiretorM}`
            }
            else if(cargo === 'diretor' && sexo === 'f'){
                mensagem `O salário original do ${nome} é ${salario}, agora reajustado ele(a) vai receber ${salarioReajustadoDiretorF}`
            }
            else if(cargo === 'presidente' && sexo === 'm'){
                mensagem = `O salário original do ${nome} é ${salario}, agora reajustado ele(a) vai receber ${salarioReajustadoPresidenteM}`
            }
            else{
                mensagem =  `O salário original do ${nome} é ${salario}, agora reajustado ele(a) vai receber ${salarioReajustadoPresidenteF}`
        }
        return{mensagem}
    }
}