import { Component, Input, OnInit } from '@angular/core';
import { House } from 'src/app/models/house-card.model';
import { ImageService } from 'src/app/services/image.service';

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

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getImageByQuery('house-exterior')
      .subscribe(res => {
        this.imgSrc = res.urls.regular;
      });
  }
}
