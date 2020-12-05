import { Action } from '@ngrx/store';
import { Issue } from '../models/issue.model';

export enum IssueActionTypes {
  LOAD_ISSUE = '[ISSUE] Load Issue',
  LOAD_ISSUE_SUCCESS = '[ISSUE] Load Issue Success',
  LOAD_ISSUE_FAILURE = '[ISSUE] Load Issue Failure'
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

export type IssueAction = LoadIssueAction | LoadIssueSuccessAction | LoadIssueFailureAction;