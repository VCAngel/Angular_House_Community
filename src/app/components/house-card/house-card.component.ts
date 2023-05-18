import { Component, Input, OnInit } from '@angular/core';
import { House } from 'src/app/models/house-card.model';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.css']
})
export class HouseCardComponent implements OnInit {
  imgSrc = '';

  @Input() house: House = {
      title: '',
      description: '',
      price: 0,
      bathroomCount: 0,
      parkingCount: 0,
      bedroomCount: 0
  }

  ngOnInit(): void {
    console.log(this.house);

  }
}
