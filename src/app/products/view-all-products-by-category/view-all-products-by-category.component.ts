import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryInterface } from 'src/app/site-framework/category-interface';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {
  searchCategory!: CategoryInterface | 1;
productList:any='';
  constructor(private activatedRoure:ActivatedRoute,
    private prodDervice :ProductsService) { }

  ngOnInit(): void {
    debugger;
    this.activatedRoure.params.subscribe(data =>{
      this.searchCategory=data.id;

      this.prodDervice.SearchProductCategory(this.searchCategory).subscribe(categorydata =>{
        console.log(categorydata)
        this.productList =categorydata;
      })
    })

    
  }

}
