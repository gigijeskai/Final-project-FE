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
    this.announcementSrv.getAnnouncement().subscribe(
      (data) => {
        this.announcementSrv.announcements = data;
        this.announcements = data;
      },
      (error) => alert('  ERROR:503 Service Unavailable')
    );
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
    this.announcementSrv.getAnnouncement().subscribe((data) => {
      this.announcementSrv.announcements = data;
    });
    this.announcementSrv.deleteAnnouncement(id).subscribe();
    this.announcementSrv.getAnnouncement().subscribe((data) => {
      this.announcementSrv.announcements = data;
      this.announcements = data;
    });
  }
}
