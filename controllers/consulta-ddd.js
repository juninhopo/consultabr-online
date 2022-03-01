async function getDdd(ddd) {
    const dddInput = document.getElementById("dddinput")

    await fetch(`https://brasilapi.com.br/api/ddd/v1/${dddInput.value}`, { 
        method: 'GET',
        mode: "cors",
    }).then(res => res.json().then(res => {
        document.getElementById("state").textContent = "ESTADO: " + res.state
        document.getElementById("cities").textContent = "CIDADES: " + res.cities

        const containerResponse = document.getElementById("responseSubmit")

        containerResponse.style.display = "flex"

    }))

}

