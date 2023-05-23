import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeHeaderService {
  isLanding = true;

  setIsLanding(state: boolean) {
    this.isLanding = state;
  }

  getIsLanding() {
    return this.isLanding;
  }
}
