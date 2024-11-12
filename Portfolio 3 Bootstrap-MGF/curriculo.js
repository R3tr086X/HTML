document.addEventListener('DOMContentLoaded', function () {
    const datosPersonales = document.querySelector('section:nth-child(3)');

    datosPersonales.addEventListener('mouseover', function () {
        datosPersonales.style.backgroundColor = '#3498db';
        datosPersonales.style.color = '#fff';
    });

    datosPersonales.addEventListener('mouseout', function () {
        datosPersonales.style.backgroundColor = '';
        datosPersonales.style.color = '';
    });
});

