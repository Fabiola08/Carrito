//variables para referenciar a objetos del documento
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let listadoCarrito = [];

const agregarCurso = (e) => {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement;
        const infoCurso = {
            imagen: curso.querySelector('img').src,
            nombre: curso.querySelector('h4').textContent,
            precio: curso.querySelector('p.precio').textContent,
            id: curso.querySelector('.agregar-carrito').getAttribute('data-id'),
            cantidad: 1
        }
        
        agregarCarrito(infoCurso);
    }
}


const agregarCarrito = curso => {
    listadoCarrito = [...listadoCarrito, curso]
    console.log(listadoCarrito);
    generaHTML();
}

const generaHTML = () => {
    vaciarCarrito();
    listadoCarrito.forEach(curso => {
        const row = document.createElement('tr');
        const cursoHTML = `
        <td>
            <img src="${curso.imagen}" width=100>
        </td>
        <td>
            ${curso.nombre}
        </td>
        <td>
            ${curso.precio}
        </td>
        <td>
            ${curso.cantidad}
        </td>
        `;
        row.innerHTML = cursoHTML;
        contenedorCarrito.appendChild(row);
    });
}

const vaciarCarrito = () => {
    

}

const cargarEventListener = () => {
    //AGREGAR FUNCION DE CARGA DE CURSOS AL CARRITO
    listaCursos.addEventListener('click', agregarCurso);
}

cargarEventListener();
