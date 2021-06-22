import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from '../owner-list/owners.model';
import { OwnerService } from '../services/owner.service';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.scss']
})
export class OwnerCreateComponent implements OnInit {

  id: any;

  constructor(private route: ActivatedRoute, private ownerService: OwnerService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let owner: Owner = {
      id: "",
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      mobile: form.value.mobile,
      refrenceNo: form.value.refrenceNo,
    }

    this.ownerService.onAdd(owner);

    this.router.navigateByUrl('/owners');
  }

}
