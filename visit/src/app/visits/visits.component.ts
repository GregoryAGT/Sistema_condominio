import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Visitor } from '../interfaces/visit.interface';
import { AddVisitComponent } from './add-visit/add-visit.component';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {

  
  public visitors: Visitor[] = [];
  constructor(private modalService: NgbModal) { }

  open() {
    this
      .modalService
      .open(AddVisitComponent)
      .dismissed
      .subscribe(visitor => {
        this.visitors = [
          ...this.visitors,
          visitor,
        ];
      });
  }

  ngOnInit(): void {
  }

}
