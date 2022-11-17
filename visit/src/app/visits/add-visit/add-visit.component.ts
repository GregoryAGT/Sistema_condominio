import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-visit',
  templateUrl: './add-visit.component.html',
  styleUrls: ['./add-visit.component.css']
})
export class AddVisitComponent implements OnInit {

  public addVisit: FormGroup;
  public currentDate: Date = new Date();

  constructor( 
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
   ) { 
      this.addVisit = this.formBuilder.group({
        fullName: new FormControl('', Validators.required),
        dpto: new FormControl('', Validators.required),
        date: Date.now()    
      })
    }
  

  ngOnInit(): void {
  }

  save() {
    this.activeModal.dismiss(this.addVisit.value);
  } 

}
