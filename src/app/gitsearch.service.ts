import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class GitsearchService {
  apiUrl = environment.apiUrl;
  private username: string;
  private repo: string;


  constructor(private http: HttpClient) {
    console.log("ready");
    this.username = "kennymaina";
    this.repo = '';
  }

  // getUser(): any {
  //   return this.http.get("https://api.github.com/users/" + this.username + "?access_token=b7e19011dae2fe6736b3454bb6f56637774ae721")
  //   .pipe(map(res =>res));
  // }

  getRepos(): any {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=b7e19011dae2fe6736b3454bb6f56637774ae721")
    .pipe(map(res => res));
  }
  updateUser(username:string){
    this.username = username;
  }

}