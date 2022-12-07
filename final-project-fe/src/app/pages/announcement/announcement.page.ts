import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Announcement } from 'src/app/interfaces/announcement';
import { AnnouncementService } from 'src/app/services/announcementSrv';

@Component({
  templateUrl: './announcement.page.html',
  styleUrls: ['./announcement.page.scss'],
})
export class AnnouncementPage implements OnInit {
  constructor(
    private announcementSrv: AnnouncementService,
    public authService: AuthService
  ) {}
  announcements?: Announcement[];
  carDetails?: Announcement;
  searchText: string = '';
  isAlert = false;
  handler: any = null;

  ngOnInit(): void {
    this.announcementSrv.getAnnouncement().subscribe((data) => {
      this.announcementSrv.announcements = data;
      this.announcements = data;
    });
  }
  onDetails(item: Announcement) {
    this.carDetails = item;
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }
  pay(prezzo: Announcement) {
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
  deleteAnnouncement(id: number) {
    this.announcementSrv.deleteAnnouncement(id).subscribe();
    this.announcements?.splice(id, 1);
    this.announcementSrv.getAnnouncement().subscribe((data) => {
      this.announcementSrv.announcements = data;
    });
  }

  // loadStripe() {
  //   if (!window.document.getElementById('stripe-script')) {
  //     var s = window.document.createElement('script');
  //     s.id = 'stripe-script';
  //     s.type = 'text/javascript';
  //     s.src = 'https://checkout.stripe.com/checkout.js';
  //     s.onload = () => {
  //       this.handler = (<any>window).StripeCheckout.configure({
  //         key: 'pk_test_51MBb5SH7ocw78Ezlyf2imJT8xBmMBbMY7c8jVTRb1EBrtAPjkkPjbDxmlSl6dXyKTurtxsZLonH16N9MnGistTMP00Lf6vyuOy',
  //         locale: 'auto',
  //         token: function (token: any) {
  //           // You can access the token ID with `token.id`.
  //           // Get the token ID to your server-side code for use.

  //           alert('Payment Success!!');
  //         },
  //       });
  //     };

  //     window.document.body.appendChild(s);
  //   }
  // }
}
