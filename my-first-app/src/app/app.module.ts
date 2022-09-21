import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { LotrComponent } from './lotr/lotr.component';

@NgModule({
  declarations: [AppComponent, ScrollToTopComponent, LotrComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
