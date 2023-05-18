import { Component } from '@angular/core';
import { BlogArticle } from 'src/app/models/blog-article.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  articles: BlogArticle[] = [{
    title: 'Terraza en el techo de tu casa',
    author: 'VCAngel',
    date: new Date(2023, 1, 15),
    description: 'Consejos para construir una terraza en el techo de tu casa, con los mejores materiales y ahorrando dinero.',
    imgSearchParameters: {
      query: 'terrace',
      orientation: 'landscape'
    }
  },
  {
    title: 'Ideas para decorar tu jardín',
    author: 'GardenEnthusiast',
    date: new Date(2023, 3, 28),
    description: 'Descubre las mejores ideas y tendencias para decorar tu jardín de manera única y acogedora.',
    imgSearchParameters: {
      query: 'garden',
      orientation: 'landscape'
    }
  },
  {
    title: 'Cómo organizar una fiesta en casa',
    author: 'PartyPlanner',
    date: new Date(2023, 2, 10),
    description: 'Aprende los pasos clave para organizar una exitosa fiesta en casa, desde la planificación hasta los detalles finales.',
    imgSearchParameters: {
      query: 'house-party',
      orientation: 'landscape'
    }
  },
  {
    title: 'Consejos para mantener tu cocina ordenada',
    author: 'OrganizeMaster',
    date: new Date(2023, 4, 5),
    description: 'Descubre consejos prácticos y sencillos para mantener tu cocina ordenada y maximizar el espacio disponible.',
    imgSearchParameters: {
      query: 'kitchen',
      orientation: 'landscape'
    }
  }]
}
