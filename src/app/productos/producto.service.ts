import { Injectable } from '@angular/core';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [
    new Producto(1, 'Mazda 3', 'Mazda', 'Autos', 352000, 3),
    new Producto(2, 'm15', 'alienware', 'laptop', 50000, 5),
    new Producto(3, 'area 51m', 'alienware', 'laptop', 60000, 2),
    new Producto(4, 'm17', 'alienware', 'laptop', 30000, 1),
    new Producto(5, 'i7 8700k', 'intel', 'processors', 7000, 4),
    new Producto(6, '1080', 'nvidia', 'graphic card', 12000, 8),
    new Producto(7, '570', 'AMD', 'graphic card', 5000, 6),
  ];

  private carrito: Producto[] = [];

  constructor() { }

  getCarrito(): Producto[] {
    return this.carrito.slice();
  }
  getProductos(): Producto[] {
    return this.productos.slice();
  }
  getTotalCarrito() {
    let total = 0;
    this.carrito.forEach(item => total += item.precio);

    return total;
  }

  setCarrito(arregloProductoSeleccionado: Producto[]) {
    this.carrito = arregloProductoSeleccionado;
  }
}
