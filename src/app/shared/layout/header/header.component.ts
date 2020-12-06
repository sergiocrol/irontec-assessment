import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StorageService } from 'src/app/core';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() darkMode:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private storageService: StorageService  ){}

  toggled: boolean = false;

  ngOnInit() {
    if (localStorage.getItem('dark')) {
      this.toggled = localStorage.getItem('dark') == 'true';
    }
  }

  toggle() {
    this.toggled = !this.toggled;

    this.storageService.setItem('dark', this.toggled.toString());
    this.darkMode.emit(this.toggled);
  }
}