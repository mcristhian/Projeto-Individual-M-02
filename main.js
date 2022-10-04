const select_forma = document.querySelector('#cesar');

select_forma.addEventListener('click', RespondClick);

function RespondClick(){
    let texto = document.createElement('p');
    texto.innerText = 'Testando';
    document.body.append(texto);
}