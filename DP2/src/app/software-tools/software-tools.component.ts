import { Component, OnInit } from '@angular/core';
import { SoftwareToolsListComponent} from './software-tools-list/software-tools-list.component';
import { SoftwareTileModel} from '../models/software-tile.model';
import { SoftwareToolVersionModel } from '../models/software-tool-version.model';

@Component({
  selector: 'app-software-tools',
  templateUrl: './software-tools.component.html',
  styleUrls: ['./software-tools.component.css']
})
export class SoftwareToolsComponent implements OnInit {
  selectedTool: SoftwareTileModel;
  constructor() { }

  ngOnInit() {
  }

}
