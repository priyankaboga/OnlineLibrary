import { Component } from '@angular/core';
import { LserviceService } from '../lservice.service';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  constructor(private Lservice : LserviceService) { }

  ngOnInit(): void {
  }
     insertdetails(insertform: { value: any; })
     {
         this.Lservice.insertbook(insertform.value).subscribe();
     }
}


