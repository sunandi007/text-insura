import {Component, OnInit} from '@angular/core';
import {DataService} from "../_service/data.service";
import {PostModel} from "../_model/data.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  postList: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPostList().subscribe(res => {
      this.postList = res;
    })
  }

}
