import { Action } from '@ngrx/store';
import { Issue } from '../models/issue.model';

export enum IssueActionTypes {
  LOAD_ISSUE = '[ISSUE] Load Issue',
  LOAD_ISSUE_SUCCESS = '[ISSUE] Load Issue Success',
  LOAD_ISSUE_FAILURE = '[ISSUE] Load Issue Failure',
  LOAD_PAGES = '[ISSUE] Load Page'
}

export class LoadIssueAction implements Action {
  readonly type = IssueActionTypes.LOAD_ISSUE;
  
  constructor(public payload: string) {};
}

export class LoadIssueSuccessAction implements Action {
  readonly type = IssueActionTypes.LOAD_ISSUE_SUCCESS;

  constructor(public payload: Array<Issue>) {};
}

export class LoadIssueFailureAction implements Action {
  readonly type = IssueActionTypes.LOAD_ISSUE_FAILURE;

  constructor(public payload: Error) {};
}

export class LoadPages implements Action {
  readonly type = IssueActionTypes.LOAD_PAGES;

  constructor(public payload: number) {
    console.log(payload)
  };
}

export type IssueAction = LoadIssueAction | LoadIssueSuccessAction | LoadIssueFailureAction | LoadPages;