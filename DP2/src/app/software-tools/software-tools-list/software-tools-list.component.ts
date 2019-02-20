import { Component, OnInit } from '@angular/core';
import { SoftwareTileModel } from '../../models/software-tile.model';

@Component({
  selector: 'app-software-tools-list',
  templateUrl: './software-tools-list.component.html',
  styleUrls: ['./software-tools-list.component.css']
})
export class SoftwareToolsListComponent implements OnInit {

  softwareTools: SoftwareTileModel[] = [
    new SoftwareTileModel('Jazz DNG', 'assets/images/compliant.jpg', 'COMPLIANT', 'iFix11.5'),
    new SoftwareTileModel('Jazz DNG', 'assets/images/nonCompliant.jpg', 'COMPLIANT', 'iFix11.5'),
    new SoftwareTileModel('Jazz DNG', 'assets/images/backlog.jpg', 'COMPLIANT', 'iFix11.5'),
    new SoftwareTileModel('Jazz DNG', 'assets/images/notRequired.jpg', 'COMPLIANT', 'iFix11.5'),
    new SoftwareTileModel('Jazz DNG', 'assets/images/process.jpg', 'COMPLIANT', 'iFix11.5'),
    new SoftwareTileModel('Jazz DNG', 'assets/images/process.jpg', 'COMPLIANT', 'iFix11.5'),
    new SoftwareTileModel('Jazz DNG', 'assets/images/compliant.jpg', 'COMPLIANT', 'iFix11.5'),
    new SoftwareTileModel('Jazz DNG', 'assets/images/compliant.jpg', 'COMPLIANT', 'iFix11.5'),
    new SoftwareTileModel('Jazz DNG', 'assets/images/compliant.jpg', 'COMPLIANT', 'iFix11.5'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
