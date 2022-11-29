import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription, VirtualTimeScheduler } from 'rxjs';
import { creditcard } from 'src/app/models/creditcard';
import { creditcardSec } from 'src/app/models/creditCardUp';
import { ScardService } from 'src/app/services/scard.service';


@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit, OnDestroy {
  form: FormGroup;
  suscription!: Subscription;
  card!: creditcard;
  cardSec!: creditcardSec;
  idCard=0;


  constructor(private formBuilder: FormBuilder, private scardService: ScardService ,private toastr: ToastrService) {

    this.form= this.formBuilder.group({
      id:0,
      headline:['',[Validators.required]],
      cardNumber:['',[Validators.required]],
      expirationDay:['',[Validators.required]],
      cw:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.suscription= this.scardService.getCard().subscribe(data =>{
      console.log(data);
      this.card = data;
      this.form.patchValue({
        headline: this.card.headline,
        cardNumber: this.card.cardNumber,
        expirationDay: this.card.expirationDay,
        cw: this.card.cw
      });
    });
  }


  ngOnDestroy(){
    this.suscription.unsubscribe;
  }

  saveCard() {

    if (this.card.id === 0 || this.card.id===undefined ){
      this.addCard();
    }else{
      this.editCard();
    }
  }

  addCard(){
    const card: creditcard = {
      headline: this.form.get('headline')?.value,
      cardNumber: this.form.get('cardNumber')?.value,
      expirationDay: this.form.get('expirationDay')?.value,
      cw: this.form.get('cw')?.value

    };

    this.scardService.saveCard(card).subscribe(data =>{
      this.toastr.success('Save successful','Card Added')
      this.scardService.lookCard()
      this.form.reset();
     });
  }


  editCard(){
    const card: creditcard = {
      id:  this.card.id,
      headline: this.form.get('headline')?.value,
      cardNumber: this.form.get('cardNumber')?.value,
      expirationDay: this.form.get('expirationDay')?.value,
      cw: this.form.get('cw')?.value
    };
      this.scardService.updateCard(this.card.id,card).subscribe(data =>{
      this.toastr.info('Update successful','Card Updated')
      this.scardService.lookCard()
      this.form.reset();
      this.card.id=0;
    });
  }
}
