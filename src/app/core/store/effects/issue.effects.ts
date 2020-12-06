import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';

import { GitHubService } from '../../services/github.service';
import { AppState, Issue } from '../models';
import { 
  LoadIssueAction, 
  LoadIssueSuccessAction, 
  LoadIssueFailureAction, 
  LoadPages,  
  IssueActionTypes 
} from '../actions/issue.actions';

@Injectable()
export class IssueEffects {

  @Effect() loadIssue$ = this.actions$
    .pipe(
      ofType<LoadIssueAction>(IssueActionTypes.LOAD_ISSUE),
      mergeMap(
        (url) => this.issueService.getIssuesRepoUrl(url.payload)
          .pipe(
            switchMap(res => [
              new LoadPages(this.getPages(res)),
              new LoadIssueSuccessAction(this.getBody(res.body))
            ]),
            catchError(error => of(new LoadIssueFailureAction(error)))
          )
      )
    )

  getBody(body):Issue[] {
    let bodyResponse = body;
    this.store.select(store => store.issues.callPage).subscribe(callPage => {
      if(callPage === 1) {
        return bodyResponse;
      }

      this.store.select(store => store.issues.list).subscribe(list => {
        bodyResponse = [...list, ...body];
        return bodyResponse;
      })
    })
    return bodyResponse;
  }

  getPages(header):number {
    let pages = 0;
    this.store.select(store => store.issues.pages).subscribe(res => {
      if (res !== 0) {
        pages = res;
        return pages;
      }

      const link = header.headers.get('link');
      if(!link) return 0;
  
      const formattedLink = link.match(/\?page=/g);
      const response = formattedLink.length < 1 ? 1 : link.charAt(link.lastIndexOf('?page=') + 6);
      pages = response*1;
    });
    return pages;
  }

  constructor(private actions$: Actions, private issueService: GitHubService, private store: Store<AppState>)  {}
}