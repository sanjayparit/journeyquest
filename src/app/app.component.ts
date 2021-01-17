import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travel';
  constructor(public router: Router){}
}
