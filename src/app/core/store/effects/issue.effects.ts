import { LiteralPiece } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { GitHubService } from '../../services/github.service';
import { LoadIssueAction, LoadIssueSuccessAction, LoadIssueFailureAction, LoadPages ,IssueActionTypes } from '../actions/issue.actions';

@Injectable()
export class IssueEffects {

  // @Effect() loadPages$ = this.actions$
  //   .pipe(
  //     ofType<LoadIssueAction>(IssueActionTypes.LOAD_ISSUE),
  //     mergeMap(
  //       (url) => this.issueService.getIssuesRepoUrl(url.payload)
  //         .pipe(
  //           map(res => new LoadPages(this.getPages(res)))
  //         )
  //     )
  //   )

  @Effect() loadIssue$ = this.actions$
    .pipe(
      ofType<LoadIssueAction>(IssueActionTypes.LOAD_ISSUE),
      mergeMap(
        (url) => this.issueService.getIssuesRepoUrl(url.payload)
          .pipe(
            switchMap(res => [
              new LoadPages(this.getPages(res)),
              new LoadIssueSuccessAction(res.body)
            ]),
            // map(res => {console.log('paso por aquí'); new LoadPages(this.getPages(res)); return res}),
            // map(res => res.body),
            // map(data => new LoadIssueSuccessAction(data)),
            catchError(error => of(new LoadIssueFailureAction(error)))
          )
      )
    )

  getPages(header):number {
    const link = header.headers.get('link');
    if(!link) return 0;

    const formattedLink = link.match(/&page=/g);
    const res = formattedLink.length < 1 ? 1 : link.charAt(link.lastIndexOf('page=') + 5);
    return res*1;
  }

  constructor(private actions$: Actions, private issueService: GitHubService)  {}
}