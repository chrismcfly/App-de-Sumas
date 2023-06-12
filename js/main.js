const botonEnviar = document.getElementById('boton-Contactanos');

botonEnviar.addEventListener('click', ()=>{
    console.log("HOLA FUNCIONA");
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);

    const tablaResultados = document.getElementById('tabla-resultados');
    tablaResultados.innerHTML += `
        <tr>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${nota1}</td>
            <td>${nota2}</td>
            <td>${(nota1+nota2)/2}</td>
        </tr>
    `;
});