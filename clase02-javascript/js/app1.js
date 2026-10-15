/* let compra = prompt("Ingrese producto que quiere comprar: ")
let precioUnitario = Number(prompt("Ingrese el precio del producto por unidad:  "))
let cantidad = Number(prompt("Ingrese la cantidad deseada a comprar"))
let total = precioUnitario * cantidad

console.log("-----Resumen de compra-----");
console.log("Producto: ", compra);
console.log("Cantidad comprada: ", cantidad)
console.log("Precio por unidad: ", precioUnitario)
console.log("Total: ", total)

alert( "El usuario eligio como pruducto: " +compra + "\n" +" el cual tiene un costo por unidad de: " +precioUnitario + "\n" + " y eligio la cantida de: " + cantidad + "\n" + " lo que da un total de: " + "$" + total );

 */
let nombreComprador = prompt("Ingrese su nombre: ")
let documento = Number(prompt("Ingrese su documento: "))
let ciudad = prompt("Ingrese su ciudad: ")
let compra = prompt("Ingrese producto que quiere comprar: ")
let precioUnitario = Number(prompt("Ingrese el precio del producto por unidad:  "))
let cantidad = Number(prompt("Ingrese la cantidad deseada a comprar"))
let total = precioUnitario * cantidad

console.log("-----Resumen de compra-----");
console.log("Producto: ", compra);
console.log("Nombre del comprador: ", nombreComprador);
console.log("Documento del comprador: ", documento);
console.log("Ciudad de compra: ", ciudad);
console.log("Cantidad comprada: ", cantidad)
console.log("Precio por unidad: ", precioUnitario)
console.log("Total: ", total)

alert( "-----Resumen de compra-----\n" + "El usuario eligio como producto: " + compra + "\n" + "Nombre del comprador: " + nombreComprador + "\n" + "Documento del comprador: " + documento + "\n" + "Ciudad de compra: " + ciudad + "\n" + "Cantidad comprada: " + cantidad + "\n" + "Precio por unidad: " + precioUnitario + "\n" + "Total: $" + total );
