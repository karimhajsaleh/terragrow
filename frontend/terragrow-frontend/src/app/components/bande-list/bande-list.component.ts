import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParcelleService } from '../../services/parcelle.service';

@Component({
  selector: 'app-bande-list',
  templateUrl: './bande-list.component.html',
})
export class BandeListComponent implements OnInit {
  bandes: any[] = [];
  parcelleId: number;

  constructor(private parcelleService: ParcelleService, private route: ActivatedRoute) {
    this.parcelleId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.parcelleService.getBandes(this.parcelleId).subscribe((data) => {
      this.bandes = data;
    });
  }
}