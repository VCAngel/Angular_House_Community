import { Component } from '@angular/core';
import { ChangeHeaderService } from 'src/app/services/change-header.service';

@Component({
  selector: 'app-contact-route',
  templateUrl: './contact-route.component.html',
  styleUrls: ['./contact-route.component.css']
})
export class ContactRouteComponent {
  constructor(public chService: ChangeHeaderService){
    chService.setIsLanding(false);
  }
}
