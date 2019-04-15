import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosMudule } from './photos/photos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PhotosMudule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
