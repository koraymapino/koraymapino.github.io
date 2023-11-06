import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
  showButton: boolean = false;

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 100 ? true : false;
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
}