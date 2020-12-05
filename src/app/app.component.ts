import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title:string = 'irontec-assessment';
  // darkMode:boolean = false;
  dark:boolean = false;

  darkMode(isDark:boolean) {
    this.dark = isDark;
  }

  ngOnInit() {
    this.dark = localStorage.getItem('dark') == 'true';
  }

}
