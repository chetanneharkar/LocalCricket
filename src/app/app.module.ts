import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
//import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/Component/category.component';
import { MaindashboardComponent } from './maindashboard/component/maindashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AddnewsComponent } from './AddNews/Component/addnews.component';
import {CategoryService} from './category/Service/category.service';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
const appRoutes: Routes = [
   { path: 'Addnews', component: AddnewsComponent },
   { path: 'AddCategory', component: CategoryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoryComponent,
    MaindashboardComponent,
    AddnewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
