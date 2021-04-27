import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { CategoryInterface } from '../category-interface';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categoryList: any;
  constructor(private prodService:ProductsService ) { }

  ngOnInit(): void {
  
    this.prodService.getCategories().subscribe(data=>{
    this.categoryList=data;
    console.log(data);
    })
  }

}
