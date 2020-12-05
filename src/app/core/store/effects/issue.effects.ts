import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { GitHubService } from '../../services/github.service';
import { LoadIssueAction, LoadIssueSuccessAction, LoadIssueFailureAction, IssueActionTypes } from '../actions/issue.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state.model';

@Injectable()
export class IssueEffects {

  @Effect() loadIssue$ = this.actions$
    .pipe(
      ofType<LoadIssueAction>(IssueActionTypes.LOAD_ISSUE),
      mergeMap(
        (url) => this.issueService.getIssuesRepoUrl(url.payload)
          .pipe(
            map(data => new LoadIssueSuccessAction(data)),
            catchError(error => of(new LoadIssueFailureAction(error)))
          )
      )
    )

  constructor(private actions$: Actions, private issueService: GitHubService, private store: Store<AppState>)  {}
}