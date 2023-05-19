import { Component } from '@angular/core';
import { House } from 'src/app/models/house-card.model';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent {
  houseList: House[] = [
    {
      title: 'Casa de Lujo en el Lago',
      description: 'Casa al lado de un lago',
      price: 1000000,
      bathroomCount: 1,
      parkingCount: 2,
      bedroomCount: 2,
    }, {
      title: 'Apartamento en el Centro',
      description: 'Moderno apartamento en el corazón de la ciudad',
      price: 1500000,
      bathroomCount: 2,
      parkingCount: 1,
      bedroomCount: 3,
    },
    {
      title: 'Villa en la Montaña',
      description: 'Espectacular villa con vistas a las montañas',
      price: 2500000,
      bathroomCount: 3,
      parkingCount: 3,
      bedroomCount: 4,
    },
    {
      title: 'Cabaña junto al Río',
      description: 'Acogedora cabaña con acceso privado al río',
      price: 800000,
      bathroomCount: 1,
      parkingCount: 1,
      bedroomCount: 2,
    },
    {
      title: 'Piso en la Playa',
      description: 'Amplio piso con vistas panorámicas al mar',
      price: 1800000,
      bathroomCount: 2,
      parkingCount: 2,
      bedroomCount: 3,
    },
    {
      title: 'Chalet en el Bosque',
      description: 'Encantador chalet rodeado de naturaleza',
      price: 2200000,
      bathroomCount: 3,
      parkingCount: 2,
      bedroomCount: 4,
    },
    {
      title: 'Apartamento en la Ciudad',
      description: 'Acogedor apartamento en zona céntrica',
      price: 1200000,
      bathroomCount: 1,
      parkingCount: 1,
      bedroomCount: 2,
    },
    {
      title: 'Mansión en la Colina',
      description: 'Impresionante mansión con vistas panorámicas',
      price: 5000000,
      bathroomCount: 5,
      parkingCount: 4,
      bedroomCount: 6,
    },
    {
      title: 'Casa de Campo',
      description: 'Tranquila casa de campo ideal para descansar',
      price: 900000,
      bathroomCount: 2,
      parkingCount: 3,
      bedroomCount: 3,
    },
    {
      title: 'Ático de Lujo',
      description: 'Elegante ático con terraza privada',
      price: 3000000,
      bathroomCount: 3,
      parkingCount: 2,
      bedroomCount: 4,
    }
  ];

  previewList: House[] = [
    {
      title: 'Casa de Lujo en el Lago',
      description: 'Casa al lado de un lago',
      price: 1000000,
      bathroomCount: 1,
      parkingCount: 2,
      bedroomCount: 2,
    }, {
      title: 'Apartamento en el Centro',
      description: 'Moderno apartamento en el corazón de la ciudad',
      price: 1500000,
      bathroomCount: 2,
      parkingCount: 1,
      bedroomCount: 3,
    },
    {
      title: 'Villa en la Montaña',
      description: 'Espectacular villa con vistas a las montañas',
      price: 2500000,
      bathroomCount: 3,
      parkingCount: 3,
      bedroomCount: 4,
    }
  ]

}
