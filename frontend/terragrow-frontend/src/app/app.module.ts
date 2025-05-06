import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ParcelleFormComponent } from './components/parcelle-form/parcelle-form.component';
import { ParcelleListComponent } from './components/parcelle-list/parcelle-list.component';
import { BandeListComponent } from './components/bande-list/bande-list.component';

const routes: Routes = [
  { path: '', component: ParcelleListComponent },
  { path: 'parcelles/:id/bandes', component: BandeListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ParcelleFormComponent,
    ParcelleListComponent,
    BandeListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}