import { Component, OnInit } from '@angular/core';
import { Usato } from 'src/app/interfaces/usato';
import { UsedCarApiService } from 'src/app/services/used-car-api.service';

@Component({
  templateUrl: './usato.page.html',
  styleUrls: ['./usato.page.scss'],
})
export class UsatoPage implements OnInit {
  constructor(private usedCarApiService: UsedCarApiService) {}
  carList!: Usato[];
  carDetails?: Usato;
  searchText: string = '';

  ngOnInit(): void {
    this.usedCarApiService.getAllCar().subscribe(
      (data: Usato[]) => (this.carList = data),
      (error) => alert('Ops, qualcosa è andato storto, riprova più tardi')
    );
  }
  onDetails(item: Usato) {
    this.carDetails = item;
    console.log(this.carDetails);
  }
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }
  pay(prezzo: Usato) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MBb5SH7ocw78Ezlyf2imJT8xBmMBbMY7c8jVTRb1EBrtAPjkkPjbDxmlSl6dXyKTurtxsZLonH16N9MnGistTMP00Lf6vyuOy',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.

        alert("Pagamento eseguito con successo, grazie per l'acquisto");
      },
    });

    handler.open({
      name: 'Demo Site',
      description: 'Pagamento Stripe',
      amount: prezzo,
    });
  }
  deleteCar(id: number) {
    this.usedCarApiService.deleteCar(id).subscribe();
    this.carList?.splice(id, 1);
  }
}
