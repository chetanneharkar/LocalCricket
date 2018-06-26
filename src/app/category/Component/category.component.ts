import { Component, OnInit } from '@angular/core';
import { CategoryTO } from '../Model/CategoryTO';
import { CategoryService } from '../Service/category.service';
declare var jQuery: any;
@Component({
  selector: 'app-category',
  templateUrl: '../View/category.component.html'
})
export class CategoryComponent implements OnInit {
  constructor(private _categoryService: CategoryService) { }
  categoryNameList: CategoryTO[] = [];
  categoryTo: CategoryTO = {};
  subCategoryTo: CategoryTO = {};
  ngOnInit() {
    debugger;
    this.getcategory();
    this.subCategoryTo.parentCategoryId = 0;
    this.categoryTo.parentCategoryId=0;
  }
  getcategory()
  {
    this._categoryService.GetAllCategory()
      .subscribe((data: CategoryTO[]) => this.categoryNameList = data);
  }
  AddCategory() {
    debugger;
    this._categoryService.AddCategory(this.categoryTo)
      .subscribe(data => {
        this.getcategory();
      });
    this.categoryTo = {};
  }
  AddSubCategory() {
    debugger;
    this._categoryService.AddCategory(this.subCategoryTo)
      .subscribe(data => {
        this.getcategory();
      });
    this.subCategoryTo = {};
  }
  EditCategory(categoryNameTO: CategoryTO) {
    debugger;
    if (categoryNameTO.parentCategoryId < 1) {
      this.categoryTo = categoryNameTO;
      jQuery("#AddCategory").modal("show");
    }
    else {
      this.subCategoryTo = categoryNameTO;
      jQuery("#AddSubCategory").modal("show");
    }
  }
  DeleteCategory(categoryNameTO: CategoryTO) {
    debugger;
    this.categoryNameList = this.categoryNameList.filter(f => f.idcategory != categoryNameTO.idcategory);
  }
  
}