import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Issue } from '../store/models/issue.model';
import { Store } from '@ngrx/store';
import { AppState } from '..';

export class ResponseObject {
  body:Issue[];
  headers:HttpHeaders
}

@Injectable()
export class GitHubService implements OnInit {
  private BASE_URL =  "https://api.github.com/repos";
  private callPage:number;

  constructor(private http:HttpClient, private store: Store<AppState>) {}

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.store.select(store => store.issues.callPage).subscribe(res => {
      this.callPage = res;
    });
  }

  getIssuesRepoUrl(repoUrl:string): Observable<HttpResponse<any>> {
    const urlSplitted = repoUrl.split('/');
    const owner = urlSplitted[urlSplitted.length - 2];
    const repo = urlSplitted[urlSplitted.length - 1];
    const resultsPerPage = 80;

    this.getPage();

    return this.http.get<any>(`${this.BASE_URL}/${owner}/${repo}/issues?page=${this.callPage}&per_page=${resultsPerPage}`,
     {observe: 'response'});
  }
}