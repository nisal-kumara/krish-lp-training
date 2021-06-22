import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import owners from '../owner-list/data/owners.json';
import { Owner } from '../owner-list/owners.model';
import { OwnerService } from '../services/owner.service';

@Component({
  selector: 'app-owner-update',
  templateUrl: './owner-update.component.html',
  styleUrls: ['./owner-update.component.scss']
})
export class OwnerUpdateComponent implements OnInit {

  owner: Owner = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: 0,
    refrenceNo: 0
  };

  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private ownerService: OwnerService) { }

  ngOnInit(): void {

    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.owner = this.ownerService.onGetOwner(this.id)!;
  }

  onSubmit(form: NgForm) {

    let owner: Owner = {
      id: this.id,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      mobile: form.value.mobile,
      refrenceNo: form.value.refrenceNo,
    }
    // console.log(owner);
    this.ownerService.onUpdate(owner);

    this.router.navigateByUrl('/owners');
  }
}
