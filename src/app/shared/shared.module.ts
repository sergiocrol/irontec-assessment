import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent, FooterComponent, MoonIconComponent, LogoIconComponent, LogoNameComponent } from './layout';

 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [ HeaderComponent, FooterComponent, MoonIconComponent, LogoIconComponent, LogoNameComponent ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    MoonIconComponent,
    LogoIconComponent,
    LogoNameComponent
  ]
})
export class SharedModule {
}