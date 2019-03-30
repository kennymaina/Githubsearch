import { Component, OnInit } from '@angular/core';
import { GitsearchService } from '../gitsearch.service'

@Component({
  selector: 'gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  user: any[];
  repos: any[];
  username: string;

  constructor(private gitsearchService: GitsearchService) {
    this.gitsearchService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this.gitsearchService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  findUser() {
    this.gitsearchService.updateUser(this.username);

    this.gitsearchService.getUser().subscribe(user => {
      
      this.user = user;
    });

    this.gitsearchService.getRepos().subscribe(repos => {
      
      this.repos = repos;
    });
  }

  ngOnInit() {
  }

}
