import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SoftwareToolsComponent } from './software-tools/software-tools.component';
import { DesignToolsComponent } from './design-tools/design-tools.component';
import { SoftwareToolsListComponent } from './software-tools/software-tools-list/software-tools-list.component';
import { SoftwareToolsItemComponent } from './software-tools/software-tools-item/software-tools-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SoftwareToolsComponent,
    DesignToolsComponent,
    SoftwareToolsListComponent,
    SoftwareToolsItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
