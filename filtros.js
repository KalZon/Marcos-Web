const categorias = ['ciudad_de_mexico', 'guadalajara', 'chihuahua', 'medellin', 'bogota',
     'cali', 'santiago', 'arica', 'iquique', 'buenos_aires', 'santa_fe',
     'cordoba', 'sao', 'brasilia', 'rio'];

const mostrarCategoria = (categoriaMostrada) => {
  categorias.forEach(categoria => {
    const elementos = document.querySelectorAll(`#${categoria}`);
    elementos.forEach(elemento => {
      elemento.style.display = (categoria === categoriaMostrada) ? 'inline-block' : 'none';
    });
  });
};

categorias.forEach(categoria => {
  document.getElementById(`mostrar_${categoria}`).addEventListener('click', (event) => {
    mostrarCategoria(categoria);
    event.preventDefault();
  });
});
