const { CarritoCompra } = require("../index");

// Consignas:
//   1   constructor(): Inicializa el carrito como un array vacío.

//   2  agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

//   3  calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

//   4  aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

describe("Tests para CarritoCompra", () => {
  let carrito;
  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  it("Debe tener un constructor", () => {
    expect(carrito instanceof CarritoCompra).toBe(true);
  });

  it("Inicializa el carrito como un array vacío", () => {
    // productos va a ser la propiedad que contiene el arreglo vacío
    expect(carrito.productos).toEqual([]);
  });

  it("Recibe un objeto representando un producto y lo agrega al carrito", () => {
    const producto = {nombre: "Producto1", precio: 10};
    carrito.agregarProducto(producto);
    expect(carrito.productos).toContain(producto);
  });

  it("Calcula el total de la compra sumando los precios de todos los productos en el carrito", () => {
    const productos = [
      {nombre: "Producto1", precio: 10},
      {nombre: "Producto2", precio: 20},
      {nombre: "Producto3", precio: 30}
    ];
    productos.forEach(producto => carrito.agregarProducto(producto));
    const totalEsperado = productos.reduce((total, producto) => total + producto.precio, 0)
    expect(carrito.calcularTotal()).toBe(totalEsperado)
  })
  it("Aplica un descuento al total de la compra según el porcentaje especificado" , () => {
    const productos = [
      {nombre: "Producto1", precio: 10},
      {nombre: "Producto2", precio: 20},
      {nombre: "Producto3", precio: 30}
    ];
    productos.forEach(producto => carrito.agregarProducto(producto));
    const porcentajeDescuento = 10;
    const totalEsperado = carrito.calcularTotal() * (1- (porcentajeDescuento/100));
    expect(carrito.aplicarDescuento(porcentajeDescuento)).toBe(totalEsperado)
  })
});
