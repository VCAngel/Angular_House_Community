import { Component, Input, OnInit } from '@angular/core';
import { ImageParameters } from 'src/app/models/image-service.model';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
  imgSrc = '';
  @Input() imageParams: ImageParameters = {
    query: '',
    orientation: ''
  }

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getImageByQuery(this.imageParams)
      .subscribe(res => {
        this.imgSrc = res.urls.regular;
      });
  }
}
