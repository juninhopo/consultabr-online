async function getCnpj(cnpj) {
    const cnpjInput = document.getElementById("cnpjinput")

    await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpjInput.value}`, { 
        method: 'GET',
        mode: "cors",
    }).then(res => res.json().then(res => {
        document.getElementById("cnpj").textContent = "CNPJ: " + res.cnpj
        document.getElementById("razao_social").textContent = "RAZAO SOCIAL: " + res.razao_social
        document.getElementById("nome_fantasia").textContent = "NOME FANTASIA: " + res.nome_fantasia
        document.getElementById("descricao_situacao_cadastral").textContent = "SITUACAO CADASTRAL: " + res.descricao_situacao_cadastral
        document.getElementById("data_inicio_atividade").textContent = "ABERTURA DO CNPJ: " + res.data_inicio_atividade
        document.getElementById("cnae_fiscal").textContent = "CODIGO MCC: " + res.cnae_fiscal
        document.getElementById("cnae_fiscal_descricao").textContent = "DESCRICAO DO MCC: " + res.cnae_fiscal_descricao
        document.getElementById("descricao_tipo_logradouro").textContent = "NOME COMPLETO: " + res.descricao_tipo_logradouro
        document.getElementById("logradouro").textContent = "NOME COMPLETO: " + res.logradouro
        document.getElementById("numero").textContent = "NUMERO: " + res.numero
        document.getElementById("complemento").textContent = "COMPLEMENTE: " + res.complemente
        document.getElementById("bairro").textContent = "BAIRRO: " + res.bairro
        document.getElementById("cep").textContent = "CEP: " + res.cep
        document.getElementById("uf").textContent = "ESTADO: " + res.uf
        document.getElementById("municipio").textContent = "CIDADE: " + res.municipio
        document.getElementById("ddd_telefone_1").textContent = "TELEFONE 1: " + res.ddd_telefone_1
        document.getElementById("ddd_telefone_2").textContent = "TELEFONE 2: " + res.ddd_telefone_2

        const containerResponse = document.getElementById("responseSubmit")

        containerResponse.style.display = "flex"

    }))

}

