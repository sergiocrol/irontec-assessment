import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { AppState } from '../../../../core/store/models/app-state.model';
import { LoadIssueAction, LoadResetStore } from '../../../../core/store/actions/issue.actions';
import { Issue } from 'src/app/core/store/models/issue.model';

@Component({
  selector: 'app-issue-box',
  templateUrl: './issue-box.component.html'
})
export class IssueBoxComponent implements OnInit {
  @Input() currentPage: number;
  @Output() repoUrlEmitter:EventEmitter<string> = new EventEmitter<string>();

  issueItems$: Observable<Array<Issue>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>

  repoUrl:string;
  issues:Issue[];
  pageLimit = 8;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.currentPage = 1;
  }

  getPageIssues() {
    const ini = ((this.currentPage - 1) * this.pageLimit) || 0;
    const fin = ini + this.pageLimit;

    return {ini, fin};
  }

  getCurrentPage() {
    return this.issues.slice(this.getPageIssues().ini, this.getPageIssues().fin);
  }

  getIssues(repo) {
    this.store.dispatch(new LoadResetStore());
    this.repoUrlEmitter.emit(repo);
    this.store.dispatch(new LoadIssueAction(repo));

    this.issueItems$ = this.store.select(store => store.issues.list);
    this.loading$ = this.store.select(store => store.issues.loading);
    this.error$ = this.store.select(store => store.issues.error);

    this.issueItems$.subscribe(res => {
      this.issues = res;
    });

    this.repoUrl = '';
    this.currentPage = 1;
  }
}