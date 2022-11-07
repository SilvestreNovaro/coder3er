const almohadones = [ {
    nombre: 'Almohadon Pestana',
    imagen: '1',
    color: 'avellana',
    medidas: '30x50',
    precio: 3700,
    descripcion: 'Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | ',
    stock: true
  },
   {
    nombre: 'Almohadon Lisboa',
    imagen: '2',
    color: 'aqua',
    medidas: '30x50',
    precio: 3700,
    descripcion: 'Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | ',
    stock: false
  },
   {
    nombre: 'Almohadon Algarve',
    imagen: '3',
    color: 'blanco',
    medidas: '30x50',
    precio: 3500,
    descripcion: 'Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | ',
    stock: true
  },
   {
    nombre: 'Almohadon Sintra',
    imagen: '4',
    color: 'azul',
    medidas: '30x50',
    precio: 3800,
    descripcion: 'Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | ',
    stock: false
  },
   {
    nombre: 'Almohadon Alcantra',
    imagen: '5',
    color: 'arena',
    medidas: '30x50',
    precio: 3900,
    descripcion: 'Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | ',
    stock: true
  },
   {
    nombre: 'Almohadon Dublin',
    imagen: '6',
    color: 'cemento',
    medidas: '30x50',
    precio: 4000,
    descripcion: 'Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | ',
    stock: true
  }
]
 //AGREGO AL PRINCIPIO DEL CÓDIGO EL CARRITO QUE ES UN ARRAY VACÍO
 const carrito = [];

// ACÁ, CAPTURO EL ELEMENTO HTML EN EL CUAL VOY A INYECTARLE LAS CARDS CON JAVASCRIPT
const contenedor = document.querySelector("div.contenedor")


// CREO PRIMERO, UNA FUNCIÓN QUE CREA UNA CARD USANDO TEMPLATE STRINGS Y TEMPLATE LITERALS
const retornoCard = (almohadon) => {
    return ` <div class="card">
                  <div class="card-image"> <img src="img/${almohadon.imagen}.jpeg" alt=""></div>
                  <div class="card-name">${almohadon.nombre}</div>
                  <div class="card-price">$${almohadon.precio}</div>
                  <div class="card-button">
                      <button class="button button-outline button-add" id="${almohadon.nombre}" title="Pulsa para agregar al carrito">+</button>
                      <button class="button button-outline button-remove" id="${almohadon.nombre}" title="Pulsa para quitar del carrito">-</button>
                  </div>
              </div> `
  }

// ACTIVO LOS BOTONES + PARA QUE AL PRESIONARLOS, PODAMOS AGREGARLOS AL ARRAY CARRITO
  const activarBotonesAdd = ()=> {
    const botonesAdd = document.querySelectorAll(".button.button-outline.button-add")
    botonesAdd.forEach(btn =>{
      btn.addEventListener("click", ()=>{
        agregarAlCarrito(btn.id)
        })
    })
  }

  
// ACTIVO LOS BOTONES - PARA QUE AL PRESIONARLOS, PODAMOS QUITAR ELEMENTOS DEL ARRAY CARRITO
  const activarBotonesRemove = ()=> {
    const botonesRemove = document.querySelectorAll(".button.button-outline.button-remove")
    botonesRemove.forEach(btn =>{
      btn.addEventListener("click", ()=>{
        restarCarrito(btn.id)
        })
    })
  }
 
  // DECLARO LA FUNCIÓN PARA INYECTARLE EL HTML AL CONTAINER DE CADA PRODUCTO USANDO FOREACH Y LLAMO TAMBIEN A LAS FUNCIONES PARA ACTIVAR LOS BOTONES 
 const cargarMisProductos = () => {
   almohadones.forEach(almohadon =>{
     //console.table(producto)
     contenedor.innerHTML += retornoCard(almohadon)
   })
   activarBotonesAdd()
   activarBotonesRemove()
 }
 // ACÁ EJECUTO LA FUNCIÓN PARA CARGAR PRODUCTOS
 cargarMisProductos() 

 // SUMO EL PRECIO TOTAL DEL CARRITO. SE VISUALIZA DESDE LA CONSOLA TAMBIÉN

const precioTotal = () =>{
  let precioTotalCarrito = 0
  carrito.forEach(almohadon =>{precioTotalCarrito += almohadon.precio}); console.log(`El precio total del carrito es de ${precioTotalCarrito}`)
  }
 

 // PARA VER EL CARRITO PODEMOS VER LA RESPUESTA DE LA FUNCION EN LA CONSOLA DEL NAVEGADOR CUANDO SE AGREGA UN PRODUCTO
  const agregarAlCarrito = (almohadon)=> {
    let resultado = almohadones.find(prod => prod.nombre === almohadon)
    if(resultado !== undefined){
      carrito.push(resultado)
      precioTotal()
      guardarCarrito()
      /* console.clear()*/
      console.table(carrito) 
    }
  }

   // LE QUITAMOS AL CARRITO UN PRODUCTO EN LA CONSOLA DEL NAVEGADOR 
  const restarCarrito = (e) => {
   // debugger
   for (let i = 0; i < carrito.length; i++) {
    if(carrito[i].nombre == e ){
      carrito.splice(i, 1);
      console.table(carrito)
      precioTotal() 
      guardarCarrito()
      break;
    }
   }
  }

  // AHORA QUE YA TENEMOS EL CARRITO Y LOS BOTONES ACTIVOS, GUARDAMOS EL CARRITO EN LOCALSTORAGE USANDO JSON PARA CONVERTIR EL ARRAY EN STRING
  const guardarCarrito = ()=>{ 
  if(carrito.length>0){localStorage.setItem("carrito", JSON.stringify(carrito))}  
  }

  //DECLARAMOS LA FUNCIÓN QUE VA BUSCAR LA INFORMACIÓN GUARDA EN LOCALSTORAGE USANDO GETITEM  Y PARSEANDO LA INFORMACION PARA CONVERTIR EL STRING EN UN ARRAY DE OBJETOS NUEVAMENTE
  const recuperarCarrito = ()=>{
    if (localStorage.getItem("carrito")) {
    let carritoDeLocalS =  JSON.parse(localStorage.getItem("carrito"))
    carritoDeLocalS.forEach(producto => carrito.push(producto))
  } else {
      console.warn("No se encontró un carrito previamente guardado.")
  }
}
recuperarCarrito()