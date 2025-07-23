let totalItems = 0;
let totalPrecio = 0;
let arrreglo = [];

function agregarCarrito(nombre, precio){
    totalItems ++;
    totalPrecio += precio;  
    arrreglo.push(nombre);
    
    document.getElementById("total-items").textContent = totalItems;
    document.getElementById("total-precio").textContent = totalPrecio;

    if (totalPrecio > 50){
        alert("¡Envío gratis aplicado!")
    }
    console.log("Productos en el carrito: ", arrreglo );
}
function vaciarCarrito(){
    totalItems = 0;
    totalPrecio = 0;
    arrreglo = [];

    document.getElementById("total-items").textContent = "0";
    document.getElementById("total-precio").textContent = "0";

    alert("Carrito vacío");
}