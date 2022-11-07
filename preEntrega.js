class Almohadon{
    constructor(nombre, imagen, color, medidas, precio,descripcion, stock){
        this.nombre=nombre
        this.imagen=imagen 
        this.color=color
        this.medidas=medidas
        this.precio=precio
        this.descripcion=descripcion
        this.stock=stock
    }
   
    hayStock(){
        let hayStock = "hay stock"
        if(this.stock == false){
            this.stock = true
        }
        else{
            console.log(hayStock)
        }
    }
    noHayStock(){
        let error = "no hay stock"
        if(this.stock == true){
            this.stock = false
        }
        else{
            console.log(error)
        }
    }
}
// LUEGO, CREO UN ARRAY "DEPÓSITO" DONDE VOY A GUARDANDO LOS ALMOHADONES QUE INSTANCIA EL VENDEDOR POR MEDIO DEL PROMPT: 
const deposito=[];

// ACÁ INSTANCIE PRODUCTOS PARA AGREGAR AL ARRAY DEPÓSITO 
let almohadon1 = new Almohadon("Almohadon Pestana","1", "avellana", "30x50", 3700,"Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | ", true)
let almohadon2 = new Almohadon("Almohadon Lisboa","2", "aqua", "30x50", 3700, "Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | ", false)
let almohadon3 = new Almohadon("Almohadon Algarve","3", "blanco", "30x50", 3500,"Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | ", true)
let almohadon4 = new Almohadon("Almohadon Sintra","4", "azul", "30x50", 3800,"Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | ", false)
let almohadon5 = new Almohadon("Almohadon Alcantra","5", "arena", "30x50", 3900,"Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | ", true)
let almohadon6 = new Almohadon("Almohadon Dublin","6", "cemento", "30x50", 4000,"Almohadon de 30x50 con terminacion desflecada. Funda con cierre + relleno Composicion:  tusor | 100% algodon | ", true)

// Y CREO UNA FUNCIÓN PARA AGREGARLOS AL ARRAY: 
function cargarProductosInstanciados() {
    deposito.push(almohadon1,almohadon2,almohadon3,almohadon4,almohadon5,almohadon6)
    console.table(deposito)   
}

cargarProductosInstanciados()

// CUANDO INGRESA EL VENDEDOR A LA PÁGINA, LE PREGUNTO SI QUIERE CARGAR UN PRODUCTO NUEVO:
let ingresoArt = prompt("¡Hola vendedor! ¿Desea cargar nuevos artículos a la página? Escriba SI o NO").toLocaleUpperCase()
while(ingresoArt == "SI" || "si"){
    agregarAlmohadon()
    ingresoArt = prompt("Desea seguir agregando artículos? Escriba SI o NO")
}

// POR MEDIO DE LA FUNCIÓN agregarAlmohadón(), CAPTURO LAS ENTRADAS DEL VENDEDOR QUE INSTANCIA ALMOHADONES:
function agregarAlmohadon(){
    let nombreAlmohadonNuevo = prompt("Ingrese el nombre del almohadón nuevo").toLocaleUpperCase()
    let imagenAlmohadonNuevo = prompt("Ingrese el nombre de la imagen del almohadón").toLocaleUpperCase()
    let colorAlmohadonNuevo = prompt("Ingrese el color del almohadón").toLocaleUpperCase()
    let medidas = prompt("Ingrese las medidas del almohadon").toLocaleUpperCase()
    let precio = Number(prompt("Ingrese el precio sin signo pesos"))
    let descripcion = prompt("Ingrese la descripción del almohadón").toLocaleUpperCase()
    let stock = Number(prompt("Ingrese el stock de almohadones disponibles"))
    let confirma = confirm("Estás segurx de que queres agregar este nuevo ítem?")
    let almohadonNuevo = new Almohadon(nombreAlmohadonNuevo,imagenAlmohadonNuevo, colorAlmohadonNuevo, medidas, precio, descripcion,stock,confirma)
    console.log(almohadonNuevo)
    deposito.push(almohadonNuevo)
    console.table(deposito)
    alert(`Genial! has ingresado un nuevo producto a tu página: 
    \n Nombre del almohadon: ${almohadonNuevo.nombre}
    \n Color del almohadon: ${almohadonNuevo.color}
    \n Medidas: ${almohadonNuevo.medidas}
    \n Precio: ${almohadonNuevo.precio}
    \n Stock ingresado: ${almohadonNuevo.stock}`)}