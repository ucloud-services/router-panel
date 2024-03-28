import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  references=[]

  ngOnInit() {
    fetch("assets/references.json").then(res => res.json()).then(result => this.references = result);
  }
}
