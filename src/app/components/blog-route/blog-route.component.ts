import { Component } from '@angular/core';
import { ChangeHeaderService } from 'src/app/services/change-header.service';

@Component({
  selector: 'app-blog-route',
  templateUrl: './blog-route.component.html',
  styleUrls: ['./blog-route.component.css']
})
export class BlogRouteComponent {
  constructor(public chService: ChangeHeaderService){
    chService.setIsLanding(false);
  }
}
