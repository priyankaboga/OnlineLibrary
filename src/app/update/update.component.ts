import { Component } from '@angular/core';
import { LserviceService } from '../lservice.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(private lservice : LserviceService) { }

ngOnInit(): void {
}

 public updatebook(updateform: any)
 {

  this.lservice.updatedetails(updateform.value).subscribe();
 }


}
