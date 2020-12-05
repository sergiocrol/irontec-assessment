import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { AppState } from '../../../../core/store/models/app-state.model';
import { LoadIssueAction } from '../../../../core/store/actions/issue.actions';
import { Issue } from 'src/app/core/store/models/issue.model';

@Component({
  selector: 'app-issue-box',
  templateUrl: './issue-box.component.html'
})
export class IssueBoxComponent implements OnInit {
  issueItems$: Observable<Array<Issue>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>

  repoUrl:string;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
  }

  getIssues(repo) {
    this.store.dispatch(new LoadIssueAction(repo));

    this.issueItems$ = this.store.select(store => store.issues.list);
    this.loading$ = this.store.select(store => store.issues.loading);
    this.error$ = this.store.select(store => store.issues.error);
  }
}