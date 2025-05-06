import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParcelleService } from '../../services/parcelle.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-bande-list',
  templateUrl: './bande-list.component.html',
})
export class BandeListComponent implements OnInit {
  bandes: any[] = []; // Liste des bandes
  parcelleId: number; // ID de la parcelle

  constructor(private parcelleService: ParcelleService, private route: ActivatedRoute, private router: Router ) {
    this.parcelleId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.parcelleService.getBandes(this.parcelleId).subscribe((data) => {
      this.bandes = data;
    });
  }
  // Méthode pour retourner à la liste des parcelles
  goBackToParcelleList() {
    this.router.navigate(['']);
  }
}