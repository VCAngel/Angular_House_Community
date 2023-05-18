import { Component } from '@angular/core';
import { AboutEntry } from 'src/app/models/about-us-entry.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  aboutEntries: AboutEntry[] = [{
    img: './assets/svg/icono1.svg',
    imgAlt: 'Icono Seguridad',
    title: 'Seguridad',
    description: 'Lorspan ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quaerat soluta architecto neque rerum voluptate nobis placeat, beatae sunt asperiores doloribus dolor ipsum enim fuga porro repellendus ducimus iste debitis!'
  },
  {
    img: './assets/svg/icono2.svg',
    imgAlt: 'Icono Mejor Precio',
    title: 'El Mejor Precio',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequatur nulla modi enim, repudiandae sapiente maxime officia, id dignissimos quis libero adipisci? Nisi, aut aspernatur distinctio fugiat nesciunt ullam vel.'
  },
  {
    img: './assets/svg/icono3.svg',
    imgAlt: 'Icono A Tiempo',
    title: 'A Tiempo',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam, sapiente totam quasi officia tenetur itaque inventore eaque vero nemo assumenda, optio quisquam velit vel esse eius? A, eaque molestias?'
  }]
}
