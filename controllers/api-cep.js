const fetchCep = () => {
    const url = `https://brasilapi.com.br/api/cep/v1/{79052564}`
    
    fetch(url) 
        .then(response => response.json())
        .then(cep => {
            console.log(cep)
        })
}

fetchCep()