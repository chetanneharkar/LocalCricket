import { Component, OnInit } from '@angular/core';
//import {AddNewsTO} from '../Model/AddNewsTO';
import {CategoryTO} from '../../category/Model/CategoryTO';
import {CategoryService} from '../../category/Service/category.service';
// import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-addnews',
  templateUrl: '../View/addnews.component.html',
  styleUrls: ['../View/addnews.component.css']
})
export class AddnewsComponent implements OnInit {

  CategoryNameList: CategoryTO[] = [];
  subCategoryNameList: CategoryTO[] = [];
  abc:number=0;
  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {
    debugger;
    this._categoryService.GetAllCategory().subscribe((Data:CategoryTO[])=>this.CategoryNameList=Data);
  }
  GetCategory(parentId:number)
  {
    this._categoryService.GetAllCategory().subscribe((Data:CategoryTO[])=>this.CategoryNameList=Data);
  }
  GetSubCategory(parentId:number)
  {
    debugger;
    this._categoryService.GetSelectedCategoryChildData(parentId).subscribe((data:CategoryTO[])=>this.subCategoryNameList=data);
  }
}
