import { Component } from '@angular/core';
import { LserviceService } from '../lservice.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private lservive : LserviceService ){this.fetchdata();}
   ngOnInit(): void {
   }

     bookdetails: any;
     fetchdata()
     {
          return this.lservive.getBooks().subscribe(
           (res) => {this.bookdetails=res;}

          );

     }

}
