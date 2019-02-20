import {Component, Input, OnInit} from '@angular/core';
import { SoftwareTileModel} from '../../models/software-tile.model';

@Component({
  selector: 'app-software-tools-item',
  templateUrl: './software-tools-item.component.html',
  styleUrls: ['./software-tools-item.component.css']
})
export class SoftwareToolsItemComponent implements OnInit {
  @Input() softwareTile = SoftwareTileModel;

  constructor() { }

  ngOnInit() {
  }

}
