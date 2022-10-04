const select_forma = document.querySelector('#forma');
// const valor_forma = document.querySelector('');
// console.log(select_forma);

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