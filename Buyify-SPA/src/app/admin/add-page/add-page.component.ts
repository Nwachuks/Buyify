import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  title: string;
  slug: string;
  content: string;

  constructor() { }

  ngOnInit() {
  }

  addPage(formValues) {

  }

}
