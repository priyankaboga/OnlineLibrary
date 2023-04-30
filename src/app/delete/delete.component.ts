import { Component } from '@angular/core';
import { LserviceService } from '../lservice.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor(private lservice : LserviceService) { }

  ngOnInit(): void {
  }
   public deletebook(deleteform: { value: number; })
   {
      this.lservice.deletedetails(deleteform.value).subscribe();
   }

}
