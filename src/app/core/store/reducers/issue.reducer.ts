import { IssueAction, IssueActionTypes } from '../actions/issue.actions';
import { Issue } from '../models/issue.model';

export interface IssueState {
  list: Issue[],
  loading: boolean,
  error: Error,
  pages: number
}

const initialState: IssueState = {
  list: [],
  loading: false,
  error: undefined,
  pages: 0
}

export function IssueReducer(state: IssueState = initialState, action: IssueAction) {
  console.log(action.type)
  switch (action.type) {
    case IssueActionTypes.LOAD_ISSUE:
      console.log('load action')
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
      console.log('load page')
      return {
        ...state,
        pages: action.payload
      }
    default:
      return state;
  }
}