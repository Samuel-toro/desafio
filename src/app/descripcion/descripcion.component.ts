import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagenUrl: string;
  tipoEnvio: string;
  descripcion?: string;
}

@Component({
  selector: 'app-descripcion',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  productos: Producto[] = [
    { 
      id: 1,
      nombre: 'Faro Delantero Toyota Hilux',
      precio: 135,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_968801-MLV80274291622_112024-O.webp',
      tipoEnvio: 'Envío gratis',
      descripcion: 'Faro delantero original para Toyota Hilux, compatible con modelos 2016-2024'
    },
    { 
      id: 2,
      nombre: 'Parachoques Delantero Chevrolet',
      precio: 80,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_909747-MLV54094893139_032023-O.webp',
      tipoEnvio: 'Envío express',
      descripcion: 'Parachoques delantero para Chevrolet Cruze 2018-2023'
    },
    { 
      id: 3,
      nombre: 'Tapas de Centro Chevrolet',
      precio: 25,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_976645-MLV31959743600_082019-O.webp',
      tipoEnvio: 'Envío gratis',
      descripcion: 'Set de 4 tapas de centro originales para rines Chevrolet'
    },
    { 
      id: 4,
      nombre: 'Aceite Motul 15W-40',
      precio: 8.50,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_724518-MLV69494794480_052023-O.webp',
      tipoEnvio: 'Envío express',
      descripcion: 'Aceite mineral Motul 15W-40 para motores de 4 tiempos'
    },
    { 
      id: 5,
      nombre: 'Faro Delantero Derecho Hilux',
      precio: 135,
      imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_785643-MLV53382062434_012023-O.webp',
      tipoEnvio: 'Envío estándar',
      descripcion: 'Faro delantero derecho original para Toyota Hilux 2016-2024'
    }
  ];

  productoSeleccionado: Producto | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        const id = +params['id'];
        const producto = this.productos.find(p => p.id === id);
        if (producto) {
          this.productoSeleccionado = producto;
        } else {
          this.router.navigate(['/home']);
        }
      }
    });
  }

  volverAlInicio() {
    this.router.navigate(['/home']);
  }
}