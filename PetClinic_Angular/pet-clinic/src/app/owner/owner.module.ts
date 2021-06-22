import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { LkrFormatterPipe } from '../shared/lkr-formatter.pipe';
import { OwnerUpdateComponent } from './owner-update/owner-update.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';


@NgModule({
  declarations: [
    OwnerListComponent,
    LkrFormatterPipe,
    OwnerUpdateComponent,
    OwnerCreateComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'addowner', component: OwnerCreateComponent },
      { path: 'updateowner/:id', component: OwnerUpdateComponent },
    ]
    )
  ]
})
export class OwnerModule { }
