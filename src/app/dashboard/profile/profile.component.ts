import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../login/_model/auth.model";
import {DataService} from "../_service/data.service";
import {AuthService} from "../../login/_service/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile?: UserModel;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    const id = AuthService.getUserID();
    this.dataService.getUserDetail(id).subscribe(res => {
      this.profile = res;
    })
  }

}
