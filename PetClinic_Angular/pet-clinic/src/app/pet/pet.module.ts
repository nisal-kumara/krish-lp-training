import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PetRoutingModule } from './pet-routing.module';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetUpdateComponent } from './pet-update/pet-update.component';


@NgModule({
  declarations: [
    PetListComponent,
    PetCreateComponent,
    PetUpdateComponent
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'addpet', component: PetCreateComponent },
      { path: 'updatepet/:id', component: PetUpdateComponent },
    ]
    )
  ]
})
export class PetModule { }
