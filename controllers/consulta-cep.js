let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');
 
cep.value = '01001000'

cep.addEventListener('blur', function(e) {
    let cep = e.target.value
    let script = document.createElement('script')
    script.src = 'viacep.com.br/ws/01001000/json/?callback=popularForm'
    document.body.appendChild(script)
})

function popularForm(resposta) {
    rua.value = resposta.logradouro
    bairro.value = resposta.bairro
    cidade.value = resposta.cidade
    estado.value = resposta.estado

}