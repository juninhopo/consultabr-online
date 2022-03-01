async function getCep(cep) {
    const cepInput = document.getElementById("cepinput")

    await fetch(`https://brasilapi.com.br/api/cep/v2/${cepInput.value}`, {
        method: 'GET',
        mode: "cors",
    }).then(res => res.json().then(res => {
       document.getElementById("cep").textContent = "CEP: " + res.cep 
       document.getElementById("estado").textContent = "ESTADO: " + res.state 
       document.getElementById("cidade").textContent = "CIDADE: " + res.city 
       document.getElementById("bairro").textContent = "BAIRRO: " + res.neighborhood 
       document.getElementById("rua").textContent = "RUA: " + res.street 

       const containerResponse = document.getElementById("responseSubmit")
       
       containerResponse.style.display = "flex"

    }))
}