import { Component, Input } from '@angular/core';
import { AboutEntry } from 'src/app/models/about-us-entry.model';

@Component({
  selector: 'app-about-us-entry',
  templateUrl: './about-us-entry.component.html',
  styleUrls: ['./about-us-entry.component.css']
})
export class AboutUsEntryComponent {
  @Input() entry: AboutEntry = {
    img: '',
    imgAlt: '',
    title: '',
    description: ''
  }
}
