import { Component, Input, OnInit } from '@angular/core';
import { Visitor } from '../../interfaces/visit.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() visitors: Visitor[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
