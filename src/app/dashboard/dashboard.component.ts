import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'dashboard.component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  clicked = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  handleClick() {
    this.clicked = true;
    console.log(this);
    this.router.navigate(['login']);
  }
}
