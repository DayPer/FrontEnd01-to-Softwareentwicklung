import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientJsonpModule}from '@angular/common/http';
import {HttpClientModule}from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componemts/footer/footer.component';
import { CardsComponent } from './componemts/cards/cards.component';
import { CreditcardComponent } from './componemts/cards/creditcard/creditcard.component';
import { ListCreditcardComponent } from './componemts/cards/list-creditcard/list-creditcard.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CardsComponent,
    CreditcardComponent,
    ListCreditcardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
