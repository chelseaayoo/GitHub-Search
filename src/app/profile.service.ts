import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username!: string;
  private clientid = 'b432ed6627b1c50bcf93';
  private clientsecret = 'c72c7a4a83e003bc86dd42d6823b75f7ba04bc06'

  constructor(private http: HttpClient) { 
    alert ('service is ready');
    this.username = 'chelseaayoo';
  } 
  getProfileInformation(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" +this.clientid + "&client_secret=" +this.clientsecret )
    // .pipe(map(response =>console.log(response)
    // ))
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" +this.clientid + "&client_secret=" +this.clientsecret )

  }  
}
