async function getCep(cep) {
    const cepInput = document.getElementById("cepinput")

    await fetch(`https://brasilapi.com.br/api/cep/v2/${cepInput.value}`, {
        method: 'GET',
        mode: "cors",
    }).then(res => res.json().then(res => {
        document.body.innerHTML = res.cep

        console.log(res)
    }))
    
}