class Carrito{

  comprarProducto(e){
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
      const producto = e.target.parentElement.parentElement
      this.leerDatosProducto(producto)
    }
  }

  leerDatosProducto(producto){
    const infoProduct = {
      imagen: producto.querySelector('img').src,
      name: producto.querySelector('h3').textContent,
      price: producto.querySelector('p').textContent,
      id: producto.querySelector('a').getAttribute('data-id'),
      cantidad: 1
    }
    this.insertarCarrito(infoProduct)
  }
  insertarCarrito(producto){
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>
        <img src="${producto.imagen}" width=100>
      </td>
      <td>${producto.name}</td>
      <td>${producto.price}</td>
      <td>
        <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
      </td>
    `;
    listaProductos.appendChild(row)
  }

  eliminarproducto(e){
    e.preventDefault()
    let producto, productoID
    if(e.target.classList.contains('borrar-producto')){
      e.target.parentElement.parentElement.remove()
      producto= e.target.parentElement.parentElement
      productoID= producto.querySelector('a').getAttribute('data-id')
    }
  }
}