import { Action } from '@ngrx/store';
import { Issue } from '../models/issue.model';

export enum IssueActionTypes {
  LOAD_ISSUE = '[ISSUE] Load Issue',
  LOAD_ISSUE_SUCCESS = '[ISSUE] Load Issue Success',
  LOAD_ISSUE_FAILURE = '[ISSUE] Load Issue Failure',
  LOAD_PAGES = '[ISSUE] Load Page',
  LOAD_CALL_PAGE = '[ISSUE] Load Call Page',
  LOAD_RESET_STORE = '[ISSUE] Load Reset Store'
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

  constructor(public payload: number) {};
}

export class LoadCallPage implements Action {
  readonly type = IssueActionTypes.LOAD_CALL_PAGE;

  constructor(public payload: number) {}
}

export class LoadResetStore implements Action {
  readonly type = IssueActionTypes.LOAD_RESET_STORE;
}

export type IssueAction = LoadIssueAction 
                        | LoadIssueSuccessAction 
                        | LoadIssueFailureAction 
                        | LoadPages 
                        | LoadCallPage 
                        | LoadResetStore;