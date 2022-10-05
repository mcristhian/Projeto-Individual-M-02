const select_forma = document.querySelector('#forma');
const procedimento_c = document.querySelector('#codificar');
const procedimento_d = document.querySelector('#decodificar');
const envio = document.querySelector('#botao_envio');

select_forma.addEventListener('change', (f) => {
    //f.preventDefault();

    if (select_forma.value == 'cesar'){
        document.querySelector('.visibilidade_incremento').style.display = 'flex';

    } else {
        document.querySelector('.visibilidade_incremento').style.display = 'none';
    }
})

procedimento_c.addEventListener('click', (f) => {
    document.querySelector('#botao_envio').value = 'Codificar mensagem!';
})

procedimento_d.addEventListener('click', (f) => {
    document.querySelector('#botao_envio').value = 'Decodificar mensagem!';
})

envio.addEventListener('click', (cifra_de_cesar) => {
    let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if (envio.value == 'Codificar mensagem!') {
        let mensagem = document.querySelector('#mensagem').value;
        let chave = parseInt(document.querySelector('#incremento').value);
        let mensagem_criptografada = '';
        
        for(let i=0; i < mensagem.length; i++){
            let posicao = alfabeto.indexOf(mensagem[i]);

            if (alfabeto.includes(mensagem[i])){
                let limite = posicao + chave;
                if (limite >= alfabeto.length){
                    mensagem_criptografada += alfabeto[(posicao - alfabeto.length) + chave];

                    // let teste = (posicao - alfabeto.length) + chave
                    // console.log(teste);
                } else {
                    mensagem_criptografada += alfabeto[posicao + chave];
                }
            } else {
                mensagem_criptografada += mensagem[i];
            }
        }
        document.querySelector('#resultado').value = mensagem_criptografada;
    } else if (envio.value == 'Decodificar mensagem!'){
        let mensagem = document.querySelector('#mensagem').value;
        let chave = parseInt(document.querySelector('#incremento').value);
        let mensagem_descriptografada = '';
        
        for(let i=0; i < mensagem.length; i++){
            let posicao = alfabeto.indexOf(mensagem[i]);
            
            if (alfabeto.includes(mensagem[i])){
                let limite = posicao - chave;
                if (limite <= 0){
                    mensagem_descriptografada += alfabeto[(posicao + alfabeto.length) - chave];

                    let teste = (posicao + alfabeto.length) - chave;
                    console.log(teste);
                } else {
                    mensagem_descriptografada += alfabeto[posicao - chave];
                }
            } else {
                mensagem_descriptografada += mensagem[i];
            }
        }
        document.querySelector('#resultado').value = mensagem_descriptografada;
    }
})



