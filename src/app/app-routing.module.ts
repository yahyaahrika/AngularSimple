import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { ClientComponent } from './client/client.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ProductComponent} from './product/product.component';


const routes: Routes = [
  {
    
    path:'article',
    component:ArticleComponent,
    pathMatch:'full'

  },
  {
    path:'work',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'category',
    component:CategoryComponent,
    pathMatch:'full'
  },
  {
    path:'client',
    component:ClientComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent,
    pathMatch:'full'
  },
  {
    path:'product',
    component:ProductComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
