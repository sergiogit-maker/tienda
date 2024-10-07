console.log(pcsobremesa);

const caja = document.getElementById("contenedor");
const realizarpedido = document.getElementById("pedido");
const cajapedido = document.getElementById("seccionpedido");


const cestacompleta = JSON.parse(localStorage.getItem("almacenar"));
console.log(cestacompleta.length);

console.log(cestacompleta);
console.log(typeof cestacompleta);
console.log(cestacompleta[0]);

const CrearCard = (element) => {
  return `
   
  <section>
  <div class="card mb-3" style="width: 18rem; " >
  <div class="card-body">
  </div>
  <div>
  <img src="${element.imagen}" alt="" class="d-block user-select-none" width="250" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style="font-size:1.125rem;text-anchor:middle">
    <rect width="100%" height="100%" fill="#868e96"></rect>
    <text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text>
  </div>
  <div class="card-body" style="text-align: center">
    <p class="card-text"  ><h1> ${element.nombre}</h1></p>
  </div>
  <ul class="list-group list-group-flush"  style="text-align: center">
    <li class="list-group-item"> Precio: ${element.precio} € </li>
    
  </ul>
  <div class="card-body"  style="text-align: center" >
    
  <button type="button" id="btnrecuperar" class="btn btn-primary ver-carrito "data-id="${element.id}">
   Eliminar</button>
  </div>
  <div class="card-footer text-muted">
    
  </div>

  <div> <div class="card bg-light mb-3" style="max-width: 20rem;">
  <div class="card-header" style="text-align: center" ><h1>${element.nombre}</h1></div>
  <div class="card-body" style="text-align: center" >
    <h4 class="card-title"  style="text-align: center">Especificaciones</h4>
    <p class="card-text">
    <ul>
  
   <li>CPU: ${element.cpu}</li>
   <li>CPU: RAM:  ${element.Ram}</li>
   <li>Tarjeta gráfica: ${element.Tarjeta_grafica}</li>
   <li>CPU: ${element.Fuente_alimentación}</li>
   <li>Conexiones traseras: ${element.conexiones_traseras}</li>
</ul>
    </p>
    <p class="card-text">Descripción :
    ${element.descripcion}
     </p>
  </div> </div>
</div>


  </section>







`;
};

/*for (let i = 0; i < cestacompleta.length; i++) {
  console.log(cestacompleta[i]);
   for (let e = 0; e < pcsobremesa.length; e++) {
      console.log("valor e " + pcsobremesa[e].id);
      console.log(cestacompleta[i]);
      if (pcsobremesa[e].id === cestacompleta[i]) {
   
        const element = pcsobremesa[e];
         console.log(element + "elemento");
        caja.innerHTML = CrearCard(element);
     }
  }
}*/

pcsobremesa.forEach(pc => {
   console.log(pc);
   for (let i = 0; i < cestacompleta.length; i++){
      if(pc.id === parseInt(cestacompleta[i])){
        const element = pc;
        console.log(element);
        caja.innerHTML += CrearCard(element);
      }

   }

});


/*const btnVolver = () => {
  console.log("boton");
  console.dir(caja);
 // window.location.href = "../index.html";
  pcsobremesa.forEach(pc => {
    console.log(pc);
    for (let i = 0; i < cestacompleta.length; i++){
       if(pc.id === parseInt(cestacompleta[i])){
         const element = pc;
         console.log(element);
         //caja.innerHTML += CrearCard(element);
         caja.innerHTML = "";
       }
 
    }
 
 });
};    */
  //window.location.href = "../index.html";


/*const btnvolver= () => {
  console.log("boton");
  //window.location.href = "../index.html";
  pcsobremesa.forEach(pc => {
    console.log(pc);
    for (let i = 0; i < cestacompleta.length; i++){
       if(pc.id === parseInt(cestacompleta[i])){
         const element = pc;
         console.log(element);
         //caja.innerHTML += CrearCard(element);
       }
 
    }
 
 });
};*/



document.addEventListener("click", (ev) => {
  console.dir(ev);
  console.dir(ev.target.parentNode.parentNode);
  let cajaborrar=ev.target.parentNode.parentNode;
  cajaborrar.remove();
  
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
  
});












const CrearCardpedido = (a) => {
  return cajapedido.innerHTML= `
   <div class="alert alert-dismissible alert-success">
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  <strong>Pedido realizado con exito</strong>
</div>
`;
};


realizarpedido.addEventListener("click", CrearCardpedido)