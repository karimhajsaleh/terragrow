import { Component } from '@angular/core';
import { ParcelleService } from '../../services/parcelle.service';

@Component({
  selector: 'app-parcelle-form',
  templateUrl: './parcelle-form.component.html',
})
export class ParcelleFormComponent {

  // Objet pour stocker les données du formulaire
  parcelle = { nom: '', longueur: null, largeur: null };

  constructor(private parcelleService: ParcelleService) {}

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    if (this.parcelle.nom && this.parcelle.longueur && this.parcelle.largeur) {
      this.parcelleService.createParcelle(this.parcelle).subscribe(() => {
        this.parcelle = { nom: '', longueur: null, largeur: null };
        window.location.reload();
      });
    }
  }
}