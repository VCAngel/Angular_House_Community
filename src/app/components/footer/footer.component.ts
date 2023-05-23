import { Component } from '@angular/core';
import { ChangeHeaderService } from 'src/app/services/change-header.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public chService:ChangeHeaderService){}
}
