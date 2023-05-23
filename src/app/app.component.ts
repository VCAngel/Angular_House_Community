import { Component } from '@angular/core';
import { ChangeHeaderService } from './services/change-header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isLanding = false;

  constructor(public chService: ChangeHeaderService) { }

  setIsLanding(state: boolean) {
    this.isLanding = state;
  }

  getIsLanding(){
    return this.isLanding;
  }
}
