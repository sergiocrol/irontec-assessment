import { Component, EventEmitter, OnInit, Output } from '@angular/core';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() darkMode:EventEmitter<boolean> = new EventEmitter<boolean>();

  toggled: boolean = false;

  ngOnInit() {
    if (localStorage.getItem('dark')) {
      this.toggled = localStorage.getItem('dark') == 'true';
    }
  }

  toggle() {
    this.toggled = !this.toggled;

    localStorage.setItem('dark', this.toggled.toString());
    this.darkMode.emit(this.toggled);
  }
}