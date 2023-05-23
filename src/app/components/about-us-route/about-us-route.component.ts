import { Component } from '@angular/core';
import { ChangeHeaderService } from 'src/app/services/change-header.service';

@Component({
  selector: 'app-about-us-route',
  templateUrl: './about-us-route.component.html',
  styleUrls: ['./about-us-route.component.css']
})
export class AboutUsRouteComponent {
  constructor(public chService: ChangeHeaderService) {
    chService.setIsLanding(false);
  }
}
