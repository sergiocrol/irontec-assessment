import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AppState, Issue, LoadCallPage, LoadIssueAction } from '../../../../core';

@Component({
  selector: 'app-issue-pagination',
  templateUrl: './issue-pagination.component.html',
  styleUrls: ['./issue-pagination.component.scss']
})
export class IssuePaginationComponent implements OnInit, OnChanges {
  @Input() repoUrl: string;
  @Output() currentPageEmitter:EventEmitter<number> = new EventEmitter<number>();

  currentPage:number = 1;
  currentRequest:number = 0;
  pages:number;
  issues:number;
  pagesPerIteration:number;
  totalPages:number[];
  pagesLimit = 8;

  constructor(private store: Store<AppState>) {};

  ngOnChanges(changes: SimpleChanges) {
    if(changes.repoUrl) {
      this.currentPage = 1;
    }
  }


  ngOnInit() {
    console.log(this.currentPage, this.currentRequest, this.pages, this.totalPages)
    this.currentPage = 1;
    this.store.select(store => store.issues.list).subscribe(res => {
      this.issues = res.length; 
      this.store.select(store => store.issues.pages).subscribe(res => {
        this.pages = res;
        this.pagesPerIteration = Math.ceil(this.issues / 8);
        this.totalPages = this.toArray(this.pagesPerIteration);
      });
    });
  }

  selectCurrentPage(num: number) {
    this.currentPage = num;
    this.currentPageEmitter.emit(this.currentPage);

    // make another request if necessary
    if(this.currentPage > 10) {
      const currentRequest = Math.floor(this.currentPage/10)+1;
      if(currentRequest > this.currentRequest) {
        this.currentRequest = currentRequest;
        // save currentRequest on store
        this.store.dispatch(new LoadCallPage(this.currentRequest));
        // dispatch 
        this.store.dispatch(new LoadIssueAction(this.repoUrl));
      }
    }
  }

  toArray(num:number):number[] {
    return [...Array(num).keys()];
  }

  isFinalPage():boolean {
    return this.currentRequest === this.pages && Math.ceil(this.issues/this.pagesLimit) === this.currentPage;
  }

};