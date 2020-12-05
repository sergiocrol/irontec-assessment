import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { GitHubService } from './services/github.service';
import { IssueReducer } from './store/reducers/issue.reducer';
import { IssueEffects } from './store/effects/issue.effects';
 
@NgModule({
  imports: [
    StoreModule.forFeature('issues', IssueReducer),
    EffectsModule.forFeature([IssueEffects]),
    HttpClientModule
  ],
  providers: [
    GitHubService
  ],
  declarations: []
})
export class CoreModule { 
 
  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("You should import core module only in the root module")
    }
  }
}