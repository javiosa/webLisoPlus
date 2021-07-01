import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isHome = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event =>
    {
      if (event instanceof NavigationStart) {
        this.isHome = (event.url === '/');
      }
    });
    // this.socketService.sendMessage('app component')
  }
}
