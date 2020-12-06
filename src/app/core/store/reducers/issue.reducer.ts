import { IssueAction, IssueActionTypes } from '../actions/issue.actions';
import { Issue } from '../models/issue.model';

export interface IssueState {
  list: Issue[],
  loading: boolean,
  error: Error,
  pages: number,
  callPage: number
}

const initialState: IssueState = {
  list: [],
  loading: false,
  error: undefined,
  pages: 0,
  callPage: 1
}

export function IssueReducer(state: IssueState = initialState, action: IssueAction) {
  switch (action.type) {
    case IssueActionTypes.LOAD_ISSUE:
      return {
        ...state,
        loading: true
      }
    case IssueActionTypes.LOAD_ISSUE_SUCCESS: 
      return {
        ...state,
        list: action.payload,
        loading: false
      }
    case IssueActionTypes.LOAD_ISSUE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case IssueActionTypes.LOAD_PAGES:
      return {
        ...state,
        pages: action.payload
      }
    case IssueActionTypes.LOAD_CALL_PAGE:
      return {
        ...state,
        callPage: action.payload
      }
    case IssueActionTypes.LOAD_RESET_STORE:
      return Object.assign({}, initialState);
    default:
      return state;
  }
}