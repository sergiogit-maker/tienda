const caja = document.getElementById("contenedor");
const cajacarro = document.getElementById("carrito");
const recuperoicono = document.getElementById("icono");

console.log(recuperoicono);
console.log(pcsobremesa);

const CrearCard = (element) => {
  return `
   
  <div class="card mb-3">

  <div class="card-body">
    
  </div>
  <div>
  <img src="${element.imagen}" alt="" class="d-block user-select-none" width="300" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style="font-size:1.125rem;text-anchor:middle">
    <rect width="100%" height="100%" fill="#868e96"></rect>
    <text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text>
  </div>
  <div class="card-body" style="text-align: center;">
    <p class="card-text"> ${element.nombre}</p>
  </div>
  <ul class="list-group list-group-flush" style="text-align: center;">
    <li class="list-group-item"> Precio ${element.precio} </li>
    
  </ul>
  <div class="card-body" style="text-align: center;" >
    
  <button type="button" class="btn btn-primary ver-completo"data-id="${element.id}" >Ver  </button>
    <button type="button" class="btn btn-primary ver-carrito "data-id="${element.id}" >
   Carrito</button>
  </div>
  <div class="card-footer text-muted">
    
  </div>
</div>`;
};

for (let i = 0; i < pcsobremesa.length; i++) {
  const element = pcsobremesa[i];
  console.log(element.nombre);

  caja.innerHTML += CrearCard(element);
}

document.addEventListener("click", (ev) => {
  console.log(ev);
  if (ev.target.classList.contains("ver-completo")) {
    const userId = ev.target.getAttribute("data-id");

    localStorage.setItem("usuario", userId);
    window.location.href = "sobremesa-producto.html";
  }
});

const crearcarro = (elementocarrito) => {
  return `
  <div class="alert alert-dismissible alert-warning">
  
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  <h4 class="alert-heading">${elementocarrito.nombre}</h4>
  <img src="${elementocarrito.imagen}" alt="" class="d-block user-select-none" width="100" height="100" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style="font-size:1.125rem;text-anchor:middle">
  <p class="mb-0"> <a href="#" class="alert-link">ir a la cesta</a>.</p>
</div>
  `;
};
let creado = false;
document.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("ver-carrito")) {
    const userId = ev.target.getAttribute("data-id");
    console.log(userId);
    localStorage.setItem("usuario", userId);

    for (let i = 0; i < pcsobremesa.length; i++) {
      if (pcsobremesa[i].id === parseInt(userId)) {
        const elementocarrito = pcsobremesa[i];
        console.log(elementocarrito.nombre);

        //meter icono
       
          let icocarrito = document.createElement("span");
          icocarrito.classList.add("material-symbols-outlined");
          icocarrito.classList.add("nav-link");
          icocarrito.textContent = "shopping_bag";

          let parentDiv = document.getElementById("iconohijo").parentNode;
        var enlace = document.getElementById("iconohijo");
        
        if ( creado == false) {
          parentDiv.insertBefore(icocarrito, enlace);
          creado = true;
        };
        console.log(elementocarrito);

        // const carrito = document.createElement("div");

        cajacarro.innerHTML += crearcarro(elementocarrito);

        console.dir(cajacarro);
        console.log(cajacarro.children);
        const b = () => {
          while (cajacarro.firstChild) {
            cajacarro.removeChild(cajacarro.firstChild);
          }
          //cajacarro.removeChild;
        };
        setTimeout(b, 5000);
      }
    }
  }
});

let almacenarproductos = [];
 

  document.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("ver-carrito")) {
      let userId = ev.target.getAttribute("data-id");
      
      localStorage.setItem("almacenar", JSON.stringify(almacenarproductos));
      almacenarproductos.push(userId);
      console.log(almacenarproductos);







       localStorage.setItem("almacenar", JSON.stringify(almacenarproductos));



    }});




/*document.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("ver-carrito")) {
    





    let productoeliminar=ev.target.getAttribute("data-id");
    let usuarioLocalStorage = localStorage.getItem("almacenar");
    console.log(typeof usuarioLocalStorage);
    let convierto= JSON.parse(usuarioLocalStorage);
    console.dir(convierto[0]);
    console.dir(typeof productoeliminar);
    let productoeliminarobjeto = JSON.parse(productoeliminar);
    console.log(typeof productoeliminarobjeto);
    for(let i=0; i < convierto.length; i++){
      if(convierto[i] = productoeliminarobjeto){
  console.log("hola");
  let indiceremover=i;
  let numeroveces=1;
  convierto.splice(indiceremover,numeroveces);
  console.log(convierto);

      }
    }
    console.log(convierto);
    localStorage.setItem("almacenar", JSON.stringify(convierto));
  }


  })*/
