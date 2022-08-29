import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VirtualTimeScheduler } from 'rxjs';
import { creditcard } from 'src/app/models/creditcard';
import { ScardService } from 'src/app/services/scard.service';
@Component({
  selector: 'app-list-creditcard',
  templateUrl: './list-creditcard.component.html',
  styleUrls: ['./list-creditcard.component.css']
})

export class ListCreditcardComponent implements OnInit {

  constructor(public scardService: ScardService,
              public toastr: ToastrService) { }

  ngOnInit(): void {
    this.scardService.lookCard()
  }
  deleteCard(id: number=0){
    if (confirm("Are you sure to Delete this record?"))
    {
        this.scardService.deleteCard(id).subscribe(data => {
        this.toastr.warning("Record Deleted","Amazing Program by Dayner");
        this.scardService.lookCard();
      });
    }
  }
  updateCard(card: creditcard){
    this.scardService.objectCard(card);
  }
}
