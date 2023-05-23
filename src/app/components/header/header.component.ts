import { Component, Input } from '@angular/core';
import { ChangeHeaderService } from 'src/app/services/change-header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logo = './assets/svg/logo.svg';
  @Input() isLanding = false;

  constructor(public chService: ChangeHeaderService){}

}
