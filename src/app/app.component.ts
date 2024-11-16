import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MdbCarouselModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  slides = [
    { 
      img: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    },
    { 
      img: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp',
    },
    { 
      img: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
    }
  ];

  cardData = {
    title: 'Shiba Inu',
    subtitle: 'Dog Breed',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  };

  productData = [
    { title: 'Silla Plástica Duraplas Con/brazos Hogar Jardin Gama/colores', price: '$10', shipping: 'Gratis', image: 'https://http2.mlstatic.com/D_NQ_NP_771389-MLV78627248931_082024-O.webp' },
    { title: 'Luces De Navidad 100 Led Doble Enchufe Multifuncion', price: '$20', shipping: 'Normal', image: 'https://http2.mlstatic.com/D_NQ_NP_701793-MLV72259054419_102023-O.webp' },
    { title: 'Tobo Coleto Magico Mopa Giratoria 360° Tienda Física', price: '$30', shipping: 'Urgente', image: 'https://http2.mlstatic.com/D_NQ_NP_942479-MLV80537716951_112024-O.webp' },
    { title: 'Silla Ejecutiva 9050n Oficina', price: '$40', shipping: 'Gratis', image: 'https://http2.mlstatic.com/D_NQ_NP_804080-MLV69451980520_052023-O.webp' },
    { title: 'Mesa Gaming Mesa De Oficina Escritorio Gaming Oficina Tienda', price: '$50', shipping: 'Normal', image: 'https://http2.mlstatic.com/D_NQ_NP_617986-MLV70345248458_072023-O.webp' }
  ];

  productos = [
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

  constructor(private router: Router) {}

  seleccionarProducto(producto: any) {
    this.router.navigate(['/descripcion', producto.id]);
  }
}