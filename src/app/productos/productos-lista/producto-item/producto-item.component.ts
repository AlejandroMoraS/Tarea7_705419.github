import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../Producto';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {
  @Input() producto: Producto;

  @Input() listaDeProductos: boolean;

  @Output() emisor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectProducto(event) {
    this.emisor.emit(event.target.checked);
  }
}
