const caja = document.getElementById("contenedor");
const cajacarro= document.getElementById("carrito");




document.addEventListener("DOMContentLoaded", () => {
   const idUser = localStorage.getItem("usuario");
console.log(idUser);
});

console.log(caja);
const userId = localStorage.getItem("usuario");


const  CrearCard   = (element) => {
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
    <p class="card-text"><h1> ${element.nombre}</h1></p>
  </div>
  <ul class="list-group list-group-flush" style="text-align: center;">
    <li class="list-group-item"> Precio ${element.precio} </li>
    
  </ul>
  <div class="card-body" style="text-align: center;" >
    
  <button type="button" id="btnVolver"  class="btn btn-primary ver-completo" onclick="btnVolver()" >Volver  </button>
    <button type="button" class="btn btn-primary ver-carrito "data-id="${element.id}" >
   Carrito</button>
  </div>
  <div class="card-footer text-muted">
    
  </div>
</div>

<div class="card bg-light mb-3" style="max-width: 20rem;">
  <div class="card-header"><h1>${element.nombre}</h1></div>
  <div class="card-body">
    <h4 class="card-title">Especificaciones</h4>
    <p class="card-text">
    <ul>
  
   <li>CPU: ${element.cpu}</li>
   <li>CPU: RAM:  ${element.Ram}</li>
   <li>Tarjeta gráfica: ${element.Tarjeta_grafica}</li>
   <li>CPU: ${element.Fuente_alimentación}</li>
   <li>Conexiones traseras: ${element.conexiones_traseras}</li>
</ul>
    </p>
    <p class="card-text">
    ${element.descripcion}
     </p>
  </div>







`
   
};

for (let i = 0; i < pcsobremesa.length; i++) {

   if (pcsobremesa[i].id === parseInt(userId)) {
      const element = pcsobremesa[i];
      console.log(element.nombre);
      
     
       caja.innerHTML = CrearCard(element);
     
  
    
    
   };
 

}
const btnVolver = () => {
  window.location.href = "pc_sobremesa.html";
};







const crearcarro =(elementocarrito)=> {
  return `
  <div class="alert alert-dismissible alert-warning">
  
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  <h4 class="alert-heading">${elementocarrito.nombre}</h4>
  <img src="${elementocarrito.imagen}" alt="" class="d-block user-select-none" width="100" height="100" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style="font-size:1.125rem;text-anchor:middle">
  <p class="mb-0"> <a href="#" class="alert-link">ir a la cesta</a>.</p>
</div>
  `
};


document.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("ver-carrito")) {
    const userId = ev.target.getAttribute("data-id")
    console.log(userId);
    localStorage.setItem("usuario", userId);
    
    for (let i = 0; i < pcsobremesa.length; i++) {

      if (pcsobremesa[i].id === parseInt(userId)) {
        const elementocarrito = pcsobremesa[i];
        console.log(elementocarrito.nombre);

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
        setTimeout(b, 2000);
     };

    }
  }
})

//let almacenarproductos = [];

  document.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("ver-carrito")) {
      let userId = ev.target.getAttribute("data-id");

     /* almacenarproductos.push(userId);
      console.log(almacenarproductos);

       localStorage.setItem("almacenar", JSON.stringify(almacenarproductos));
       */

       let usuarioLocalStorage = localStorage.getItem("almacenar");
    console.log(typeof usuarioLocalStorage);
    let convierto= JSON.parse(usuarioLocalStorage);
convierto.push(userId);

localStorage.setItem("almacenar", JSON.stringify(convierto));

    }
  });


console.log(almacenarproductos);