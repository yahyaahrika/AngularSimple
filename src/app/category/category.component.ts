import { Component, OnInit } from '@angular/core';
import { category } from '../catagory';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cat:category=new category(0,'Unkown');

  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(){
    console.log(this.cat);
  }
}
