import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from '../services/owner.service';

//watch here -> video 01 -> 26:30
import owners from "./data/owners.json"
import { Owner } from './owners.model';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  title: string = 'Owner List'
  owners: Owner[] = owners;
  filteredOwners: Owner[] = owners;
  showIcon: boolean = false;
  message: string = '';
  private _nameFilter: string = ''
  previousNum: number = 0;

  constructor(private router: Router, private ownerService: OwnerService) { }

  ngOnInit(): void {
  }

  set nameFilter(value: string) {
    this._nameFilter = value;
    this.filterByName()
  }

  get nameFilter(): string {
    return this._nameFilter;
  }

  filterByName() {
    this.filteredOwners = this.owners.filter(owner => owner.firstName.includes(this.nameFilter))
  }

  addOwner() {
    this.router.navigate(['addowner'])
  }

  updateOwner(value: string) {
    this.router.navigate(['updateowner', value])
    // console.log(value)
  }

  deleteOwner(id: string) {
    this.ownerService.onDelete(+id);
    // console.log(id);
  }

}
