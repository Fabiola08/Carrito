//variables para referenciar a objetos del documento
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');


const agregarCurso = (e) => {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        console.log("Presionaste el botón");
    }
}

const cargarEventListener = () => {
    //AGREGAR FUNCION DE CARGA DE CURSOS AL CARRITO
    listaCursos.addEventListener('click', agregarCurso);
}

cargarEventListener();
