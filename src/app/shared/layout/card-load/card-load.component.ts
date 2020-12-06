import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StorageService } from 'src/app/core';

@Component({
  selector: '<app-card-loading>',
  templateUrl: './card-load.component.html',
  styleUrls: ['./card-load.component.scss']
})
export class CardLoadingComponent implements OnInit, OnChanges {
  toggled: boolean = false;

  constructor(private storageService: StorageService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.toggled = localStorage.getItem('dark') == 'true';
  }

  ngOnInit() {
    if (localStorage.getItem('dark')) {
      this.toggled = localStorage.getItem('dark') == 'true';
    }

    // Detect changes in localStorage
    this.storageService.watchStorage().subscribe((data:string) => {
      this.toggled = localStorage.getItem('dark') == 'true';
    })
  }
}