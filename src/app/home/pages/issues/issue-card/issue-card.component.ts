import { Component, Input, OnInit } from '@angular/core';
import { Issue } from 'src/app/core';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html'
})
export class IssueCardComponent implements OnInit {
  @Input() issue: Issue;

  ngOnInit() {}
}