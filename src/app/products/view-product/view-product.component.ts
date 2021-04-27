import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from '../product-interface';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId=0;
  productDetails: any;
  constructor(private activatedRoute:ActivatedRoute,
    private prodService:ProductsService) { }

  ngOnInit(): void {
    debugger
    this.activatedRoute.params.subscribe(data=>{
    this.productId = data.id;
    });

    this.prodService.ViewProduct(this.productId).subscribe(prodData =>{
    this.productDetails=prodData;
    console.log(prodData);
    })
  }

}
