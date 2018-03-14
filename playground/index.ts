/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ConcretePluginModule }  from '../dist';

@Component({
  selector: 'app-root',
  template: `<p>Hello World!</p>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, ConcretePluginModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
