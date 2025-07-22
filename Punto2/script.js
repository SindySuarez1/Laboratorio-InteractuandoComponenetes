let totalItems = 0;
let totalPrecio = 0;

function agregarCarrito(nombre, precio){
    totalItems ++;
    totalPrecio += precio;  
    
    document.getElementById("total-items").textContent = totalItems;
    document.getElementById("total-precio").textContent = totalPrecio;

    if (totalPrecio > 50){
        alert("¡Envío gratis aplicado!")
    }
    
}