import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile :any ;
  repos :any;
  username! :string;
  constructor(private profileService : ProfileService, private http: HttpClient){
    this.profileService.getProfileInformation().subscribe(profile =>{
      console.log(profile)
      this.profile = profile
    });
    this.profileService.getProfileRepos().subscribe(repos=>{
      console.log(repos);
      this.repos=repos
    })
  }
  findProfile(){
    this.profileService.getProfileInformation().subscribe(profile =>{
      console.log(profile)
      this.profile = profile
    })
    this.profileService.getProfileRepos().subscribe(repos=>{
      console.log(repos);
      this.repos=repos
    })
    this.profileService.updateProfile(this.username)
    
  }
  ngOnInit():void {

  }
}
  
  