const select_forma = document.querySelector('#forma');
const procedimento_c = document.querySelector('#codificar');
const procedimento_d = document.querySelector('#decodificar');

select_forma.addEventListener('change', (f) => {
    f.preventDefault();

    if (select_forma.value == 'cesar'){
        console.log('positivo');
        document.querySelector('.visibilidade_incremento').style.display = 'flex';

    } else {
        console.log('falso');
        document.querySelector('.visibilidade_incremento').style.display = 'none';
    }
})

procedimento_c.addEventListener('click', (f) => {
    //f.preventDefault();

    document.querySelector('#botao_envio').value = 'Codificar mensagem!';
})

procedimento_d.addEventListener('click', (f) => {
    document.querySelector('#botao_envio').value = 'Decodificar mensagem!'
})