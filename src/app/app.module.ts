import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { MapComponent } from './components/map/map.component';
import { EditMapComponent } from './components/map/edit-map.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  entryComponents: [
    EditMapComponent
  ],
  declarations: [
    AppComponent,
    MapComponent,
    EditMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
