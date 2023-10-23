import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  showcard01 = true;
  showcard02 = false;
  showcard03 = false;
  showcard04 = false;

  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToList() {
    this.router.navigate(['todos'], { relativeTo: this.route });
  }

  btn01() {
    this.showcard01 = true;
    this.showcard02 = false;
    this.showcard03 = false;
    this.showcard04 = false;
  
  }
  btn02() {
    this.showcard02 = true
    this.showcard01 = false;
    this.showcard03 = false;
    this.showcard04 = false;

  }
  btn03() {
    this.showcard03 = true
    this.showcard02 = false;
    this.showcard01 = false;
    this.showcard04 = false;

  }
  btn04() {
    this.showcard04 = true;
    this.showcard02 = false;
    this.showcard03 = false;
    this.showcard01 = false;

  }
}
