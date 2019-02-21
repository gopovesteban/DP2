import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { SoftwareTileModel } from '../../models/software-tile.model';
import {SoftwareToolVersionModel} from '../../models/software-tool-version.model';


@Component({
  selector: 'app-software-tools-list',
  templateUrl: './software-tools-list.component.html',
  styleUrls: ['./software-tools-list.component.css']
})
export class SoftwareToolsListComponent implements OnInit {
  @Output() toolWasSelected = new EventEmitter<SoftwareTileModel>();
  softwareTools: SoftwareTileModel[] = [
    new SoftwareTileModel('Jazz DNG', 'assets/images/compliant.jpg', 'COMPLIANT', 'iFix11.5', [new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK'), new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK')]),
    new SoftwareTileModel('Jazz DNG', 'assets/images/nonCompliant.jpg', 'COMPLIANT', 'iFix11.5', [new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK'), new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK')]),
    new SoftwareTileModel('Jazz DNG', 'assets/images/backlog.jpg', 'COMPLIANT', 'iFix11.5', [new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK'), new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK')]),
    new SoftwareTileModel('Jazz DNG', 'assets/images/notRequired.jpg', 'COMPLIANT', 'iFix11.5', [new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK'), new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK')]),
    new SoftwareTileModel('Jazz DNG', 'assets/images/process.jpg', 'COMPLIANT', 'iFix11.5', [new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK'), new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK')]),
    new SoftwareTileModel('Jazz DNG', 'assets/images/process.jpg', 'COMPLIANT', 'iFix11.5', [new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK'), new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK')]),
    new SoftwareTileModel('Jazz DNG', 'assets/images/compliant.jpg', 'COMPLIANT', 'iFix11.5', [new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK'), new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK')]),
    new SoftwareTileModel('Jazz DNG', 'assets/images/compliant.jpg', 'COMPLIANT', 'iFix11.5', [new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK'), new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK')]),
    new SoftwareTileModel('Jazz DNG', 'assets/images/compliant.jpg', 'COMPLIANT', 'iFix11.5', [new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK'), new SoftwareToolVersionModel('Jazz DNG', 'COMPLIANT', 'iFix11.5', '12/12/12', 'LINK')])
  ];

  constructor() { }
  ngOnInit() {
  }
  onToolSelected(tool: SoftwareTileModel) {
    this.toolWasSelected.emit(tool);
  }

}
