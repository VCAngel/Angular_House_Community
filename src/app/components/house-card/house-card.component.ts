import { Component, Input } from '@angular/core';
import { House } from 'src/app/models/house-card.model';
import { ImageParameters } from 'src/app/models/image-service.model';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.css']
})
export class HouseCardComponent  {
  @Input() house: House = {
    title: '',
    description: '',
    price: 0,
    bathroomCount: 0,
    parkingCount: 0,
    bedroomCount: 0
  }

  imgSearchParameters: ImageParameters = {
    query: 'house-exterior',
    orientation: 'squarish'
  }
}
