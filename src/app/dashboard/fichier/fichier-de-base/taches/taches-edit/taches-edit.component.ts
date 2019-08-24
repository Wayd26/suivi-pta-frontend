import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taches-edit',
  templateUrl: './taches-edit.component.html',
  styleUrls: ['./taches-edit.component.css']
})
export class TachesEditComponent implements OnInit {

  message: string;

  constructor() { }

  ngOnInit() {
    this.message="";
  }

}
