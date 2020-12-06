import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
})
export class IssueListComponent {
  currentPage: number;
  repoUrl: string;

  currentPageEmitter(num: number) {
    this.currentPage = num;
  }

  repoUrlEmitter(url: string) {
    this.repoUrl = url;
  }
}