document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('opcionConversion');
    const textoUno = document.getElementById('textoUno');
    const textoDos = document.getElementById('textoDos');
    const inputUno = document.querySelector('.contenedorOptionNumberOne input[type="number"]');
    const inputDos = document.querySelector('.contenedorOptionNumberTwo input[type="number"]');
    const button = document.querySelector('.button button');

    select.addEventListener('change', () => {
        switch (select.value) {
            case 'USD':
                textoUno.textContent = 'Ingrese monto en USD:';
                textoDos.textContent = 'Resultado en EUR:';
                inputDos.value = ''; 
                break;
            case 'EUR':
                textoUno.textContent = 'Ingrese monto en EUR:';
                textoDos.textContent = 'Resultado en COP:';
                inputDos.value = '';
                break;
            case 'COP':
                textoUno.textContent = 'Ingrese monto en COP:';
                textoDos.textContent = 'Resultado en USD:';
                inputDos.value = '';
                break;
            default:
                textoUno.textContent = 'Ingrese monto en:';
                textoDos.textContent = 'Resultado en:';
                inputDos.value = '';
                break;
        }
    });

    button.addEventListener('click', () => {
        const amount = parseFloat(inputUno.value);
        let result;

        switch (select.value) {
            case 'USD':
                result = amount * 0.85;
                result -= result * 0.02; 
                inputDos.value = result.toFixed(2); 
                break;
            case 'EUR':
                result = amount * 4500;
                result -= result * 0.03; 
                inputDos.value = result.toFixed(2);
                break;
            case 'COP':
                result = (amount / 1000) * 0.25;
                result -= result * 0.01; 
                inputDos.value = result.toFixed(2);
                break;
            default:
                inputDos.value = 'Seleccione una conversión válida';
                break;
        }
    });
});