function showName(buttonElement) {
    // Encuentra el título en la misma tarjeta donde se hizo clic en el botón
    const destino = buttonElement.parentElement.querySelector('.destino').innerText;
    const precio= parseInt(buttonElement.parentElement.querySelector('.precio').innerText);
    // Asigna los valores a los inputs correspondientes
    document.getElementById('destino_final').value = destino;
    document.getElementById('precio_final').value = precio;
    // Muestra el nombre del título
    console.log(typeof(destino))
    console.log(typeof(precio))
}
function enviar(){
    const destino=document.getElementById('destino_final').value;
    const precio=document.getElementById('precio_final').value;
    const cantidad=document.getElementById('cantidad').value;
    console.log(destino)
    console.log(precio)
    console.log(cantidad)
}
