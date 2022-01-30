import {Component, OnInit} from '@angular/core';
import {DataService} from "../_service/data.service";
import {PostModel} from "../_model/data.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  showComment = false;
  postDetail?: PostModel;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getPostDetail(id).subscribe(res => {
      this.postDetail = res;
    })
  }

  clicked() {
    this.showComment = !this.showComment;
  }

}
