import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { SearchComponent } from './container/search/search.component';
import { ContainerComponent } from './container/container.component';

import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailsComponent } from './container/product-details/product-details.component';
import { FeaturedBrandsComponent } from './container/featured-brands/featured-brands.component';
import { SetBackgroundDirective } from './CustomDirectives/SetBackground.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { AppHoverDirective } from './CustomDirectives/app-hover.directive';
import { DisableProductDirective } from './CustomDirectives/disable-product.directive';



// Here we can specify Routing
/*

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'featured-brands', component: FeaturedBrandsComponent },
];
*/


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent,
    FeaturedBrandsComponent,
    SetBackgroundDirective,
    HighlightDirective,
    AppHoverDirective,
    DisableProductDirective,
  ],
  imports: [
    BrowserModule, // This is required to run your app in a browser
    FormsModule // This is required for using forms and two-way data binding
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
