async function getBank(bank) {
    const bankInput = document.getElementById("bankinput")

    await fetch(`https://brasilapi.com.br/api/banks/v1/${bankInput.value}`, { 
        method: 'GET',
        mode: "cors",
    }).then(res => res.json().then(res => {
        document.getElementById("ispb").textContent = "ISPB: " + res.ispb
        document.getElementById("name").textContent = "NOME: " + res.name
        document.getElementById("code").textContent = "CODIGO DO BANCO: " + res.code
        document.getElementById("fullname").textContent = "NOME COMPLETO: " + res.fullname

        const containerResponse = document.getElementById("responseSubmit")

        containerResponse.style.display = "flex"

    }))

}

