import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DesignToolsComponent } from './design-tools/design-tools.component';
import { SoftwareToolsComponent } from './software-tools/software-tools.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'software';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
