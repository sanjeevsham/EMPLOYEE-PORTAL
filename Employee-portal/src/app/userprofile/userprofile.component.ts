import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private route:Router) {
console.log("code")

   }

  ngOnInit(): void {
console.log("code")


  }

  out() {
    localStorage.clear();
    this.route.navigate(['/userlogin']);
  }

}
