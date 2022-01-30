import {Component, Input, OnInit} from '@angular/core';
import {CommentModel} from "../_model/data.model";
import {DataService} from "../_service/data.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input()
  postId: any;

  commentList?: CommentModel[];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPostCommentList(this.postId).subscribe(res => {
      this.commentList = res;
    })
  }

}
