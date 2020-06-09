import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  pageInfo: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.showPages();
  }

  showPages() {
    this.userService.getPages().subscribe(res => {
      this.pageInfo = res;
    });
  }

}
