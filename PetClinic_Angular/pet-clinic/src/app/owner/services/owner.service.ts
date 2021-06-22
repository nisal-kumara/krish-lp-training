import { Injectable } from '@angular/core';
import { Owner } from '../owner-list/owners.model';
import owners from '../owner-list/data/owners.json'

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  owners: Owner[] = owners;

  constructor() { }

  onGet() {
    return this.owners;
  }

  //for update user
  onGetOwner(id: string) {
    return this.owners.find(x => x.id === id)
  }

  onAdd(owner: Owner) {
    //Generating ID for new user
    owner.id = owners.length + 1;
    this.owners.push(owner);
    // console.log(owners.length)
  }

  onDelete(id: number) {
    let owner = this.owners.find(x => (Number)(x.id) === id)!; //non-null assertion operator
    let index = this.owners.indexOf(owner, 0);
    this.owners.splice(index, 1);
  }

  onUpdate(owner: Owner) {
    let oldowner = this.owners.find(x => x.id === owner.id)!;
    oldowner.firstName = owner.firstName;
    oldowner.lastName = owner.lastName;
    oldowner.email = owner.email;
    oldowner.mobile = owner.mobile;
    oldowner.refrenceNo = owner.refrenceNo;
  }
}
