import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiements',
  templateUrl: './experiements.component.html',
  styleUrls: ['./experiements.component.css']
})
export class ExperiementsComponent implements OnInit {

  experiments : string[] = [ "Mars soil sample", "Plant growth in habitat", "Human bone density"]

  constructor() { }

  ngOnInit() {
  }

}
