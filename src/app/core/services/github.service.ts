import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Issue } from '../store/models/issue.model';

export class ResponseObject {
  body:Issue[];
  headers:HttpHeaders
}

@Injectable()
export class GitHubService {

  // Change for https://api.github.com/repos/octocat/hello-world/issues
  private BASE_URL =  "https://api.github.com/repos"
  // private BASE_URL = "http://localhost:3000/issues";

  constructor(private http:HttpClient) {}

  getIssuesRepoOwner(owner:string, repo:string): Observable<Issue[]> {

    // return this.http.get<issue[]>(`${this.BASE_URL}/${owner}/${repo}/issues`);
    return this.http.get<Issue[]>(this.BASE_URL);
  }

  // https://github.com/valor-software/ng2-charts
  // getIssuesRepoUrl(repoUrl:string): Observable<Issue[]> {
    getIssuesRepoUrl(repoUrl:string): Observable<HttpResponse<any>> {
    const urlSplitted = repoUrl.split('/');
    const owner = urlSplitted[urlSplitted.length - 2];
    const repo = urlSplitted[urlSplitted.length - 1];

    // <https://api.github.com/repositories/41480724/issues?page=2>; rel="next", <https://api.github.com/repositories/41480724/issues?page=4>; rel="last"
    return this.http.get<any>(`${this.BASE_URL}/${owner}/${repo}/issues?per_page=5`, {observe: 'response'});
    // .subscribe(resp => {
    //   console.log(resp.headers.get('link'));
    //   console.log(resp.body)
    // });
    

    // return this.http.get<Issue[]>(`${this.BASE_URL}/${owner}/${repo}/issues`);
    // return this.http.get<Issue[]>(this.BASE_URL)
    //   .pipe(
    //     delay(500),
    //   );
  }
}