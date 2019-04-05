import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../Producto';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {
  listaDeProductos: boolean;
  cant = 0;
  productos: Producto[];
  carrito: Producto[];
  carritoTotal = 0;
  arregloProductoSeleccionado: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.productos = this.productoService.getProductos();
    this.carrito = this.productoService.getCarrito();
    this.listaDeProductos = this.router.url.slice(1) === 'productos' ? true : false ;
    this.carritoTotal = this.productoService.getTotalCarrito();
  }

  actualizarCarrito(agregar, producto) {
    if (agregar) {
      this.arregloProductoSeleccionado.push(producto);
      this.cant ++;
    } else {
      this.arregloProductoSeleccionado.splice(this.arregloProductoSeleccionado.findIndex(item => item.id = producto.id), 1);
      this.cant --;
    }
  }

  addCart() {
    this.productoService.setCarrito(this.arregloProductoSeleccionado);
  }
}

