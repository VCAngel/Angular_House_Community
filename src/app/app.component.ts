import { Component } from '@angular/core';
import { ChangeHeaderService } from './services/change-header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLanding = true;

  constructor(public chService: ChangeHeaderService) { }

  setIsLanding(state: boolean) {
    this.isLanding = state;
  }
}
