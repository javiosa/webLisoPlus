import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {NgwWowService} from 'ngx-wow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private wowSubscription: Subscription;

  constructor(private router: Router, private wowService: NgwWowService){
    // this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
    //   // Reload WoW animations when done navigating to page,
    //   // but you are free to call it whenever/wherever you like
    //   this.wowService.init();
    // });

  }

  ngOnInit(): void {
    // you can subscribe to WOW observable to react when an element is revealed
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item: HTMLElement) => {
        // do whatever you want with revealed element
      });
  }

  ngOnDestroy(): void {
    // unsubscribe (if necessary) to WOW observable to prevent memory leaks
    this.wowSubscription.unsubscribe();
  }

}
