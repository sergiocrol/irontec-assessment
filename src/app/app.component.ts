import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title:string = 'irontec-assessment';
  dark:boolean = false;

  // Change Header background color when scroll
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('.nav-bar');
    if (window.pageYOffset > element.clientHeight - 50) {
      element.classList.add('navbar-background');
    } else {
      element.classList.remove('navbar-background');
    }
  }

  poochie() {
    console.log('sagfva')
  }

  darkMode(isDark:boolean) {
    this.dark = isDark;
  }

  ngOnInit() {
    this.dark = localStorage.getItem('dark') == 'true';
  }

}
