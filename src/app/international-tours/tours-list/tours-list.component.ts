import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.css']
})
export class ToursListComponent implements OnInit {

  title = 'Tours List';

  constructor() { }

  ngOnInit(): void {
  }

}
