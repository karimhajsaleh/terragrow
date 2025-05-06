import { Component, OnInit } from '@angular/core';
import { ParcelleService } from '../../services/parcelle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parcelle-list',
  templateUrl: './parcelle-list.component.html',
})
export class ParcelleListComponent implements OnInit {
  parcelles: any[] = [];
  displayedColumns: string[] = ['nom', 'longueur', 'largeur', 'bandeCount'];

  constructor(private parcelleService: ParcelleService, private router: Router) {}

  ngOnInit() {
    this.parcelleService.getParcelles().subscribe((data) => {
      this.parcelles = data;
    });
  }

  viewBandes(parcelleId: number) {
    this.router.navigate([`/parcelles/${parcelleId}/bandes`]);
  }
}